import React, { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  MiniMap,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { ExportButton } from "../ExportButton/ExportButton";
import ColorModeFlow from "../ColorMode/ColorModeFlow";
import {
  CircleNode,
  DiamondNode,
  ParallelogramNode,
  RectangleNode,
  SquareNode,
} from "../Another/Shape";
import { useParams } from "react-router-dom";
import { getProjectById, updateProjectById } from "../../utils/ApiEndPoints/ApiEndPoint";


const nodeTypes = {
  rectangle: RectangleNode,
  parallelogram: ParallelogramNode,
  circle: CircleNode,
  square: SquareNode,
  diamond: DiamondNode,
};

const WhiteSpace = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [colorMode, setColorMode] = useState("dark");

  const projectId = useParams().id;

  useEffect(()=>{
   getProjectDetails()

  },[projectId]);

  const sendDataTobackend = async(nodesData, edgeData)=>{
    const data = {
      nodes: nodesData,
      edges: edgeData
    }
    try {
      const res = await updateProjectById(projectId, data)
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getProjectDetails = async()=>{
    try {
      const res = await  getProjectById(projectId);
      setNodes(res.data.nodes)
      setEdges(res.data.edges)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        const newEdges = addEdge(
          {
            ...params,
            type: "smoothstep",
            markerEnd: { width: 10, height: 10, color: "#3470e4" },
            style: { strokeWidth: 2, stroke: "#3470e4" },
          },
          eds
        );
        sendDataTobackend(nodes, newEdges);
        return newEdges;
      });
    },
    [nodes]
  );

  const addNode = (shapeType) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${nodes.length + 1}` },
      type: shapeType,
    };
    const updatedNodes = [...nodes, newNode];
    setNodes(updatedNodes);
    sendDataTobackend(updatedNodes, edges);
  };

  const deleteNode = () => {
    const updatedNodes = nodes.filter((node) => node.id !== selectedNodeId);
    const updatedEdges = edges.filter(
      (edge) =>
        edge.source !== selectedNodeId && edge.target !== selectedNodeId
    );
  
    setNodes(updatedNodes);
    setEdges(updatedEdges);
    
    // Send updated nodes and edges to the backend
    sendDataTobackend(updatedNodes, updatedEdges);
    
    // Reset selectedNodeId after deletion
    setSelectedNodeId(null);
  };
  
  const applyLabelChange = () => {
    const updatedNodes = nodes.map((node) =>
      node.id === selectedNodeId
        ? { ...node, data: { ...node.data, label: newLabel } }
        : node
    );
  
    setNodes(updatedNodes);
    sendDataTobackend(updatedNodes, edges);
    
    setNewLabel("");
    setSelectedNodeId(null);
  };
  
  const handleLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  return (
    <div className="flex h-screen pt-20 pb-40 bg-[#F9E6CF]">
      <div className="w-1/5 py-4 px-2 ">
        <h2 className="text-xl md:text-2xl  text-center text-[#a33669] font-bold mb-4">Tools</h2>
        <ExportButton elementId="whiteBoard" />
        <button
          className="flex items-center mt-2 justify-center bg-[#FAC67A] hover:bg-[#d6a55c] text-black px-4 py-1 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
          onClick={() => addNode("rectangle")}
        >
          <i className="md:hidden text-[#7c294f] fas fa-border-all mr-2"></i>
          <span className="hidden sm:inline">Add Rectangle</span>
        </button>
        <button
          className="flex items-center mt-2 justify-center bg-[#FAC67A] hover:bg-[#d6a55c] text-black px-4 py-1 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
          onClick={() => addNode("parallelogram")}
        >
          <i className="md:hidden text-[#7c294f] fas fa-draw-polygon mr-2"></i>
          <span className="hidden sm:inline">Add Parallelogram</span>
        </button>
        <button
          className="flex items-center mt-2 justify-center bg-[#FAC67A] hover:bg-[#d6a55c] text-black px-4 py-1 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
          onClick={() => addNode("circle")}
        >
          <i className="md:hidden text-[#7c294f] fas fa-circle mr-2"></i>
          <span className="hidden sm:inline">Add Circle</span>
        </button>
        <button
          className="flex items-center mt-2 justify-center bg-[#FAC67A] hover:bg-[#d6a55c] text-black px-4 py-1 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
          onClick={() => addNode("square")}
        >
          <i className="md:hidden text-[#7c294f] fas fa-square mr-2"></i>
          <span className="hidden sm:inline">Add Square</span>
        </button>
        <button
          className="flex items-center mt-2 justify-center bg-[#FAC67A] hover:bg-[#d6a55c] text-black px-4 py-1 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
          onClick={() => addNode("diamond")}
        >
          <i className="md:hidden text-[#7c294f] fas fa-gem mr-2"></i>
          <span className="hidden sm:inline">Add Diamond</span>
        </button>

        {selectedNodeId && (
          <>
           <button
            className="flex items-center mt-2 justify-center bg-[#7c294f] hover:bg-[#5d223c] text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
            onClick={deleteNode}
          >
            <i className="md:hidden fas fa-trash-alt mr-2"></i>
            <span className="hidden sm:inline">Delete Node</span>
          </button>
          <input
            className="w-full p-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#7c294f]"
            type="text"
            value={newLabel}
            onChange={handleLabelChange}
            placeholder="New Label"
          />
          <button
            className="flex items-center justify-center bg-[#7c294f] hover:bg-[#5d223c] text-white px-4 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-lg w-full"
            onClick={applyLabelChange}
          >
            <i className="md:hidden fas fa-edit mr-2"></i>
            <span className="hidden sm:inline"> Change Label</span>
           
          </button>
          </>
        )}
      </div>
    <div
      id="whiteBoard"
      className={`flex-1 h-[80vh]  border ${colorMode === "dark" ? "bg-gray-900" : "bg-[#f8d5a1]"} `}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        nodeTypes={nodeTypes}
      >
        
        <ColorModeFlow colorMode={colorMode} setColorMode={setColorMode} />
        <Controls />
        <MiniMap
          style={{ backgroundColor: colorMode === "dark" ? "#333" : "gray" }}
        />
        <Background />
      </ReactFlow>
    </div>
  </div>
  );
};

export default WhiteSpace;
