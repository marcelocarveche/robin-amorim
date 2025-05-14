import React from 'react'
import styles from './images-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'
import { SuggestionsForm } from '../../../forms'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Images: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <svg
          className={styles.forms_1}
          width="145"
          height="171"
          viewBox="0 0 145 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9141 81.9445C8.46811 57.5797 19.7516 29.36 44.1164 18.9141C68.4812 8.46812 96.7009 19.7516 107.147 44.1164L144.975 132.349L56.7422 170.177L18.9141 81.9445Z"
            fill="#0E20A2"
          />
        </svg>
        <div className={styles.bookCard}>
          <img
            src={Assets.EcommerceExperience1}
            alt="EcommerceExperience1.png"
          />
        </div>
        <svg
          className={styles.forms_2}
          width="190"
          height="190"
          viewBox="0 0 190 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9689 53.3332L169.682 85.173L72.5296 189.727L31.9689 53.3332Z"
            fill="#DD6900"
          />
        </svg>
        <div className={styles.suggestionsCard}>
          <img
            src={Assets.EcommerceExperience2}
            alt="EcommerceExperience2.png"
          />
        </div>
      </div>
    </div>
  )
}
