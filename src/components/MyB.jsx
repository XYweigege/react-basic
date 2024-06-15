import React, { memo } from "react";
import { useContext, useEffect } from "react";
import { MobxContext } from "@/store";
import { observer } from "mobx-react-lite";
const MyB = observer(() => {
  const { getCount } = useContext(MobxContext);

  return <div>{getCount}</div>;
});

export default MyB;
