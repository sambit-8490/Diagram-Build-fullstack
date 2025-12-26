import React from "react";
import { Handle, Position } from "@xyflow/react";

const RectangleNode = ({ data }) => (
  <div
    style={{
      width: "100px",
      height: "40px",
      padding: 10,
      border: "1px solid black",
      borderRadius: 5,
      textAlign: "center",
      backgroundColor: "violet",
      color: "white",
    }}
  >
    {data.label}
    <Handle type="source" position={Position.Right} />
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Top} />
    <Handle type="target" position={Position.Bottom} />
  </div>
);

const ParallelogramNode = ({ data }) => (
  <div
    style={{
      width: "100px",
      height: "40px",
      textAlign: "center",
      padding: 10,
      border: "1px solid black",
      transform: "skewX(-20deg)",
      borderRadius: 1,
      backgroundColor: "#6b35c3",
      color: "white",
    }}
  >
    {data.label}
    <Handle
      type="source"
      position={Position.Right}
      style={{ transform: "skewX(20deg)", right: -7 }}
    />
    <Handle type="source" position={Position.Top} />
    <Handle type="target" position={Position.Bottom} />

    <Handle
      type="target"
      position={Position.Left}
      style={{ transform: "skewX(20deg)", left: -7, top: 18 }}
    />
  </div>
);

const CircleNode = ({ data }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
      display: "flex",
      alignItems: "center",
      border: "1px solid black",
      justifyContent: "center",
      borderRadius: "50%",
      backgroundColor: "#18bc99",
      color: "white",
    }}
  >
    {data.label}
    <Handle type="source" position={Position.Bottom} />
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Right} />
    <Handle type="target" position={Position.Left} />
  </div>
);

const SquareNode = ({ data }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      border: "1px solid black",
      borderRadius: 5,
      backgroundColor: "#3672b9",
      color: "white",
    }}
  >
    {data.label}
    <Handle type="source" position={Position.Right} />
    <Handle type="target" position={Position.Left} />
    <Handle type="source" position={Position.Top} />
    <Handle type="target" position={Position.Bottom} />
  </div>
);

const DiamondNode = ({ data }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
      transform: "rotate(-45deg)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black",
      backgroundColor: "#be8037",
      color: "white",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "30%",
        transform: "rotate(45deg)",
      }}
    >
      {data.label}
    </div>

    <Handle
      type="source"
      position={Position.Top}
      style={{ transform: "rotate(-45deg)", top: -7, left: 100 }}
    />
    <Handle
      type="source"
      position={Position.Right}
      style={{ transform: "rotate(-45deg)", left: -7, top: -5 }}
    />
    <Handle
      type="target"
      position={Position.Left}
      style={{ transform: "rotate(-45deg)", left: 100, top: 100 }}
    />
    <Handle
      type="target"
      position={Position.Bottom}
      style={{ transform: "rotate(-45deg)", bottom: -7, left: -7 }}
    />
  </div>
);

export {
  RectangleNode,
  ParallelogramNode,
  CircleNode,
  SquareNode,
  DiamondNode,
};
