import React, { useState } from "react";
import { Input } from "../Sidebar/sidebar.styles.tw";
import { Button, ExportWrapper, OpenBtn } from "./excalidraw.styles.tw";
import {
  exportToCanvas,
  exportToSvg,
  exportToBlob,
} from "@excalidraw/excalidraw";
import downloadFile from "js-file-download";

import { getInitialData } from "./initialData";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library Creation
library.add(fas);

const RenderFooter = ({ excalidrawRef, viewModeEnabled }) => {
  const initialData = getInitialData();
  const [exportWithDarkMode, setExportWithDarkMode] = useState(false);
  const [shouldAddWatermark, setShouldAddWatermark] = useState(false);
  const [open, setOpen] = useState(false);

  const exportToSvgHandler = () => {
    const svg = exportToSvg({
      elements: excalidrawRef.current.getSceneElements(),
      appState: {
        ...initialData.appState,
        exportWithDarkMode,
        shouldAddWatermark,
      },
    });
    downloadFile(svg, "exportAsSvg.svg");
  };

  const exportToBlobHandler = async () => {
    const blob = await exportToBlob({
      elements: excalidrawRef.current.getSceneElements(),
      mimeType: "image/png",
      appState: {
        ...initialData.appState,
        exportWithDarkMode,
        shouldAddWatermark,
      },
    });
    downloadFile(blob, "exportAsBlob.txt");
  };

  const exportToCanvasHandler = () => {
    const canvas = exportToCanvas({
      elements: excalidrawRef.current.getSceneElements(),
      appState: {
        ...initialData.appState,
        exportWithDarkMode,
        shouldAddWatermark,
      },
    });
    downloadFile(canvas, "exportAsCanvas.jpg");
  };

  return (
    <ExportWrapper open={open}>
      <OpenBtn onClick={() => setOpen(!open)} open={open}>
        {open ? (
          <FontAwesomeIcon icon={["fas", "chevron-left"]} />
        ) : (
          <FontAwesomeIcon icon={["fas", "chevron-right"]} />
        )}
      </OpenBtn>
      <label className={viewModeEnabled ? "mx-2" : "mx-0"}>
        <Input
          type="checkbox"
          checked={exportWithDarkMode}
          onChange={() => setExportWithDarkMode(!exportWithDarkMode)}
        />
        Export with dark mode
      </label>
      <label className={viewModeEnabled ? "mx-2" : "mx-0"}>
        <Input
          type="checkbox"
          checked={shouldAddWatermark}
          onChange={() => setShouldAddWatermark(!shouldAddWatermark)}
        />
        Add Watermark
      </label>
      <Button viewModeEnabled={viewModeEnabled} onClick={exportToSvgHandler}>
        Export To Svg
      </Button>
      <Button viewModeEnabled={viewModeEnabled} onClick={exportToBlobHandler}>
        Export To Blob
      </Button>
      <Button viewModeEnabled={viewModeEnabled} onClick={exportToCanvasHandler}>
        Export To Canvas
      </Button>
    </ExportWrapper>
  );
};

export default React.memo(RenderFooter);
