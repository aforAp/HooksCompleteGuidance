export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="header">
      <h2 className="sideBarHeading">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject} className="buttonStyle">
          + Add Project
        </button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="listedProjects">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
