import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const SocialProofIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="12.5" r="8.5" fill="#F196EA" />
      <circle cx="50.5" cy="12.5" r="8.5" fill="#FFC314" />
      <circle cx="30.5" cy="12.5" r="8.5" fill="#FF7A02" />
      <circle cx="9.5" cy="38.5" r="8.5" fill="#BBC3FE" />
      <circle cx="51.5" cy="48.5" r="8.5" fill="#6779FF" />
      <circle cx="30.5" cy="38.5" r="8.5" fill="#FFB674" />
      <path d="M55.5 60L59.3971 53.25H51.6029L55.5 60Z" fill="white" />
      <path d="M34.5 41L38.3971 47.75H30.6029L34.5 41Z" fill="#171717" />
      <path d="M13.5 41L17.3971 47.75H9.60289L13.5 41Z" fill="#171717" />
      <path d="M55.5 15L59.3971 21.75H51.6029L55.5 15Z" fill="#171717" />
      <path d="M34.5 15L38.3971 21.75H30.6029L34.5 15Z" fill="#171717" />
      <path d="M13.5 15L17.3971 21.75H9.60289L13.5 15Z" fill="#171717" />
    </svg>
  )
}
