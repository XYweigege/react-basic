import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Pages } from "@/route/index";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<span>loading</span>}>{useRoutes(Pages)}</Suspense>
    </div>
  );
}

export default App;
