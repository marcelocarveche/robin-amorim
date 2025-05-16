import React from 'react'
import styles from './skills-styles.module.scss'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Skills: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.skills}>
      <p className={styles.skill}>
        <b>MY ROLE: </b>
        Lead UX/UI Designer
      </p>
      <p className={styles.skill}>
        <b>MY RESPONSABILITIES: </b>User Research . Wireframe . Prototype .
        Usability Test . Iteration . Alignment & Hand-off
      </p>
      <p className={styles.skill}>
        <b>TEAM: </b>Along with 1 Product Manager + 6 Developers
      </p>
    </div>
  )
}
