import React, { useState, useEffect } from "react";
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  Handle,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ColorModeFlow from "../../ColorMode/ColorModeFlow";

const WhiteSpace = ({
  tables,
  projectId,
  updateDataToBackend,
  projectDetails,
}) => {
  const [colorMode, setColorMode] = useState("dark");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState(projectDetails?.edges?.edges || []);
  const [relationshipType, setRelationshipType] = useState("One-to-One");

  useEffect(() => {
    if (projectDetails?.edges) {
      setEdges(projectDetails.edges);
    }
  }, [projectDetails]);


  useEffect(() => {
    const newNodes = [];
    const nodeIds = new Set();

    tables.forEach((table, tableIndex) => {
      if (nodeIds.has(table.name)) return;

      nodeIds.add(table.name);

      const tableNode = {
        id: table.name,
        data: { label: <TableNode label={table.name} /> },
        position: { x: 100 + tableIndex * 400, y: 100 },
        style: {
          padding: "0px",
          background: "#21F3",
          color: "#fff",
          width: "300px",
        },
        draggable: true,
      };
      newNodes.push(tableNode);

      table.columns.forEach((col, colIndex) => {
        const columnNodeId = `${table.name}-${col.name}`;
        newNodes.push({
          id: columnNodeId,
          data: { label: <ColumnNode label={col.name} /> },
          position: { x: 100 + tableIndex * 400, y: 140 + colIndex * 50 },
          parentNode: table.name,
          style: {
            padding: "5px",
            textAlign: "center",
            borderRadius: "4px",
            background: "#fff",
            margin: "2px",
            width: "300px",
          },
          draggable: true,
        });
      });
    });

    setNodes(newNodes);
  }, [tables]);

  // Handle edge connections
  const onConnect = (connection) => {
    const newEdge = {
      ...connection,
      label: relationshipType,
      animated: true,
      style: {
        stroke: relationshipType === "One-to-One" ? "red" : "yellow",
        strokeDasharray: relationshipType === "One-to-One" ? "5,5" : "none",
      },
      labelStyle: { fontSize: 10, fill: "black" },
    };

    setEdges((prevEdges) => {
      const updatedEdges = addEdge(newEdge, prevEdges);
      sendDataToBackend(updatedEdges, nodes);
      return updatedEdges;
    });
  };

  // Handle edge click (to change relationship type)
  const onEdgeClick = (event, edge) => {
    const updatedEdges = edges.map((e) => {
      if (e.id === edge.id) {
        return {
          ...e,
          label: relationshipType,
          style: {
            stroke: relationshipType === "One-to-One" ? "red" : "yellow",
            strokeDasharray: relationshipType === "One-to-One" ? "5,5" : "none",
          },
        };
      }
      return e;
    });
    setEdges(updatedEdges);
    sendDataToBackend(updatedEdges, nodes);
  };

  const sendDataToBackend = async (updatedEdges, updatedNodes) => {
    const projectData = {
      nodes: updatedNodes,
      edges: updatedEdges,
    };

    try {
      const response = await updateDataToBackend(projectId, projectData);
      console.log("Data sent to backend:", response);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className="White-space flex">
      <div
        id="whiteBoard"
        className={`h-[100vh] w-full border ${
          colorMode === "dark" ? "bg-gray-900" : "bg-[#f8d5a1]"
        }`}
      >
        <div className="absolute top-32 left-16">
          <select
            className="p-2 border rounded-md bg-[#f8d5a1] text-black"
            onChange={(e) => setRelationshipType(e.target.value)}
            value={relationshipType}
          >
            <option value="One-to-One">One-to-One</option>
            <option value="One-to-Many">One-to-Many</option>
            <option value="Many-to-Many">Many-to-Many</option>
          </select>
        </div>

        {edges && (
          <ReactFlow
            nodes={nodes}
            edges={edges }
            onConnect={onConnect}
            onEdgeClick={onEdgeClick}
          >
            <Controls />
            <MiniMap
              style={{
                backgroundColor: colorMode === "dark" ? "#333" : "gray",
              }}
            />
            <Background />
            <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
          </ReactFlow>
        )}
      </div>
    </div>
  );
};

const TableNode = ({ label }) => (
  <div className="p-3 font-bold text-center text-sm text-white ">
    <h3>{label}</h3>
  </div>
);

const ColumnNode = ({ label }) => (
  <div
    className="p-0 text-center rounded bg-white m-0"
    style={{ width: "300px" }}
  >
    <p className="text-lg p-2">{label}</p>
    <Handle
      type="source"
      position="right"
      id={`${label}-source`}
      style={{ background: "green", width: "10px", height: "10px" }}
    />
    <Handle
      type="target"
      position="left"
      id={`${label}-target`}
      style={{ background: "red", width: "10px", height: "10px" }}
    />
  </div>
);

export default WhiteSpace;
