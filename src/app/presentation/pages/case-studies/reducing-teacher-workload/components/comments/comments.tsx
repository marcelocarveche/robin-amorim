import React, { JSX, useRef, useState, useEffect } from 'react'
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

  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const carouselViewportRef = useRef<HTMLDivElement | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarousel) return
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
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
    touchStartY.current = null
  }

  useEffect(() => {
    if (!isCarousel) return
    const el = carouselViewportRef.current
    if (!el) return

    let isScrolling: boolean | null = null
    let lastY: number | null = null

    const handleTouchMove = (e: TouchEvent) => {
      if (!isCarousel || e.touches.length !== 1) return
      touchEndX.current = e.touches[0].clientX
      const currentY = e.touches[0].clientY

      if (touchStartX.current !== null && touchStartY.current !== null) {
        const deltaX = e.touches[0].clientX - touchStartX.current
        const deltaY = currentY - touchStartY.current

        if (isScrolling === null) {
          if (Math.abs(deltaY) > Math.abs(deltaX)) {
            isScrolling = true
            lastY = currentY
            return
          } else {
            isScrolling = false
          }
        }

        if (isScrolling === false && Math.abs(deltaX) > 10) {
          e.preventDefault()
        }

        if (isScrolling === true && lastY !== null) {
          window.scrollBy(0, lastY - currentY)
          lastY = currentY
        }
      }
    }

    el.addEventListener('touchmove', handleTouchMove, { passive: false })

    const handleTouchEndOrCancel = () => {
      isScrolling = null
      lastY = null
    }
    el.addEventListener('touchend', handleTouchEndOrCancel)
    el.addEventListener('touchcancel', handleTouchEndOrCancel)

    return () => {
      el.removeEventListener('touchmove', handleTouchMove)
      el.removeEventListener('touchend', handleTouchEndOrCancel)
      el.removeEventListener('touchcancel', handleTouchEndOrCancel)
    }
  }, [isCarousel])

  if (isCarousel) {
    return (
      <div className={styles.container} {...props}>
        <div
          className={styles['carousel-viewport']}
          ref={carouselViewportRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles['carousel-track']}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {comments.map((comment, idx) => (
              <div className={styles.commentWrap} key={idx}>
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

// Seu código está correto e pronto para uso!
