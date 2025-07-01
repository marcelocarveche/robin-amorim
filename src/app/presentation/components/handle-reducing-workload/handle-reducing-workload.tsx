import React from 'react'
import styles from './handle-reducing-workload-styles.module.scss'
import { Button } from '../button/button'
import { Tags } from '../tags/tags'
import ReducingWorkloadPng from '../handle-reducing-workload/reducing-workload.png'
import { useNavigate } from 'react-router-dom'
import { Routes } from '../../protocols'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const HandleReducingWorkload: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate(Routes.caseStudies.aiPoweredUX.url)
  }
  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
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
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={ReducingWorkloadPng} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
