import React from 'react'
import styles from './case-studies-section-styles.module.scss'
import {
  HandleCaseStudiesSection,
  HandleRecoveringPrePandemic,
} from '@/app/presentation/components'
import { useIsMobile } from '@/app/infrastructure/providers/mobile-provider'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const CaseStudiesSection: React.FC<Props> = ({ ...props }) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2>Case Studies</h2>
        <div className={styles.caseStudies}>
          <HandleCaseStudiesSection />
          <HandleRecoveringPrePandemic />
        </div>
      </div>
    </section>
  )
}
