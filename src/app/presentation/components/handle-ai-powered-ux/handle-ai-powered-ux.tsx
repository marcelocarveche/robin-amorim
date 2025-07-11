import React from 'react'
import styles from './handle-ai-powered-ux-styles.module.scss'
import { Button } from '../button/button'
import { Tags } from '../tags/tags'
import AIPoweredUXPng from '../handle-ai-powered-ux/ai-powered-ux.png'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../protocols'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const HandleAiPoweredUx: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(Routes.caseStudies.aiPoweredUX.url)
  }
  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={AIPoweredUXPng} alt="" />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            <p>B2B - SAAS</p>
            <h2>
              AI-Powered UX: Rapid <br />
              SaaS Dashboard Design
            </h2>
            <Tags
              tags={['PROMPT ENGINEERING', 'AI-PROTOTYPE', 'UX/UI']}
              color={'grey'}
            />
          </div>
          <Button onClick={onClick}>See case Study</Button>
        </div>
      </div>
    </div>
  )
}
