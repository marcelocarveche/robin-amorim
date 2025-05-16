import React from 'react'
import styles from './speech-to-text-case-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const SpeechToTextCase: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.text}>
        <h4>
          Streamlining <br />
          Content Input: <br />
          The Speech-to-Text <br />
          Interface
        </h4>
        <p>
          Inspired by WhatsApp's widespread use and user familiarity in Brazil,
          I designed the speech-to-text feature to directly ease teachers'
          workload.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.forms_1}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 74 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.202517 23.6922C15.5368 11.0367 38.2271 13.2082 50.8826 28.5424C63.5382 43.8767 61.3667 66.567 46.0324 79.2226L0.202517 23.6922Z"
                fill="#FF7A02"
              />
            </svg>
          </div>
          <div className={styles.speechToTextCase1}>
            <img src={Assets.SpeecToTextCase1} alt="SpeecToTextCase1.png" />
          </div>
          <div className={styles.forms_2}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M52.7671 72L0 20.0816L72 0L52.7671 72Z" fill="#DD6900" />
            </svg>
          </div>
          <div className={styles.speechToTextCase2}>
            <img src={Assets.SpeecToTextCase2} alt="SpeecToTextCase2" />
          </div>
        </div>
      </div>
    </div>
  )
}
