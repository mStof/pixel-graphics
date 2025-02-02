import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={52}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#030027"
      d="M50 12.414a1.414 1.414 0 0 0 0-2.828v2.828ZM1 10a1.414 1.414 0 0 0 0 2l9 9a1.414 1.414 0 1 0 2-2l-8-8 8-8a1.414 1.414 0 1 0-2-2l-9 9Zm49-.414H2v2.828h48V9.586Z"
    />
  </Svg>
)
export { SvgComponent as LeftArrow }
