import React from 'react'
import styles from './handle-recovering-pre-pandemic-styles.module.scss'
import { Images } from './components/forms/images'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/app/presentation/protocols/routes'
import { Tags } from '../tags/tags'

type Props = {} & React.HTMLAttributes<HTMLElement>

export const HandleRecoveringPrePandemic: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate()

  const tags = ['web responsible', 'research', 'ux/ui design']

  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        <div className={styles.body}>
          <Images />
          <div className={styles.content}>
            <div className={styles.body}>
              <p>STARTUP - SASS</p>
              <h3>
                Recovering pre-pandemic revenue by revamping <br />
                e-commerce experience
              </h3>
              <Tags tags={tags} color="grey" align="start" />
            </div>
            <div className={styles.footer}>
              <button className={styles.button}>Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
