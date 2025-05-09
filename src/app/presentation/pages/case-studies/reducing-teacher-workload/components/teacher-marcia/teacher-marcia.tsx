import React from 'react'
import styles from './teacher-marcia-styles.module.scss'
import { Assets } from '@/app/presentation/assets'

export const TeacherMarcia: React.FC = ({}) => {
  return (
    <div className={styles.container}>
      <img className={styles.foreground} src={Assets.TeacherMarcia} alt="" />
    </div>
  )
}
