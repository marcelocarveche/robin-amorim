import React from 'react'
import styles from './reducing-teacher-workload-styles.module.scss'
import {
  CaseStudiesSection,
  IterationIcon,
  PrototypingIcon,
  SketchingIcon,
  Tags,
  UsabilityIcon,
} from '@/app/presentation/components'
import { Book } from './components/book/book'
import {
  QuestionBaloon,
  ShortCloudForm,
  WatermelonForm,
} from '@/app/presentation/components/forms'
import { LongCloudForm } from '@/app/presentation/components/forms/long-cloud'
import { TeacherEliana } from './components/teacher-eliana/teacher-eliana'
import { TeacherMarcia } from './components/teacher-marcia/teacher-marcia'
import { Forms } from '@/app/presentation/components/case-studies-section/components/forms/forms'
import { SpeechToTextCase } from './components/speech-to-text-case/speech-to-text-case'
import { ReviewSuggestionsCase } from './components/review-suggestion-case/review-suggestions-case'
import { AIAccuracyCase } from './components/ai-accuracy-case/ai-accuracy-case'
import { CostMonitoringCase } from './components/cost-monitoring-case/cost-monitoring-case'
import { BusinessImpactItems } from './components/business-impact-items/business-impact-items'
import { Comments, Comment } from './components/comments/comments'
import { TeacherJean } from './components/teacher-jean/teacher-jean'
import { TeacherSonia } from './components/teacher-sonia/teacher-sonia'
import { TeacherLucia } from './components/teacher-lucia/teacher-lucia'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const ReducingTeacherWorkload: React.FC<Props> = ({ ...props }) => {
  const tags = ['web responsible', 'app', 'research', 'ux/ui design']
  const insightsCards = [
    {
      title: 'Autonomy',
      description: 'Teachers needed to feel in control of the final content.',
    },
    {
      title: 'Flow Friction',
      description: 'Teachers needed to feel in control of the final content.',
    },
    {
      title: 'Workload',
      description: 'The process workload is the main reason for churning.',
    },
    {
      title: 'Perception',
      description:
        "Teachers fear errors in the book are linked to their work's quality.",
    },
  ]

  const challengeComments: Array<Comment> = [
    {
      profile: <TeacherEliana />,
      message:
        "“This is so much work!! I lost my entire weekend typing each child's text!”",
      author: 'Eliana, Teacher',
    },
    {
      profile: <TeacherMarcia />,
      message:
        '“I had to ask my family to help me review the books. Yet some errors slip through.”',
      author: 'Marcia, school manager',
    },
  ]

  const businessImpactComments: Array<Comment> = [
    {
      profile: <TeacherJean />,
      message:
        "“It used to take me 5 days to type the texts. \nThis time, I dictated all the students' texts in 1 hour! It was so fast!”",
      author: 'Jean, 1ST GRADE TEACHER',
    },
    {
      profile: <TeacherLucia />,
      message:
        "“The AI was the best thing in the year! It gave me confidence, but I still feel like the final book was 'mine' because I approved the changes.”",
      author: 'LUCIA, 4TH GRADE TEACHER',
    },
    {
      profile: <TeacherSonia />,
      message:
        "“I have students who can't write, so they dictated their own stories. They felt actively engaged in the project.It was so rewarding to empower them!”",
      author: 'SONIA, 2TH GRADE TEACHER',
    },
  ]

  // Quando o componente for renderizado deve rolar para baixo da pagina
  React.useEffect(() => {
    const element = document.querySelector('#reducing-teacher-workload')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

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
            <Comments comments={challengeComments} />
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.content}>
          <div className={styles.objective}>
            <div className={styles.title}>
              <h2>The Objective</h2>
              <p>
                Design and implement a solution to drastically reduce teacher
                effort in the editing workflow, increasing teacher satisfaction
                and retention on the platform.
              </p>
            </div>
            <div className={styles.hypothesis}>
              <QuestionBaloon />
              <h4>Core Hypothesis</h4>
              <p>
                An AI-assisted interface, designed specifically to suggest
                corrections, could streamline the process while critically
                maintaining the teacher's sense of control and authorship.
              </p>
            </div>
          </div>
          <div className={styles.insights}>
            <div className={styles.title}>
              <h2>Key Insights & Approach</h2>
              <p>
                Qualitative research with 23 teachers revealed critical
                insights:
              </p>
            </div>
            <div className={styles.cardsWrap}>
              {new Array(5).fill(0).map((_, index) => (
                <span
                  key={index}
                  data-index={index}
                  className={styles.circle}
                />
              ))}
              {insightsCards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
              <WatermelonForm className={styles.watermelon} />
            </div>
            <div className={styles.paragraphy}>
              <p>
                These insights, validated through interviews, survey, and data
                analysis, guided the design strategy towards an assistive,
                intuitive experience. <br /> Our iterative design process
                included:
              </p>
            </div>
            <div className={styles.cardsWrap2}>
              <div className={styles.card}>
                <SketchingIcon className={styles.sketching} />
                <p>
                  Sketching/
                  <br />
                  Wireframing
                </p>
              </div>
              <div className={styles.card}>
                <PrototypingIcon className={styles.prototyping} />
                <p>Prototyping</p>
              </div>
              <div className={styles.card}>
                <UsabilityIcon className={styles.usability} />
                <p>Usability Testing</p>
              </div>
              <div className={styles.card}>
                <IterationIcon className={styles.iteration} />
                <p>Iteration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_4}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Implementing Assistive Intelligence</h2>
            <p>
              Based on research insights, I designed a user flow and interface
              that integrates AI capabilities (Speech-to-Text, and Review)
              seamlessly into the existing editing experience, minimizing
              cognitive load and maximizing efficiency.
            </p>
          </div>
          <div className={styles.casesWrap}>
            <SpeechToTextCase />
            <ReviewSuggestionsCase />
            <AIAccuracyCase />
            <CostMonitoringCase />
          </div>
        </div>
      </section>
      <section className={styles.section_5}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>
              Quantifiable Results & <br /> Business Impact
            </h2>
          </div>
          <BusinessImpactItems />
          <Comments comments={businessImpactComments} />
        </div>
      </section>
    </>
  )
}
