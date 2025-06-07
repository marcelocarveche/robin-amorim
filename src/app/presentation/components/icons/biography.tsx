import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const BiographyIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_485_2678)">
        <rect x="7" y="5" width="45.4545" height="50" rx="1" fill="white" />
        <line
          x1="14.0248"
          y1="40.7315"
          x2="45.4298"
          y2="40.7315"
          stroke="#171717"
          stroke-width="0.909091"
        />
        <line
          x1="14.0248"
          y1="38.0044"
          x2="45.4298"
          y2="38.0044"
          stroke="#171717"
          stroke-width="0.909091"
        />
        <line
          x1="14.0248"
          y1="35.2769"
          x2="45.4298"
          y2="35.2769"
          stroke="#171717"
          stroke-width="0.909091"
        />
        <line
          x1="14.0248"
          y1="43.084"
          x2="45.4298"
          y2="43.084"
          stroke="#171717"
          stroke-width="0.909091"
        />
        <line
          x1="14.0248"
          y1="45.8116"
          x2="45.4298"
          y2="45.8116"
          stroke="#171717"
          stroke-width="0.909091"
        />
      </g>
      <circle cx="30.8665" cy="20.3101" r="7.67047" fill="#171717" />
      <circle cx="30.2273" cy="19.6705" r="7.67047" fill="#FFDEFD" />
      <path
        d="M30.2273 12C28.9489 14.983 24.0909 15.8352 20 15.8352"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C31.5057 14.983 36.3637 15.8352 40.4546 15.8352"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C28.8576 13.9176 25.0223 17.7529 20.6392 17.7529"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C29.0402 12.8523 25.7163 14.5568 21.9176 14.5568"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C31.597 13.9176 35.4323 17.7529 39.8154 17.7529"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C31.4144 12.8523 34.7383 14.5568 38.537 14.5568"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C31.8253 12.3196 32.1449 12.6392 34.7017 12.6392"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M30.2273 12C28.6293 12.3196 28.3097 12.6392 25.7529 12.6392"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <path
        d="M27.6708 22.5459C27.8838 23.0786 28.6935 24.1439 30.2276 24.1439C31.7617 24.1439 32.3583 23.0786 32.4648 22.5459"
        stroke="#171717"
        stroke-width="0.909091"
      />
      <defs>
        <filter
          id="filter0_d_485_2678"
          x="7"
          y="5"
          width="46.4545"
          height="51"
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
            result="effect1_dropShadow_485_2678"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_485_2678"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
