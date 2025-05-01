import React from 'react'
import styles from './header-footer-styles.module.scss'
import { MailIcon } from '@/app/presentation/components'

interface Props {
  isFooter?: boolean
}

const HeaderAndFooter: React.FC<any> = ({ children }) => {
  return (
    <>
      <Component />
      <div className={styles.container}>{children}</div>
      <Component isFooter />
    </>
  )
}

const Component: React.FC<Props> = ({ isFooter = false }) => {
  return (
    <div data-footer={isFooter} className={styles.wrapper}>
      <div className={styles.wrapLogo}>
        <span className={styles.firstName}>robin</span>
        <span className={styles.lastName}>amorim</span>
      </div>
      <div className={styles.wrapLinks}>
        <div className={styles.mail}>
          <MailIcon />
        </div>
        <div className={styles.linkedin}>linkedin</div>
      </div>
    </div>
  )
}

export default HeaderAndFooter
