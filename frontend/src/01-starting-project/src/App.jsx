import NewProject from "./components/NewProject.jsx";
import ProjectSidebar from "./components/ProjectSideBar.jsx";
import './input.css';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* flex will take take entire height it will stretch */}
   <ProjectSidebar />
   <NewProject />
    </main>
  );
}

export default App;
