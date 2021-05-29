import React, { useEffect, useState } from "react";
import { Wrapper } from "./excalidraw.styles.tw";
import Excalidraw from "@excalidraw/excalidraw";
import { getInitialData } from "./initialData";
import RenderFooter from "./RenderFooter";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library Creation
library.add(fas);

const RenderTopRightUI = ({ maximize, setMaximize }) => {
  if (!maximize)
    return (
      <FontAwesomeIcon
        onClick={() => setMaximize(!maximize)}
        icon={["fas", "external-link-square-alt"]}
        className="text-2xl text-black hover:text-appAccent4 transform hover:scale-125 transition-all mr-1 mt-1"
      />
    );
  return (
    <FontAwesomeIcon
      onClick={() => setMaximize(!maximize)}
      icon={["fas", "external-link-square-alt"]}
      className="text-2xl text-black hover:text-appAccent4 transform hover:scale-125 transition-all mr-1 mt-1 rotate-180"
    />
  );
};

const ExcalidrawWrapper = ({
  excalidrawRef,
  viewModeEnabled,
  zenModeEnabled,
  gridModeEnabled,
  theme,
  maximize,
  setMaximize,
}) => {
  const initialData = getInitialData();

  useEffect(() => {
    const onHashChange = () => {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const libraryUrl = hash.get("addLibrary");
      if (libraryUrl) {
        excalidrawRef.current.importLibrary(libraryUrl, hash.get("token"));
      }
    };
    window.addEventListener("hashchange", onHashChange, false);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <Wrapper>
      <Excalidraw
        ref={excalidrawRef}
        initialData={initialData}
        onChange={(elements, state) => {}}
        // onPointerUpdate={(payload) => console.log(payload)}
        onCollabButtonClick={() => window.alert("You clicked on collab button")}
        viewModeEnabled={viewModeEnabled}
        zenModeEnabled={zenModeEnabled}
        gridModeEnabled={gridModeEnabled}
        theme={theme}
        name="Custom name of drawing"
        UIOptions={{ canvasActions: { loadScene: false } }}
        renderTopRightUI={() => (
          <RenderTopRightUI maximize={maximize} setMaximize={setMaximize} />
        )}
        renderFooter={() => (
          <RenderFooter
            excalidrawRef={excalidrawRef}
            viewModeEnabled={viewModeEnabled}
          />
        )}
      />
    </Wrapper>
  );
};

export default React.memo(ExcalidrawWrapper);
