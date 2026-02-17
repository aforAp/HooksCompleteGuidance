import clsx from 'clsx';
export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="header">
      <h2 className="sideBarHeading">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject} className="buttonStyle">
          + Add Project
        </button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses = clsx("listedProjects");
          if(project.id === selectedProjectId) {
            cssClasses = clsx("listedProjects", "bg-stone-800 text-stone-200");
          } else {
            cssClasses = clsx("listedProjects", "text-stone-400");
          }
          return (
            <li key={project.id}>
            <button className={cssClasses} onClick={() => onSelectProject(project.id)}>
              {project.title}
            </button>
          </li>
          )
        })}
      </ul>
    </aside>
  );
}
