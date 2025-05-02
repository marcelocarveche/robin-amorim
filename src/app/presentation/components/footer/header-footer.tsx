import React from 'react'
import styles from './header-footer-styles.module.scss'
import { MailIcon, LinkedinIcon } from '@/app/presentation/components'

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
      <div className={styles.content}>
        <div className={styles.wrapLogo}>
          <span className={styles.firstName}>robin</span>
          <span className={styles.lastName}>amorim</span>
        </div>
        <div className={styles.wrapLinks}>
          <MailIcon className={styles.mail} />
          <LinkedinIcon className={styles.linkedin} />
        </div>
      </div>
    </div>
  )
}

export default HeaderAndFooter
