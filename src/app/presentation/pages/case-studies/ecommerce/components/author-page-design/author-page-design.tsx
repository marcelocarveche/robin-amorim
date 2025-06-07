import React from 'react'
import styles from './author-page-design-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const AuthorPageDesign: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <div className={styles.authorPage}>
          <img src={Assets.AuthorPage} alt="" />
        </div>
        <div className={styles.classmates}>
          <img src={Assets.Classmates} />
        </div>
        <div className={styles.forms_1}>
          {Array.from({ length: 6 }).map((_, index) => (
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
              <circle cx="36.8726" cy="36.873" r="36" fill="#03A82D" />
            </svg>
          ))}
        </div>
        <div className={styles.forms_2}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 121 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin slice"
          >
            <path
              d="M120.784 107.511C91.3144 134.208 45.7819 131.961 19.0842 102.492C-7.61357 73.0225 -5.36666 27.49 24.1028 0.792304L120.784 107.511Z"
              fill="#FF7A02"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
