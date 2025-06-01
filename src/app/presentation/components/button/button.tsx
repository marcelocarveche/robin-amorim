import React from 'react'
import styles from './button-styles.module.scss'

type Props = {} & React.HTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({ children, ...props }) => {
  const style = props.onClick ? styles.enabled : styles.disabled
  return (
    <button onClick={props.onClick} className={style} {...props}>
      {children}
    </button>
  )
}
