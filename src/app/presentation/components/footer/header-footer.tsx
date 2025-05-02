import React, { useState } from 'react'
import styles from './header-footer-styles.module.scss'
import { MailIcon, LinkedinIcon } from '@/app/presentation/components'
import { colors } from '@/app/presentation/styles'
import { useNavigate } from 'react-router-dom'

interface Props {
  isFooter?: boolean
}

const ICON_COLORS = [
  colors.orangeDefault,
  colors.blueishDefault,
  colors.pinkDark,
  colors.greenDefault,
  colors.yellowDark,
]

function getRandomColor() {
  return ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)]
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
  const navigate = useNavigate()
  const [mailColor, setMailColor] = useState<string>(colors.black)
  const [linkedinColor, setLinkedinColor] = useState<string>(colors.black)
  const [logoColor, seLogoColor] = useState<string>(colors.black)

  return (
    <div data-footer={isFooter} className={styles.wrapper}>
      <div className={styles.content}>
        <div
          className={styles.wrapLogo}
          onMouseEnter={() => seLogoColor(getRandomColor())}
          onMouseLeave={() => seLogoColor(colors.black)}
          onClick={() => navigate('/')}
        >
          <span className={styles.firstName}>robin</span>
          <span style={{ color: logoColor }} className={styles.lastName}>
            amorim
          </span>
        </div>
        <div className={styles.wrapLinks}>
          <MailIcon
            href="mailto:robin.amorim@outlook.com"
            className={styles.mail}
            color={mailColor}
            onMouseEnter={() => setMailColor(getRandomColor())}
            onMouseLeave={() => setMailColor(colors.black)}
          />
          <LinkedinIcon
            href="https://www.linkedin.com/in/robinamorim/"
            className={styles.linkedin}
            color={linkedinColor}
            onMouseEnter={() => setLinkedinColor(getRandomColor())}
            onMouseLeave={() => setLinkedinColor(colors.black)}
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderAndFooter
