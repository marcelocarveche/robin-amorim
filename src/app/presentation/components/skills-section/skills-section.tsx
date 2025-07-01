import React from 'react'
import styles from './skills-section-styles.module.scss'
import { AddIcon, RemoveIcon } from '@/app/presentation/components'
import { colors } from '../../styles'
type Props = {} & React.HTMLAttributes<HTMLElement>

export const SkillsSection: React.FC<Props> = ({ ...props }) => {
  const [skills, setSkills] = React.useState<Array<SkillCardProps>>([
    {
      title: "01 Engineering Foundation (Master's and PhD)",
      description:
        'With a PhD in Engineering, I ground my design choices in data and technical feasibility.',
      isCollapsed: true,
    },
    {
      title: '02 Early- and Growth-Stage Startup Experience',
      description:
        'My 10 years in fast-paced startup taught me to iterate quickly, align cross-functional teams and keep user value front and center.',
      isCollapsed: true,
    },

    {
      title: '03 AI Tools',
      description:
        'AI-prototyping and architecting end-to-end AI solutions that solve real user problems.',
      isCollapsed: true,
    },
    {
      title: '04 Product Strategy & Management ',
      description:
        'I align design with business KPIs, translating strategic goals into user journeys that drive growth.',
      isCollapsed: true,
    },
    {
      title: '05 Soft Skills',
      description:
        'Resilient and adaptable, demonstrated from early-stage to Series A environments, enabling rapid pivots and sustained performance under pressure.',
      isCollapsed: true,
    },
  ])
  const onClickCard = (index: number) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill, i) => {
        if (i === index) {
          return { ...skill, isCollapsed: !skill.isCollapsed }
        }
        return skill
      })
    )
  }
  return (
    <section {...props} className={styles.container}>
      <div className={styles.content}>
        <h2>Beyond UX/UI</h2>
        <div className={styles.cardsWrapper}>
          <svg
            className={styles.forms_1}
            width="76"
            height="67"
            viewBox="0 0 76 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.7336 66.8583L0.869284 5.13312L75.4677 0.405973L41.7336 66.8583Z"
              fill={colors.blueishDark}
            />
          </svg>
          <svg
            className={styles.forms_2}
            width="202"
            height="203"
            viewBox="0 0 202 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100.614"
              cy="101.472"
              r="72"
              transform="rotate(36.16 100.614 101.472)"
              fill={colors.pinkDefault}
            />
          </svg>
          <svg
            className={styles.forms_3}
            width="124"
            height="123"
            viewBox="0 0 124 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1794 122.539C-7.43285 93.9246 -6.62049 48.344 21.9939 20.7317C50.6082 -6.88051 96.1888 -6.06815 123.801 22.5462L20.1794 122.539Z"
              fill={colors.blueishDefault}
            />
          </svg>

          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              isCollapsed={skill.isCollapsed}
              onClick={() => onClickCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

type SkillCardProps = {
  title: string
  description: string
  isCollapsed: boolean
} & React.HTMLAttributes<HTMLDivElement>

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  isCollapsed,
  ...props
}) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {!isCollapsed && <p className={styles.description}>{description}</p>}
      </div>
      {isCollapsed ? <AddIcon /> : <RemoveIcon />}
    </div>
  )
}
