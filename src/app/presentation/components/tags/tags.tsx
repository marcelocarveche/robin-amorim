import React from 'react'
import styles from './tags-styles.module.scss'

type Props = {
  tags: string[]
  color: 'grey' | 'blue'
} & React.HTMLAttributes<HTMLDivElement>

export const Tags: React.FC<Props> = ({ tags, color, ...props }) => {
  const tagStyle = color === 'blue' ? styles.blueTag : styles.greyTag
  return (
    <div className={styles.tagsWrapper} {...props}>
      {tags.map((tag, index) => (
        <span key={index} className={tagStyle}>
          {tag}
        </span>
      ))}
    </div>
  )
}
