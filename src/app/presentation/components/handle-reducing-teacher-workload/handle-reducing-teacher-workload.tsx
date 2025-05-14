import React from 'react'
import styles from './handle-reducing-teacher-workload-styles.module.scss'
import { Images } from './components/forms/images'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/app/presentation/protocols/routes'
import { Tags } from '../tags/tags'

type Props = {} & React.HTMLAttributes<HTMLElement>

export const HandleCaseStudiesSection: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate()

  const tags = ['web responsible', 'app', 'research', 'ux/ui design']

  const handleButtonClick = () => {
    navigate(Routes.caseStudies.reducingTeacherWorkload)
  }

  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        <div className={styles.body}>
          <Images />
          <div className={styles.content}>
            <div className={styles.body}>
              <p>STARTUP - SASS</p>
              <h3>
                Reducing Teacher Workload <br />
                by 78% through AI
              </h3>
              <Tags tags={tags} color="grey" align="start" />
            </div>
            <div className={styles.footer}>
              <button onClick={handleButtonClick} className={styles.button}>
                See Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
