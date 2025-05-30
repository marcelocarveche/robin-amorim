import React, { JSX } from 'react'
import styles from './comments-styles.module.scss'

export interface Comment {
  profile: JSX.Element
  message: string
  author: string
}

type Props = {
  comments: Array<Comment>
} & React.HTMLAttributes<HTMLDivElement>

export const Comments: React.FC<Props> = ({ comments, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {comments.map((comment, index) => (
        <div className={styles.commentWrap} key={index}>
          {comment.profile}
          <div className={styles.textWrap}>
            <p
              className={styles.message}
              dangerouslySetInnerHTML={{
                __html: comment.message.replace(/\n/g, '<br/>'),
              }}
            />
            <p className={styles.author}>{comment.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
