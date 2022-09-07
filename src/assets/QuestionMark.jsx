import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} {...props}>
    <g data-name="Group 10" transform="translate(-626 -573)">
      <circle
        data-name="Ellipse 1"
        cx={11.5}
        cy={11.5}
        r={11.5}
        transform="translate(626 573)"
        fill="currentColor"
      />
      <text
        data-name="?"
        transform="translate(634 589)"
        fill="#fff"
        fontSize={13}
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
        fontWeight={500}
        letterSpacing=".015em"
      >
        <tspan x={0} y={0}>
          {"?"}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgComponent
