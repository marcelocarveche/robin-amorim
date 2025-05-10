import React from 'react'
import styles from './business-impact-items-styles.module.scss'
import {
  AssistantIcon,
  HeartUserIcon,
  MicrofoneIcon,
  WorkloadIcon,
} from '@/app/presentation/components'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const BusinessImpactItems: React.FC<Props> = ({ ...props }) => {
  const items = [
    {
      icon: <WorkloadIcon />,
      title: 'Workload Reduction',
      description:
        '70% Reduction in the average time teachers spent reviewing and editing student stories.',
    },
    {
      icon: <HeartUserIcon />,
      title: 'Churn Reduction',
      description:
        '43% Reduction in teacher churn rate, impacting directly on retention and business health.',
    },
    {
      icon: <MicrofoneIcon />,
      title: 'Speech-to-Text Feature',
      description:
        '+115,000 books created through AI-supported speech-to-text feature. ',
    },
    {
      icon: <AssistantIcon />,
      title: 'AI Review',
      description:
        '+3M suggestion by AI, and +130,000 books reviewed using AI-supported feature.',
    },
  ]

  return (
    <div className={styles.container} {...props}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.text}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
