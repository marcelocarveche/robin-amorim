import React from 'react'
import styles from './teacher-sonia-styles.module.scss'
import { Assets } from '@/app/presentation/assets'

export const TeacherSonia: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <svg
        width="144"
        height="144"
        viewBox="0 0 144 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 72C0 32.2355 32.2355 0 72 0C111.765 0 144 32.2355 144 72V144H0V72Z"
          fill="#96D446"
        />
        <image
          href={Assets.TeacherSonia}
          x="0"
          y="0"
          width="144"
          height="144"
          mask="url(#mask0)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  )
}
