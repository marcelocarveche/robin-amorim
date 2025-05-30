import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  href?: string
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLAnchorElement>

export const LinkedinIcon: React.FC<Props> = ({
  color = colors.black,
  size,
  ...props
}) => {
  return (
    <a rel="stylesheet" target="_blank" {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM7.738 17C7.041 17 6.476 16.435 6.476 15.738V11.261C6.477 10.565 7.042 10 7.738 10C8.435 10 9 10.565 9 11.262V15.739C9 16.435 8.435 17 7.738 17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM16.779 17C16.105 17 15.558 16.453 15.558 15.779V13.174C15.558 12.116 14.907 12 14.663 12C14.419 12 13.605 12.035 13.605 13.174V15.779C13.605 16.453 13.058 17 12.384 17H12.303C11.629 17 11.082 16.453 11.082 15.779V11.262C11.082 10.565 11.647 10 12.344 10C13.041 10 13.606 10.565 13.606 11.262C13.606 11.262 13.888 10 15.804 10C17.023 10 18 10.977 18 13.174V15.779C18 16.453 17.453 17 16.779 17Z"
          fill={color}
        />
      </svg>
    </a>
  )
}
