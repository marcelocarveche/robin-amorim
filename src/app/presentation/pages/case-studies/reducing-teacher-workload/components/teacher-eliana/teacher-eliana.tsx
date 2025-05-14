import React from 'react'
import styles from './teacher-eliana-styles.module.scss'
import { Assets } from '@/app/presentation/assets'

export const TeacherEliana: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <svg
        width="165"
        height="165"
        viewBox="0 0 165 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="mask0">
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
        <rect y="34.375" width="165" height="96.25" rx="28" fill="#0E20A2" />
        <rect
          x="34.375"
          y="165"
          width="165"
          height="96.25"
          rx="28"
          transform="rotate(-90 34.375 165)"
          fill="#0E20A2"
        />
        <image
          href={Assets.TeacherEliana}
          x="0"
          y="0"
          width="165"
          height="165"
          mask="url(#mask0)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  )
}
