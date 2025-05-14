import React from 'react'
import styles from './teacher-lucia-styles.module.scss'
import { Assets } from '@/app/presentation/assets'

export const TeacherLucia: React.FC = ({}) => {
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
          <mask id="mask1">
            <circle cx="72" cy="72" r="72" fill="white" />
          </mask>
        </defs>
        <circle cx="72" cy="72" r="72" fill="#F196EA" />
        <image
          href={Assets.TeacherLucia}
          x="0"
          y="0"
          width="144"
          height="144"
          mask="url(#mask1)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  )
}
