import React from 'react'
import styles from './tags-styles.module.scss'

type Props = {
  tags: string[]
  color: 'grey' | 'blue' | 'yellow' | 'green'
  align?: 'start' | 'center' | 'end'
} & React.HTMLAttributes<HTMLDivElement>

export const Tags: React.FC<Props> = ({
  tags,
  color,
  align = 'center',
  ...props
}) => {
  const colors = new Map<string, string>([
    ['grey', styles.greyTag],
    ['blue', styles.blueTag],
    ['yellow', styles.yellowTag],
    ['green', styles.greenTag],
  ])
  const tagStyle = colors.get(color) || styles.greyTag

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
