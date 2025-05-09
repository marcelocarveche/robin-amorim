import React from 'react'
import styles from './teacher-eliana-styles.module.scss'
import { Assets } from '@/app/presentation/assets'

export const TeacherEliana: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <img className={styles.foreground} src={Assets.TeacherEliana} alt="" />
    </div>
  )
}
