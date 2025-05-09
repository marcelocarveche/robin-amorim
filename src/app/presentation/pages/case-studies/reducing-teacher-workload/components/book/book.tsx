import React from 'react'
import styles from './book-styles.module.scss'
import { colors } from '@/app/presentation/styles'
import { Assets } from '@/app/presentation/assets'
import { PizzaForm } from '@/app/presentation/components/forms/pizza'
import { SemiRectangleForm } from '@/app/presentation/components/forms/semi-rectangle'
import { SuggestionsForm } from '@/app/presentation/components/forms/suggestions'
import { CloverForm } from '@/app/presentation/components/forms/clover'
import { AudioRecorderForm } from '@/app/presentation/components/forms/audio-recorder'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Book: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <PizzaForm className={styles.forms_1} />
        <div className={styles.bookCard}>
          <img src={Assets.Book2} alt="Book.png" />
        </div>
        <SemiRectangleForm className={styles.forms_2} />
        <div className={styles.suggestionsCard}>
          <SuggestionsForm />
        </div>
        <div className={styles.audioRecorderCard}>
          <AudioRecorderForm />
        </div>
        <CloverForm className={styles.forms_3} />
      </div>
    </div>
  )
}
