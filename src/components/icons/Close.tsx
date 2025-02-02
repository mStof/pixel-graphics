import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#030027"
      d="M8 6.464 1.855.318A1.086 1.086 0 0 0 .318 1.855L6.464 8 .318 14.146a1.086 1.086 0 0 0 1.537 1.536L8 9.536l6.146 6.146a1.087 1.087 0 0 0 1.536-1.537L9.536 8l6.146-6.145A1.086 1.086 0 0 0 14.145.318L8 6.464Z"
    />
  </Svg>
);
export { SvgComponent as CloseIcon };
