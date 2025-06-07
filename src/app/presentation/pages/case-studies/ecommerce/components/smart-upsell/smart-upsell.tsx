import React from 'react'
import styles from './smart-upsell-styles.module.scss'
import SmartUpsellPng from './smart-upsell.png'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const SmartUpsell: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.image}>
        <img src={SmartUpsellPng} alt="" />
      </div>
      <div className={styles.description}>
        <h4>4. Smart Upsell & Cross‑sell</h4>
        <p>
          Additional package offers, scarcity (“limited stock”) and social proof
          ("Best Seller", “Join other families”) raise ARPU and AOV.
        </p>
      </div>
    </div>
  )
}
