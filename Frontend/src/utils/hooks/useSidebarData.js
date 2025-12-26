import { useEffect, useState } from "react";
import { getProjectById, updateProjectById } from "../ApiEndPoints/ApiEndPoint";

const useSidebarData = (projectId) => {
  const [tables, setTables] = useState([]);
  const [tableCounter, setTableCounter] = useState(1);
  const [editingTable, setEditingTable] = useState(null);
  const [showActions, setShowActions] = useState(null);
  const [expandedTable, setExpandedTable] = useState(null);

  // Fetch project data including tables
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await getProjectById(projectId);
        if (response && response.data) {
          setTables(response.data.tables || []);
        }
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    };
    fetchProjectData();
  }, [projectId]);

  const updateProject = async (updatedTables) => {
    const data = { tables: updatedTables };

    try {
      const response = await updateProjectById(projectId, data);
      if (response && response.data) {
        setTables(response.data.tables); // Update the state with the latest tables from backend
      }
    } catch (error) {
      console.error("Error updating project", error);
    }
  };

  // Add new table function
  const addTable = () => {
    const newTable = {
      name: `table_${tableCounter}`,
      columns: [{ name: "id", type: "bigint" }],
      comments: [],
    };

    setTables((prevTables) => {
      const updatedTables = [...prevTables, newTable];
      setTableCounter(tableCounter + 1); // Increment table counter
      updateProject(updatedTables); // Pass updated tables to backend
      return updatedTables;
    });
  };

  // Handle renaming a table
  const handleRename = (index, newName) => {
    const updatedTables = [...tables];
    updatedTables[index].name = newName;
    setTables(updatedTables);
    setEditingTable(null);
    updateProject(updatedTables); // Update the backend after renaming
  };

  // Add new column to a table
  const addColumn = (index) => {
    const updatedTables = [...tables];
    updatedTables[index].columns.push({
      name: `column_${updatedTables[index].columns.length + 1}`,
      type: "bigint",
    });
    setTables(updatedTables);
    updateProject(updatedTables); // Update the backend after adding a column
  };

  // Update column details
  const updateColumn = (tableIndex, colIndex, field, value) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].columns[colIndex][field] = value;
    setTables(updatedTables);
    updateProject(updatedTables); // Update the backend after modifying a column
  };

  // Delete a column
  const deleteColumn = (tableIndex, colIndex) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].columns.splice(colIndex, 1);
    setTables(updatedTables);
    updateProject(updatedTables); // Update the backend after deleting a column
  };

  // Duplicate a table
  const duplicateTable = (index) => {
    const tableToDuplicate = tables[index];
    const newTable = {
      ...tableToDuplicate,
      name: `${tableToDuplicate.name}_duplicate_${tableCounter}`,
      columns: tableToDuplicate.columns.map((column) => ({ ...column })),
    };
    setTables([...tables, newTable]);
    setTableCounter(tableCounter + 1);
    updateProject([...tables, newTable]); // Update the backend after duplicating
  };

  // Toggle table expansion for sidebar display
  const toggleExpand = (index) => {
    setExpandedTable(expandedTable === index ? null : index);
  };

  // Add comment to a table
  const addComment = (index) => {
    const comment = prompt("Enter your comment:");
    if (comment) {
      const updatedTables = [...tables];
      updatedTables[index].comments.push(comment);
      setTables(updatedTables);
      updateProject(updatedTables);
    }
  };

  return {
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
  };
};

export default useSidebarData;
