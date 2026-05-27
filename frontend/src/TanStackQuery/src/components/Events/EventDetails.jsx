import { Link, Outlet, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";
export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
  console.log("The react query data");
  console.log(data);

  const {
    mutate,
    isPending: isDeletePending,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleCancelDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event Data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-error" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message || "Failed to fetch the data please try again"
          }
        />
      </div>
    );
  }
  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data?.image}`} alt={data?.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={data?.date + "T" + data?.time}>
                {formattedDate} at {data?.time}
              </time>
            </div>
            <p id="event-details-description">{data?.description}</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {isDeleting && (
        <Modal onClose={handleCancelDelete}>
          <p>Are you sure you want to delete this event?</p>
          <div className="form-actions">
            {isDeletePending && <p>Deleting event, Please wait....</p>}
            {!isDeletePending && (
              <>
                <button onClick={handleDelete} className="button-text">
                  delete
                </button>
                <button onClick={handleCancelDelete} className="button">
                  cancel
                </button>
              </>
            )}
          </div>
          {isErrorDeleting && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                deleteError.info?.message ||
                "Failed to delete the event, please try again"
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
      <Outlet />
    </>
  );
}
