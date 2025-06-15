import React from 'react'
import styles from './cart-design-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const CartDesign: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <div className={styles.forms_1}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 344 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin slice"
          >
            <path
              d="M310.445 113.309L61.2706 216.482L123.851 0.000464949L310.445 113.309Z"
              fill="#03A82D"
            />
          </svg>
        </div>
        <div className={styles.shoppingCard}>
          <img
            src={Assets.RecoveringPrePandemic}
            alt="RecoveringPrePandemic.png"
          />
        </div>
        <div className={styles.forms_2}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 263 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin slice"
          >
            <rect
              x="42.1672"
              y="43.6104"
              width="216"
              height="126"
              rx="42"
              transform="rotate(14.2759 42.1672 43.6104)"
              fill="#F196EA"
            />
            <rect
              x="43.6104"
              y="220.426"
              width="216"
              height="126"
              rx="42"
              transform="rotate(-75.7241 43.6104 220.426)"
              fill="#F196EA"
            />
          </svg>
        </div>
        <div className={styles.biography}>
          <img src={Assets.Biography} />
        </div>
        <div className={styles.forms_3}>
          {Array.from({ length: 4 }).map((_, index) => (
            <svg
              className={styles.circle}
              key={index}
              width="100%"
              height="100%"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin slice"
            >
              <circle cx="36.8726" cy="36.873" r="36" fill="#FFC314" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}
