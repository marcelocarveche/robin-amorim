import React from 'react'
import styles from './case-studies-section-styles.module.scss'
import {
  HandleAiPoweredUx,
  HandleRecoveringPrePandemic,
} from '@/app/presentation/components'
import { useIsMobile } from '@/app/infrastructure/providers/mobile-provider'
import { HandleReducingWorkload } from '@/app/presentation/components/handle-reducing-workload/handle-reducing-workload'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const CaseStudiesSection: React.FC<Props> = ({ ...props }) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2>Case Studies</h2>
        <div className={styles.caseStudies}>
          <HandleAiPoweredUx />
          <HandleReducingWorkload />
          <HandleRecoveringPrePandemic />
        </div>
      </div>
    </section>
  )
}
