import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} className="logo" viewBox="0 0 128 128" {...props}>
    <Path fill="#42b883" d="M78.8 10 64 35.4 49.2 10H0l64 110 64-110H78.8z" />
    <Path
      fill="#35495e"
      d="M78.8 10 64 35.4 49.2 10H25.6L64 76l38.4-66H78.8z"
    />
  </Svg>
)
export default SvgComponent
