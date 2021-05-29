import React, { useState } from "react";
import Mockup from "../Mockup/Mockup";
import Todo from "../Todo/Todo";
import { MainWrapper, Tab, Tabs } from "./main.styles.tw";
import TabPanel from "./TabPanel";

const Main = ({ setTabValue, tabValue }) => {
  const [maximize, setMaximize] = useState(false);

  return (
    <MainWrapper maximize={maximize}>
      <Tabs>
        <Tab selected={tabValue === 0} value={0} onClick={() => setTabValue(0)}>
          Mockup
        </Tab>
        <Tab selected={tabValue === 1} value={1} onClick={() => setTabValue(1)}>
          ToDo
        </Tab>
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <Mockup maximize={maximize} setMaximize={setMaximize} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Todo maximize={maximize} setMaximize={setMaximize} />
      </TabPanel>
    </MainWrapper>
  );
};

export default React.memo(Main);
