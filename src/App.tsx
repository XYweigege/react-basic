import React, { useContext, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { MobxContext } from "./store";
import MyA from "./components/MyA";
import MyB from "./components/MyB";
import { Observer } from "mobx-react-lite";
function App() {
  const store: any = useContext(MobxContext);

  const { t } = useTranslation();
  return (
    <div className="App">
      <MyA />
      <MyB />
    </div>
  );
}

export default App;
