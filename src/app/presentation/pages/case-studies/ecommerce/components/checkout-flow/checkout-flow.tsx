import React from 'react'
import styles from './checkout-flow-styles.module.scss'
import CheckoutFlowPng from './checkout-flow.png'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const CheckoutFlow: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.image}>
        <img src={CheckoutFlowPng} alt="" />
      </div>
      <div className={styles.description}>
        <h4>2. Optimized sign‑up → checkout flow</h4>
        <p>
          We reordered steps to display the Author’s Page before package
          selection, triggering parental pride that boosts purchases.
        </p>
      </div>
    </div>
  )
}
