import { toast } from "react-toastify";
import { getProjectById, updateProjectById } from "../../utils/ApiEndPoints/ApiEndPoint.js";
import useSidebarData from "../../utils/hooks/useSidebarData.js";
import Sidebar from "./SideBar/Sidebar.jsx";
import WhiteSpace from "./WhiteSpace/WhiteSpace.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Schema() {
  const projectID = useParams().id;
  const [projectDetails, setProjectDetails] = useState(null)
  const {
    tables,
    setTables,
    tableCounter,
    setTableCounter,
    editingTable,
    setEditingTable,
    showActions,
    setShowActions,
    expandedTable,
    setExpandedTable,
    addTable,
    handleRename,
    addColumn,
    updateColumn,
    deleteColumn,
    duplicateTable,
    toggleExpand,
    addComment,
  } = useSidebarData(projectID);


  const getProjectDetails = async()=>{
    try {
      const res = await getProjectById(projectID);
      setProjectDetails(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    getProjectDetails()
  },[])

  const handleUpdateData = async(id, data)=>{
    try {
      const res = await updateProjectById(id, data);
      return res
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="md:flex h-screen pt-20 bg-[#F9E6CF]">
      <Sidebar
        tables={tables}
        setTables={setTables}
        tableCounter={tableCounter}
        setTableCounter={setTableCounter}
        editingTable={editingTable}
        setEditingTable={setEditingTable}
        showActions={showActions}
        setShowActions={setShowActions}
        expandedTable={expandedTable}
        setExpandedTable={setExpandedTable}
        addTable={addTable}
        handleRename={handleRename}
        addColumn={addColumn}
        updateColumn={updateColumn}
        deleteColumn={deleteColumn}
        duplicateTable={duplicateTable}
        toggleExpand={toggleExpand}
        addComment={addComment}
      />
      <WhiteSpace projectDetails={projectDetails} projectId={projectID} updateDataToBackend={handleUpdateData} tables={tables} />
    </div>
  );
}

export default Schema;
