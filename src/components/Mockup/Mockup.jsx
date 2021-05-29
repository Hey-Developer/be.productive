import React, { useState, useRef } from "react";
import ExcalidrawWrapper from "./ExcalilDraw/ExcalidrawWrapper";
import { MockupWrapper } from "./mockup.styles.tw";
import Sidebar from "./Sidebar/Sidebar";

const Mockup = ({ maximize, setMaximize }) => {
  const excalidrawRef = useRef(null);

  const [viewModeEnabled, setViewModeEnabled] = useState(false);
  const [zenModeEnabled, setZenModeEnabled] = useState(false);
  const [gridModeEnabled, setGridModeEnabled] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <MockupWrapper>
      <Sidebar
        viewModeEnabled={viewModeEnabled}
        setViewModeEnabled={setViewModeEnabled}
        zenModeEnabled={zenModeEnabled}
        setZenModeEnabled={setZenModeEnabled}
        gridModeEnabled={gridModeEnabled}
        setGridModeEnabled={setGridModeEnabled}
        theme={theme}
        setTheme={setTheme}
        excalidrawRef={excalidrawRef}
      />
      <ExcalidrawWrapper
        maximize={maximize}
        setMaximize={setMaximize}
        excalidrawRef={excalidrawRef}
        viewModeEnabled={viewModeEnabled}
        zenModeEnabled={zenModeEnabled}
        gridModeEnabled={gridModeEnabled}
        theme={theme}
      />
    </MockupWrapper>
  );
};

export default React.memo(Mockup);
