import React from 'react'
import styles from './child-link-styles.module.scss'
import ChildLinkPng from './child-link.png'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const ChildLink: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.description}>
        <h4>1. Simplifying the parent‑child link</h4>
        <p>
          We replaced the Magic Pass with a simple match using the child’s name
          and class, reducing first‑access friction.
        </p>
      </div>
      <div className={styles.image}>
        <img src={ChildLinkPng} alt="" />
      </div>
    </div>
  )
}
