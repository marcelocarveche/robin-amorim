import React from 'react'
import styles from './cost-monitoring-case-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const CostMonitoringCase: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.text}>
        <h4>Cost monitoring</h4>
        <p>
          While aiming to give teachers flexibility with unlimited AI review
          requests, concerns about financial impact led us to create a request
          tracking dashboard for both speech-to-text and AI review.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.forms_1}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.60864"
                y="32.0688"
                width="72"
                height="42"
                rx="14"
                transform="rotate(-13.9206 3.60864 32.0688)"
                fill="#FF7A02"
              />
              <rect
                x="31.8811"
                y="83.7861"
                width="72"
                height="42"
                rx="14"
                transform="rotate(-103.921 31.8811 83.7861)"
                fill="#FF7A02"
              />
            </svg>
          </div>
          <div className={styles.image_1}>
            <img src={Assets.CostMonitoringCaseImg} alt="image1.png" />
          </div>
          <div className={styles.forms_2}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 72 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="36" cy="36.1875" r="36" fill="#0E20A2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
