import React from 'react'
import styles from './case-studies-section-styles.module.scss'
import { Forms } from './components/forms/forms'
import { useNavigate } from 'react-router-dom'

type Props = {} & React.HTMLAttributes<HTMLElement>

export const CaseStudiesSection: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/case-studies/reducing-teacher-workload-by-70-through-ai')
  }
  return (
    <section className={styles.container} {...props}>
      <div className={styles.content}>
        <h2>Case Studies</h2>
        <div className={styles.body}>
          <Forms />
          <div className={styles.content}>
            <div className={styles.body}>
              <p>STARTUP - SASS</p>
              <h3>Reducing Teacher Workload by 70% through AI</h3>
              <div className={styles.tagsWrapper}>
                <span className={styles.tag}>WEB RESPONSIVE</span>
                <span className={styles.tag}>APP</span>
                <span className={styles.tag}>RESEARCH</span>
                <span className={styles.tag}>UX/UI DESIGN</span>
              </div>
            </div>
            <div className={styles.footer}>
              <button onClick={handleButtonClick} className={styles.button}>
                See Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
