import React from 'react'
import styles from './images-styles.module.scss'
import { Assets } from '@/app/presentation/assets'
import { colors } from '@/app/presentation/styles'
import { SuggestionsForm } from '../../../forms'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Images: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.content}>
        <div className={styles.forms_1}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 204 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="101.937" cy="102.611" r="72" fill="#6779FF" />
          </svg>
        </div>
        <div className={styles.shoppingCard}>
          <img
            src={Assets.RecoveringPrePandemic}
            alt="RecoveringPrePandemic.png"
          />
        </div>
        <div className={styles.forms_2}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 181 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.8451 39.9593L165.589 91.1681L54.4812 180.752L33.8451 39.9593Z"
              fill="#FF7A02"
            />
          </svg>
        </div>
        <div className={styles.biography}>
          <div className={styles.header}>
            <div className={styles.photo}>
              <img src={Assets.CarlaNevesNeto} alt="photo" />
            </div>
            <div className={styles.logo}>
              <img src={Assets.EscolinhaFelizLogo} alt="logo" />
            </div>
            <div className={styles.star1}>
              <img src={Assets.WhiteStar} alt="star" />
            </div>
            <div className={styles.star2}>
              <img src={Assets.WhiteStar} alt="star" />
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.title}>
              <h4>
                Biography of the <br />
                Literary Star
              </h4>
              <div className={styles.pencil}>
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.02903 2.617C7.11381 2.53223 7.21445 2.46498 7.32521 2.4191C7.43597 2.37322 7.55468 2.34961 7.67457 2.34961C7.79446 2.34961 7.91317 2.37322 8.02393 2.4191C8.1347 2.46498 8.23534 2.53223 8.32011 2.617C8.40488 2.70177 8.47213 2.80241 8.51801 2.91318C8.56389 3.02394 8.5875 3.14265 8.5875 3.26254C8.5875 3.38243 8.56389 3.50114 8.51801 3.6119C8.47213 3.72266 8.40488 3.8233 8.32011 3.90808L3.96273 8.26546L2.1875 8.74961L2.67165 6.97438L7.02903 2.617Z"
                    stroke="#FCFCFD"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.0918 6.68384L4.25376 7.84581"
                    stroke="#FCFCFD"
                    stroke-width="0.8"
                  />
                </svg>
              </div>
            </div>
            <p>
              Carla Neves Neto was born in the countryside of Minas Gerais. The
              youngest of three—her two brothers are much older—she spends her
              days watching TV, playing with friends, and learning new things.
              She also loves making up stories in her head, and sometimes tells
              them to her dolls. That’s how the idea for this book came about.
              She loves inventing stories in her mind, and sometimes shares them
              with her dolls. That’s how she created The Haunted House, her
              first published work.
            </p>
          </div>
          <div className={styles.footer}>
            <div className={styles.info}>
              <h5>Teacher</h5>
              <p>Juliana Ferreira Paiva</p>
            </div>
            <div className={styles.info}>
              <h5>School</h5>
              <p>Trupe Estante Mágica</p>
            </div>
          </div>
        </div>
        <div className={styles.forms_3}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.17468 35.7968C6.24407 16.0226 23.9518 1.66994 43.7261 3.73932L39.9792 39.5438L75.7836 43.2907C73.7142 63.065 56.0065 77.4177 36.2322 75.3483C16.4579 73.2789 2.1053 55.5711 4.17468 35.7968Z"
              fill="#FFC314"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
