import React from 'react'
import styles from './review-suggestions-case.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const ReviewSuggestionsCase: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.text}>
        <h4>
          AI-Powered Review: <br />
          Suggesting, <br />
          Not Replacing
        </h4>
        <p>
          Drawing inspiration from Grammarly, the review process uses AI to
          offer suggestions, ensuring teachers remain in control. Teacher
          ownership and autonomy are essential, allowing them to decide which
          corrections to implement.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.forms_1}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="78.6316"
                y="19.877"
                width="72"
                height="42"
                rx="14"
                transform="rotate(110.35 78.6316 19.877)"
                fill="#0E20A2"
              />
              <rect
                x="19.9729"
                y="14.1187"
                width="72"
                height="42"
                rx="14"
                transform="rotate(20.3499 19.9729 14.1187)"
                fill="#0E20A2"
              />
            </svg>
          </div>
          <div className={styles.image_1}>
            <img
              src={Assets.ReviewSuggestionsCase1}
              alt="ReviewSuggestionsCase1.png"
            />
          </div>
          <div className={styles.forms_2}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9214 52.5428C8.16498 43.5704 7.5294 28.3878 16.5018 18.6314C25.4741 8.87496 40.6568 8.23938 50.4132 17.2117L85.7442 49.7036L53.2524 85.0346L17.9214 52.5428Z"
                fill="#FF7A02"
              />
            </svg>
          </div>
          <div className={styles.image_2}>
            <img src={Assets.ReviewSuggestionsCase2} alt="image2" />
          </div>
        </div>
      </div>
    </div>
  )
}
