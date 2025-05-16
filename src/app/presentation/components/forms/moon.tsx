import React from 'react'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLDivElement>

export const MoonForm: React.FC<Props> = ({
  color = '#6779FF',
  size,
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 177 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101.214 240.107C45.3151 219.298 16.8693 157.113 37.6787 101.214C58.4881 45.3151 120.673 16.8693 176.572 37.6787L101.214 240.107Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
