import { use, useState, useOptimistic } from "react";
import { OpinionsContext } from "../store/opinions-context";
export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const [upwardDisabled, setUpwardDisabled] = useState(false);
  const [downwardDisabled, setDownwardDisabled] = useState(false);
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);

  const [optimisticVotes, setVotesOptimistically] = useOptimistic(votes, (prevVotes, mode) => mode === "upvote" ? prevVotes + 1 : prevVotes - 1);
//mode is the argument which was passed to the setVotesOptimistically function.

  async function upVoteHandler(event) {
    event.preventDefault();
    setVotesOptimistically('up');
    setUpwardDisabled(true);
    await upvoteOpinion(id);
    setUpwardDisabled(false);
  }


  async function downVoteHandler(event) {
    event.preventDefault();
    setVotesOptimistically('down');
    setDownwardDisabled(true);
    await downvoteOpinion(id);
    setDownwardDisabled(false);
  }

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button disabled={upwardDisabled || downwardDisabled} onClick={upVoteHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button disabled={downwardDisabled} onClick={downVoteHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
