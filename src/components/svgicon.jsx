import React from "react";

//import { SvgProps } from 'react-native-svg';
import * as Icons from "@app/res/icons";

const SvgIcon = React.memo(({ name, ...props }) => {
  const Comp = Icons[name];

  return <Comp {...props} />;
});

export default SvgIcon;
