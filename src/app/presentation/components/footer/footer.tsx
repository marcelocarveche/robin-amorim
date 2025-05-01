import React from 'react'
import styles from './footer-styles.module.scss'

interface FooterProps {
  children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapLogo}>
          <span className={styles.firstName}>robin</span>
          <span className={styles.lastName}>amorim</span>
        </div>
        <div className={styles.wrapLinks}>
          <div className={styles.mail}>mail</div>
          <div className={styles.linkedin}>linkedin</div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Footer
