import React from 'react'
import styles from './teacher-jean-styles.module.scss'
import { Assets } from '@/app/presentation/assets'

export const TeacherJean: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <svg
        width="144"
        height="144"
        viewBox="0 0 165 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="mask3">
            <rect y="34.375" width="165" height="96.25" rx="28" fill="white" />
            <rect
              x="34.375"
              y="165"
              width="165"
              height="96.25"
              rx="28"
              transform="rotate(-90 34.375 165)"
              fill="white"
            />
          </mask>
        </defs>
        <rect y="34.375" width="165" height="96.25" rx="28" fill="#BBC3FE" />
        <rect
          x="34.375"
          y="165"
          width="165"
          height="96.25"
          rx="28"
          transform="rotate(-90 34.375 165)"
          fill="#BBC3FE"
        />
        <image
          href={Assets.TeacherJean}
          x="0"
          y="0"
          width="165"
          height="165"
          mask="url(#mask3)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  )
}
