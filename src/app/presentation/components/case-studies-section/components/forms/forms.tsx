import React from 'react'
import styles from './forms-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Forms: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <svg
          className={styles.forms_1}
          width="204"
          height="204"
          viewBox="0 0 204 204"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="82.0342"
            y="20.8318"
            width="144"
            height="84"
            rx="28"
            transform="rotate(46.021 82.0342 20.8318)"
            fill={colors.greenLight}
          />
          <rect
            x="20.832"
            y="121.581"
            width="144"
            height="84"
            rx="28"
            transform="rotate(-43.979 20.832 121.581)"
            fill={colors.greenLight}
          />
        </svg>
        <div className={styles.bookCard}>
          <img src={Assets.Book} alt="Book.png" />
        </div>
        <svg
          className={styles.forms_2}
          width="204"
          height="204"
          viewBox="0 0 204 204"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="101.808"
            cy="101.807"
            r="72"
            transform="rotate(46.021 101.808 101.807)"
            fill="#F196EA"
          />
        </svg>
        <div className={styles.suggestionsCard}>
          <img src="" alt="" />
        </div>
        <div className={styles.audioRecorderCard}>
          <img src={Assets.AudioRecorder} alt="AudioRecorder.png" />
        </div>
      </div>
    </div>
  )
}
