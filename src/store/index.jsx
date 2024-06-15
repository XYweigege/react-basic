import React, { ReactNode, createContext } from "react";
import { useLocalObservable, observer } from "mobx-react-lite";

export const MobxContext = createContext(null);

export const Store = observer(({ children }) => {
  const store = useLocalObservable(() => ({
    count: 1,
    get getCount() {
      return store.count;
    },
    setCount(val) {
      store.count = val;
    },
  }));
  return <MobxContext.Provider value={store}>{children}</MobxContext.Provider>;
});
