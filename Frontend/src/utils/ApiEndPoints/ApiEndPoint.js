import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
  timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Authentication APIs
const loginUser = async(data) => {
  console.log(data)
  try {
    const res = await apiClient.post("/users/login", data);
    return res;
  } catch (error) {
    return error;
  }
};

const signupUser = async(data) =>{
  try {
    const res = await apiClient.post("/users/", data);
    return res;
  } catch (error) {
    return error;
  }
};

const getUserDetails = async() => {
  try {
    const res = await apiClient.get(`/users/getUser`);
    return res;
  } catch (error) {
    return error;
  }
};

const createProject = async(data) => {
 try {
  const res = await apiClient.post("/project/", data)
  return res;
 } catch (error) {
  return error;
 }
};

const getProjectById = async(id) => {
  try {
    const res = await apiClient.get(`/project/getProject/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

const updateProjectById = async(id, data) =>{

  try {
    const res = await apiClient.put(`/project/updateProject/${id}`, data);
    return res;
  } catch (error) {
    return error;
}
};

const deleteProjectById = async(id) => {
  try {
    const res = await apiClient.put(`/project/deleteProject/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

const getAllProjects = async() =>{
  try {
    const res = await apiClient.get("/project/getAllProjects");
    return res;
  } catch (error) {
    return error;
  }
};

export {
  loginUser,
  signupUser,
  getUserDetails,
  createProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  getAllProjects,
};
