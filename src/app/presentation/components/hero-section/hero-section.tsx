import styles from './hero-section.module.scss'
import { HeroPhoto } from '@/app/presentation/components'
type Props = {} & React.HTMLAttributes<HTMLElement>

export const HeroSection: React.FC<Props> = ({ ...props }) => {
  return (
    <section className={styles.container} {...props}>
      <div className={styles.content}>
        <div className={styles.presentation}>
          <h1>Hi! I’m Robin Amorim</h1>
          <p>
            Senior UX/UI Designer with PhD in Engineering, 10 years of Startup
            experience and AI expertise.
          </p>
        </div>
        <HeroPhoto />
      </div>
    </section>
  )
}
