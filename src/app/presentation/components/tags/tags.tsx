import React from 'react'
import styles from './tags-styles.module.scss'

type Props = {
  tags: string[]
  color: 'grey' | 'blue'
  align?: 'start' | 'center' | 'end'
} & React.HTMLAttributes<HTMLDivElement>

export const Tags: React.FC<Props> = ({
  tags,
  color,
  align = 'center',
  ...props
}) => {
  const tagStyle = color === 'blue' ? styles.blueTag : styles.greyTag

  return (
    <div className={styles.tagsWrapper} data-align={align} {...props}>
      {tags.map((tag, index) => (
        <span key={index} className={tagStyle}>
          {tag}
        </span>
      ))}
    </div>
  )
}
