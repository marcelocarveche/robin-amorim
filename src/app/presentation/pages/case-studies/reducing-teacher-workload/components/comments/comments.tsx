import React, { JSX, useRef, useState } from 'react'
import styles from './comments-styles.module.scss'
import { useIsMobile } from '@/app/infrastructure/providers/mobile-provider'

export interface Comment {
  profile: JSX.Element
  message: string
  author: string
}

type Props = {
  comments: Array<Comment>
} & React.HTMLAttributes<HTMLDivElement>

export const Comments: React.FC<Props> = ({ comments, ...props }) => {
  const isMobile = useIsMobile()
  const isCarousel = isMobile && comments.length >= 3

  // Carousel state
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarousel) return
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isCarousel) return
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (
      !isCarousel ||
      touchStartX.current === null ||
      touchEndX.current === null
    )
      return
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 40) {
      if (delta > 0 && activeIndex < comments.length - 1) {
        setActiveIndex(activeIndex + 1)
      } else if (delta < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  if (isCarousel) {
    return (
      <div className={styles.container} {...props}>
        <div
          className={styles['carousel-viewport']}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles['carousel-track']}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {comments.map((comment, idx) => (
              <div
                className={styles.commentWrap}
                key={idx}
                // Não precisa mais de style inline para layout do carrossel
              >
                {comment.profile}
                <div className={styles.textWrap}>
                  <p
                    className={styles.message}
                    dangerouslySetInnerHTML={{
                      __html: comment.message.replace(/\n/g, '<br/>'),
                    }}
                  />
                  <p className={styles.author}>{comment.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.carouselDots}>
          {[...comments].reverse().map((_, idx) => {
            const dotIndex = comments.length - 1 - idx
            return (
              <span
                key={idx}
                className={
                  dotIndex === activeIndex
                    ? styles.carouselDotActive
                    : styles.carouselDot
                }
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container} {...props}>
      {comments.map((comment, index) => (
        <div className={styles.commentWrap} key={index}>
          {comment.profile}
          <div className={styles.textWrap}>
            <p
              className={styles.message}
              dangerouslySetInnerHTML={{
                __html: comment.message.replace(/\n/g, '<br/>'),
              }}
            />
            <p className={styles.author}>{comment.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
