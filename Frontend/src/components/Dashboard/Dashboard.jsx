import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllProjects,
  createProject,
  deleteProjectById,
} from "../../utils/ApiEndPoints/ApiEndPoint";
import { toast } from "react-toastify";
import ProjectCard from "./ProjectCard";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("erd");
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const response = await getAllProjects();
      setProjects(response.data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      description,
      type: projectType,
    };

    try {
      await createProject(newProject);
      toast.success("Project created successfully!");
      setOpenModal(false);
      setProjectName("");
      setDescription("");
      setProjectType("erd");
      fetchProjects();
    } catch (error) {
      toast.error("Failed to create project!");
      console.error("Failed to create project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProjectById(id);
      toast.success("Project deleted successfully!");
      fetchProjects();
    } catch (error) {
      toast.error("Failed to delete project!");
      console.error("Failed to delete project:", error);
    }
  };

  const handleCardClick = (project) => {
    if (project.type === "sd") {
      navigate(`/whiteSpace/${project._id}`);
    } else {
      navigate(`/schema/${project._id}`);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
          <h1 className="text-[#7c294f] text-3xl text-center my-6 font-bold">Dashboard</h1>
          <button
            onClick={() => setOpenModal(true)}
            className="px-4 py-2 relative left-1/3 md:left-28 bg-[#471953] text-white font-semibold rounded-lg hover:bg-[#612270]"
          >
            Create Project
          </button>
          <div className="container mx-auto p-4">
  {projects && projects.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project) => (
        <div key={project._id}>
          <ProjectCard 
            data={project} 
            clickHandler={handleCardClick} 
            deleteHandler={handleDeleteProject} 
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="flex items-center justify-center h-64">
      <p className="text-center text-[#7c294f] text-3xl ">
        No projects found
      </p>
    </div>
  )}
</div>


      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-[#FAC67A] w-11/12 max-w-lg rounded-lg p-6 shadow-lg relative">
            
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold text-[#7c294f] mb-4">
              Add Project Details
            </h2>

            <form onSubmit={handleCreateProject} className="space-y-4">
              
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Name
                </label>
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  type="text"
                  id="projectName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#471953] focus:border-[#471953] sm:text-sm"
                  placeholder="Enter project name"
                  required
                />
              </div>

              
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#471953] focus:border-[#471953] sm:text-sm"
                  placeholder="Enter project description"
                  required
                ></textarea>
              </div>

              
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  id="projectType"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#471953] focus:border-[#471953] sm:text-sm"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="erd">Schema Database</option>
                  <option value="sd">E-R Diagram</option>
                </select>
              </div>

        
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#471953] text-white font-semibold rounded-lg hover:bg-[#612270] focus:ring-2 focus:ring-[#5b206a]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
