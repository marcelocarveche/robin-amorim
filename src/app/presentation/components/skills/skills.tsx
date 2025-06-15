import React from 'react'
import styles from './skills-styles.module.scss'

type Props = {
  role?: string
  responsibilities?: string
  team?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Skills: React.FC<Props> = ({
  role = 'Lead UX/UI Designer',
  responsibilities = 'User Research . Wireframe . Prototype . Usability Test . Iteration . Alignment & Hand-off',
  team = 'Along with 1 Product Manager + 6 Developers',
  ...props
}) => {
  return (
    <div className={styles.skills} {...props}>
      <p className={styles.skill}>
        <b>MY ROLE: </b>
        {role}
      </p>
      <p className={styles.skill}>
        <b>MY RESPONSABILITIES: </b>
        {responsibilities}
      </p>
      <p className={styles.skill}>
        <b>TEAM: </b>
        {team}
      </p>
    </div>
  )
}
