// Packages Import
import React, { useEffect, useState } from "react";
import { Button, SidebarWrapper, Input } from "./sidebar.styles.tw";
import { getInitialData } from "../ExcalilDraw/initialData";

const Sidebar = ({
  viewModeEnabled,
  setViewModeEnabled,
  zenModeEnabled,
  setZenModeEnabled,
  gridModeEnabled,
  setGridModeEnabled,
  theme,
  setTheme,
  excalidrawRef,
}) => {
  const [mockupData, setMockupData] = useState(() => getInitialData());
  const updateScene = () => {
    const sceneData = {
      elements: [
        {
          type: "rectangle",
          version: 141,
          versionNonce: 361174001,
          isDeleted: false,
          id: "oDVXy8D6rom3H1-LLH2-f",
          fillStyle: "hachure",
          strokeWidth: 1,
          strokeStyle: "solid",
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 100.50390625,
          y: 93.67578125,
          strokeColor: "#c92a2a",
          backgroundColor: "transparent",
          width: 186.47265625,
          height: 141.9765625,
          seed: 1968410350,
          groupIds: [],
        },
      ],
      appState: {
        viewBackgroundColor: "#edf2ff",
      },
    };
    excalidrawRef.current.updateScene(sceneData);
  };

  useEffect(() => {
    localStorage.setItem(
      "be.productive-mockup-state",
      JSON.stringify(mockupData)
    );
  }, [mockupData]);

  const saveStateHandler = () => {
    // localStorage.setItem(
    //   "the.editor-mockup-state",
    //   JSON.stringify({
    //     elements: [...excalidrawRef.current.getSceneElements()],
    //     appState: {
    //       ...excalidrawRef.current.getAppState(),
    //     },
    //     ...mockupData,
    //   })
    // );
    setMockupData({
      ...mockupData,
      elements: excalidrawRef.current.getSceneElements(),
      appState: {
        viewBackgroundColor:
          excalidrawRef.current.getSceneElements().viewBackgroundColor,
        currentItemFontFamily:
          excalidrawRef.current.getSceneElements().currentItemFontFamily,
      },
    });
    console.log(mockupData);
  };

  return (
    <SidebarWrapper>
      <Button onClick={saveStateHandler}>Save Scene</Button>
      <Button onClick={updateScene}>Update Scene</Button>
      <Button
        onClick={() => {
          excalidrawRef.current.resetScene();
        }}>
        {" "}
        Reset Scene
      </Button>
      <label>
        <Input
          type="checkbox"
          checked={viewModeEnabled}
          onChange={() => setViewModeEnabled(!viewModeEnabled)}
        />
        View mode
      </label>
      <label>
        <Input
          type="checkbox"
          checked={zenModeEnabled}
          onChange={() => setZenModeEnabled(!zenModeEnabled)}
        />
        Zen mode
      </label>
      <label>
        <Input
          type="checkbox"
          checked={gridModeEnabled}
          onChange={() => setGridModeEnabled(!gridModeEnabled)}
        />
        Grid mode
      </label>
      <label>
        <Input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => {
            let newTheme = "light";
            if (theme === "light") {
              newTheme = "dark";
            }
            setTheme(newTheme);
          }}
        />
        Switch to Dark Theme
      </label>
    </SidebarWrapper>
  );
};

export default Sidebar;

/* 
<OpenBtn onClick={() => setOpen(!open)} open={open}>
        <FontAwesomeIcon icon={["fas", "chevron-down"]} />
</OpenBtn>
*/
