import React from 'react'
import styles from './ai-accuracy-case-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const AIAccuracyCase: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.text}>
        <h4>
          AI Accuracy and <br />
          User Transparency
        </h4>
        <p>
          Recognizing that our AI may not always be 100% accurate, we
          implemented a learning notice and a feedback feature. To ensure users
          review each suggestion carefully, we removed the 'accept all
          suggestions' option.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <svg
            className={styles.forms_1}
            width="93"
            height="93"
            viewBox="0 0 93 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4402 58.0943C6.0553 39.2652 16.1433 18.8251 34.9724 12.4402L46.5334 46.5334L80.6266 34.9724C87.0115 53.8015 76.9235 74.2416 58.0944 80.6265C39.2652 87.0115 18.8252 76.9235 12.4402 58.0943Z"
              fill="#6779FF"
            />
          </svg>
          <div className={styles.image_1}>
            <img
              src={Assets.AIAccuracyCase1}
              alt="ReviewSuggestionsCase1.png"
            />
          </div>
          <svg
            className={styles.forms_2}
            width="92"
            height="92"
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.3629 18.214L42.14 84.8591L0.000121832 23.1218L74.3629 18.214Z"
              fill="#DD6900"
            />
          </svg>
          <div className={styles.image_2}>
            <div className={styles.imagesWrap}>
              <img
                src={Assets.AIAccuracyCase2}
                className={styles.img2}
                alt="image2"
              />
              <img
                src={Assets.AIAccuracyCase21}
                className={styles.img21}
                alt="image3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
