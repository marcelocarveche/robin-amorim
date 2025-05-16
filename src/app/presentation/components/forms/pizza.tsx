import React from 'react'

type Props = {
  color?: string
} & React.HTMLAttributes<HTMLDivElement>

export const PizzaForm: React.FC<Props> = ({ color = '#F5BFF1', ...props }) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 171 171"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.4547 155.746C31.5437 147.552 6.64283 109.366 14.8371 70.4547L85.2918 85.2918L100.129 14.8371C139.04 23.0314 163.941 61.2178 155.746 100.129C147.552 139.04 109.366 163.941 70.4547 155.746Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
