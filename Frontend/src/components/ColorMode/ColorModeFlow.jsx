import React, { useEffect, useState } from "react";
import { Panel } from "@xyflow/react";

const ColorModeFlow = ({ colorMode, setColorMode }) => {
  const onChange = (evt) => {
    setColorMode(evt.target.value);
    console.log(colorMode);
  };

  return (
    <div>
      <Panel position="top-right">
        <select onChange={onChange} data-testid="colormode-select" className="bg-[#7c294f] hover:bg-[#6a2343] text-white text-sm font-medium px-4 py-2 rounded">
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>
      </Panel>
    </div>
  );
};

export default ColorModeFlow;
