import React from 'react'
import styles from './handle-recovering-pre-pandemic-styles.module.scss'
import { Images } from './components/forms/images'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/app/presentation/protocols/routes'
import { Tags } from '../tags/tags'
import { useIsMobile } from '@/app/infrastructure/providers/mobile-provider'
import { Button } from '../button/button'

type Props = {} & React.HTMLAttributes<HTMLElement>

export const HandleRecoveringPrePandemic: React.FC<Props> = ({ ...props }) => {
  const isMobile = useIsMobile()
  const tags = ['web responsible', 'research', 'ux/ui design']

  const navigate = useNavigate()
  const onClickButton = () => {
    navigate(Routes.caseStudies.ecommerce.url)
  }
  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        {isMobile ? (
          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.body}>
                <p>STARTUP - SAAS</p>
                <h3>
                  Recovering pre-
                  <br />
                  pandemic revenue by revamping <br />
                  e-commerce experience
                </h3>
                <Tags tags={tags} color="grey" align="start" />
              </div>
              <Images />
              <div className={styles.footer}>
                <Button>Coming Soon</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.body}>
                <p>STARTUP - SAAS</p>
                <h3>
                  Recovering pre-pandemic revenue by revamping <br />
                  e-commerce experience
                </h3>
                <Tags tags={tags} color="grey" align="start" />
              </div>
              <div className={styles.footer}>
                <Button onClick={onClickButton}>See Case Study</Button>
              </div>
            </div>
            <Images />
          </div>
        )}
      </div>
    </div>
  )
}
