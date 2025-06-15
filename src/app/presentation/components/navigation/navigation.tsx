import React from 'react'
import styles from './navigation-styles.module.scss'
import { Routes } from '../../protocols'
import { useNavigate } from 'react-router-dom'

type Props = {
  next?: {
    url: string
    title: string
  }

  previous?: {
    url: string
    title: string
  }
} & React.HTMLAttributes<HTMLDivElement>

export const Navigation: React.FC<Props> = ({ previous, next, ...props }) => {
  const navigate = useNavigate()

  const handleNext = () => {
    if (next?.url) {
      navigate(next.url)
    }
  }
  const handlePrevious = () => {
    if (previous?.url) {
      navigate(previous.url)
    }
  }

  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        <div className={styles.previous} onClick={handlePrevious}>
          {previous && (
            <>
              <div className={styles.title}>
                <div className={styles.icon}>
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 56 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28"
                      cy="28.5"
                      r="27.5"
                      fill="none"
                      stroke="#171717"
                    />
                    <path
                      d="M28.3188 28.5003L34.6596 34.8407C35.0115 35.193 35.1875 35.635 35.1875 36.167C35.1875 36.6989 35.0115 37.141 34.6596 37.4932C34.3074 37.8452 33.8653 38.0212 33.3333 38.0212C32.8014 38.0212 32.3593 37.8452 32.0071 37.4932L24.3504 29.8366C24.164 29.6499 24.0278 29.4427 23.9417 29.2149C23.8556 28.9874 23.8125 28.7492 23.8125 28.5003C23.8125 28.2514 23.8556 28.0132 23.9417 27.7857C24.0278 27.558 24.164 27.3507 24.3504 27.1641L32.0071 19.5074C32.3593 19.1555 32.8014 18.9795 33.3333 18.9795C33.8653 18.9795 34.3074 19.1555 34.6596 19.5074C35.0115 19.8596 35.1875 20.3017 35.1875 20.8337C35.1875 21.3656 35.0115 21.8077 34.6596 22.1599L28.3188 28.5003Z"
                      fill="#171717"
                    />
                  </svg>
                </div>
                <h2>Previous</h2>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: previous.title.replace(/\n/g, '<br />'),
                }}
              ></p>
            </>
          )}
        </div>

        <div className={styles.next} onClick={handleNext}>
          {next && (
            <>
              <div className={styles.title}>
                <h2>Next</h2>
                <div className={styles.icon}>
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 56 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28"
                      cy="28.5"
                      r="27.5"
                      fill="none"
                      stroke="#171717"
                    />
                    <path
                      d="M30.6813 28.5003L24.3404 22.1599C23.9885 21.8077 23.8125 21.3656 23.8125 20.8337C23.8125 20.3017 23.9885 19.8596 24.3404 19.5074C24.6926 19.1555 25.1347 18.9795 25.6667 18.9795C26.1986 18.9795 26.6407 19.1555 26.9929 19.5074L34.6496 27.1641C34.836 27.3507 34.9722 27.558 35.0583 27.7857C35.1444 28.0132 35.1875 28.2514 35.1875 28.5003C35.1875 28.7492 35.1444 28.9874 35.0583 29.2149C34.9722 29.4427 34.836 29.6499 34.6496 29.8366L26.9929 37.4932C26.6407 37.8452 26.1986 38.0212 25.6667 38.0212C25.1347 38.0212 24.6926 37.8452 24.3404 37.4932C23.9885 37.141 23.8125 36.6989 23.8125 36.167C23.8125 35.635 23.9885 35.193 24.3404 34.8407L30.6813 28.5003Z"
                      fill="#171717"
                    />
                  </svg>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: next.title.replace(/\n/g, '<br />'),
                }}
              ></p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
