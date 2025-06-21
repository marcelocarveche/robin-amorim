import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const FirstDraftIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_687_4423)">
        <g filter="url(#filter0_d_687_4423)">
          <rect
            x="2"
            y="12.186"
            width="56"
            height="40.6275"
            rx="0.928979"
            fill="white"
          />
        </g>
        <path
          d="M2 13.1194C2 12.6039 2.41787 12.186 2.93333 12.186H57.0667C57.5821 12.186 58 12.6039 58 13.1194V16.5782H2V13.1194Z"
          fill="#E2E2E2"
        />
        <rect
          x="4.19629"
          y="19.8726"
          width="6.58824"
          height="4.39216"
          fill="#E2E2E2"
        />
        <rect
          x="12.9805"
          y="19.8726"
          width="6.58824"
          height="4.39216"
          fill="#E2E2E2"
        />
        <rect
          x="4.19629"
          y="26.4609"
          width="15.3725"
          height="8.78431"
          fill="#E2E2E2"
        />
        <rect
          x="21.7646"
          y="26.4609"
          width="15.3725"
          height="8.78431"
          fill="#E2E2E2"
        />
        <rect
          x="4.19629"
          y="38.5391"
          width="50.5098"
          height="14.2745"
          fill="#E2E2E2"
        />
        <rect
          x="39.3335"
          y="26.4609"
          width="15.3725"
          height="8.78431"
          fill="#FF7A02"
        />
        <rect
          x="21.7646"
          y="19.8726"
          width="6.58824"
          height="4.39216"
          fill="#E2E2E2"
        />
        <rect
          x="30.5488"
          y="19.8726"
          width="6.58824"
          height="4.39216"
          fill="#E2E2E2"
        />
        <rect
          x="39.3335"
          y="19.8726"
          width="6.58824"
          height="4.39216"
          fill="#E2E2E2"
        />
        <g clip-path="url(#clip1_687_4423)">
          <path
            d="M50.002 26.1097C49.7346 26.3315 49.4362 26.3866 49.1067 26.275C48.7771 26.1634 48.571 25.9393 48.4883 25.6026L47.5244 21.9648L52.9628 23.7867L50.002 26.1097ZM53.6664 22.2513L47.8877 20.3154L51.7238 8.86437C51.8882 8.37361 52.2085 8.00964 52.6846 7.77246C53.1609 7.53522 53.6444 7.4988 54.1352 7.66321L56.3014 8.38889C56.7921 8.5533 57.1561 8.87363 57.3934 9.3499C57.6306 9.82604 57.6669 10.3095 57.5025 10.8002L53.6664 22.2513Z"
            fill="#FF7A02"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_687_4423"
          x="2"
          y="12.186"
          width="57"
          height="41.6274"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_687_4423"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_687_4423"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_687_4423">
          <rect width="60" height="60" fill="white" />
        </clipPath>
        <clipPath id="clip1_687_4423">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(39 11.9175) rotate(-26.4791)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
