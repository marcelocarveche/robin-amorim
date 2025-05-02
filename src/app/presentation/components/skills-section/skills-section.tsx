import React from 'react'
import styles from './skills-section-styles.module.scss'
import { AddIcon, RemoveIcon } from '@/app/presentation/components'
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
      title: '02 Early - and Growth-Stage Startup Experience',
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
