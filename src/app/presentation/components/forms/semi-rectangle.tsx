import React from 'react'

type Props = {
  color?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const SemiRectangleForm: React.FC<Props> = ({
  color = '#FF7A02',
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 212 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.3885 146.578C20.6369 115.456 25.8011 70.1618 56.923 45.4102C88.0449 20.6586 133.339 25.8228 158.091 56.9447L211.367 123.932L98.6643 213.566L45.3885 146.578Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
