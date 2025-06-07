import React from 'react'
import styles from './social-engagement-styles.module.scss'
import SocialEngagementPng from './social-engagement.png'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const SocialEngagement: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.description}>
        <h4>3. Interactive sections & social engagement</h4>
        <p>
          We introduced social features that broaden parents’ awareness of their
          child's book, and promote interaction with other parents and
          relatives.
        </p>
      </div>
      <div className={styles.image}>
        <img src={SocialEngagementPng} alt="" />
      </div>
    </div>
  )
}
