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
      d="M2 9.586a1.414 1.414 0 0 0 0 2.828V9.586ZM51 12a1.414 1.414 0 0 0 0-2l-9-9a1.414 1.414 0 1 0-2 2l8 8-8 8a1.414 1.414 0 1 0 2 2l9-9Zm-49 .414h48V9.586H2v2.828Z"
    />
  </Svg>
)
export { SvgComponent as RightArrow }
