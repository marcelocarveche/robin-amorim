import React from 'react'
import styles from './reducing-teacher-workload-styles.module.scss'
import { Tags } from '@/app/presentation/components'
import { Book } from './components/book/book'
import { ShortCloudForm } from '@/app/presentation/components/forms'
import { LongCloudForm } from '@/app/presentation/components/forms/long-cloud'
import { TeacherEliana } from './components/teacher-eliana/teacher-eliana'
import { TeacherMarcia } from './components/teacher-marcia/teacher-marcia'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const ReducingTeacherWorkload: React.FC<Props> = ({ ...props }) => {
  const tags = ['web responsible', 'app', 'research', 'ux/ui design']

  return (
    <>
      <section className={styles.section_1} {...props}>
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
                <strong>MY RESPONSABILITIES: </strong>User Research . Wireframe
                . Prototype . Usability Test . Iteration . Alignment & Hand-off
              </p>
              <p className={styles.skill}>
                <strong>TEAM: </strong>Along with 1 Product Manager + 6
                Developers
              </p>
            </div>
            <div className={styles.overview}>
              <h2>Overview</h2>
              <div className={styles.paragraphy}>
                <p>
                  Estante Mágica is the main K-12 SaaS Edtech in Latin America.
                  At Estante Mágica's platform, teachers faced significant
                  frustration and time loss manually editing student storybooks.
                </p>
                <p>
                  As the lead UX Designer on this initiative, I leveraged AI and
                  user-centered design to create an assistive editing experience
                  that reduced teacher workload by a proven 70%, directly
                  impacting platform retention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <ShortCloudForm className={styles.form_1} />
        <LongCloudForm className={styles.form_2} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>The Challenge</h2>
            <p>
              Teachers were spending excessive, manual hours reviewing and
              editing each student's storybook content – a frustrating and
              time-consuming process. This significant workload was the main
              driver for teacher churn on the platform.
            </p>
          </div>
          <div className={styles.body}>
            <div className={styles.comment_1}>
              <TeacherEliana />
              <div className={styles.comment_wrap}>
                <div className={styles.text}>
                  “This is so much work!! <br />I lost my entire weekend typing
                  each child's text!”
                </div>
                <p className={styles.name}>Eliana, Teacher</p>
              </div>
            </div>
            <div className={styles.comment_2}>
              <div className={styles.comment_wrap}>
                <div className={styles.text}>
                  “I had to ask my family to help me review the books. <br />
                  Yet some errors slip through.”
                </div>
                <p className={styles.name}>Marcia, school manager</p>
              </div>
              <TeacherMarcia />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
