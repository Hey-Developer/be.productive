import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <TodoContextProvider>
      <div className="relative">
        <Hero setTabValue={setTabValue} />
        <Main tabValue={tabValue} setTabValue={setTabValue} />
      </div>
    </TodoContextProvider>
  );
};

export default App;
