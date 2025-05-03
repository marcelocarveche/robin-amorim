import React from 'react'
import styles from './reducing-teacher-workload-styles.module.scss'
import { Tags } from '@/app/presentation/components'
import { Book } from './components/book'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const ReducingTeacherWorkload: React.FC<Props> = ({ ...props }) => {
  const tags = ['web responsible', 'app', 'research', 'ux/ui design']

  return (
    <section className={styles.container} {...props}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p>B2B2C - STARTUP</p>
          <div className={styles.title}>
            <h1>Reducing Teacher Workload by 70% throught AI</h1>
            <Tags tags={tags} color="blue" />
          </div>
        </div>
        <div className={styles.body}>
          <Book />
        </div>
        <div className={styles.footer}>
          <div className={styles.skills}>
            <p className={styles.skill}>
              <strong>MY ROLE: </strong>
              Lead UX/UI Designer
            </p>
            <p className={styles.skill}>
              <strong>MY RESPONSABILITIES: </strong>User Research . Wireframe .
              Prototype . Usability Test . Iteration . Alignment & Hand-off
            </p>
            <p className={styles.skill}>
              <strong>TEAM: </strong>Along with 1 Product Manager + 6 Developers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
