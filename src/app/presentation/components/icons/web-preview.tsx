import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const WebPreviewIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_755_11273)">
        <rect
          y="8.91162"
          width="59"
          height="42.8039"
          rx="0.928979"
          fill="white"
        />
      </g>
      <path
        d="M0 9.84495C0 9.32949 0.417868 8.91162 0.933333 8.91162H58.0667C58.5821 8.91162 59 9.32949 59 9.84495V16.2866H0V9.84495Z"
        fill="#FFE69E"
      />
      <g filter="url(#filter1_d_755_11273)">
        <circle cx="29.5" cy="32.5" r="13.5" fill="white" />
        <circle
          cx="29.5"
          cy="32.5"
          r="13.25"
          stroke="#171717"
          stroke-width="0.5"
        />
      </g>
      <circle cx="11.5" cy="12.5" r="1.5" fill="#03A82D" />
      <circle cx="7.5" cy="12.5" r="1.5" fill="#FFC314" />
      <circle cx="3.5" cy="12.5" r="1.5" fill="#F16E6E" />
      <path
        d="M34.25 31.5674C34.5831 31.7599 34.5831 32.2401 34.25 32.4326L26.75 36.7627C26.4167 36.9551 26 36.715 26 36.3301V27.6699C26 27.285 26.4167 27.0449 26.75 27.2373L34.25 31.5674Z"
        fill="#171717"
        stroke="#171717"
      />
      <defs>
        <filter
          id="filter0_d_755_11273"
          x="0"
          y="8.91162"
          width="60"
          height="43.8037"
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
            result="effect1_dropShadow_755_11273"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_755_11273"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_755_11273"
          x="16"
          y="19"
          width="27.8"
          height="27.8"
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
          <feOffset dx="0.8" dy="0.8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_755_11273"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_755_11273"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
