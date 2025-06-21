import React from 'react'
import styles from './ai-powered-ux-styles.module.scss'
import { AssistantIcon, Skills, Tags } from '@/app/presentation/components'
import ContractsDashboardPng from './assets/contracts-dashboard.png'
import { BookPackageIcon } from '@/app/presentation/components/icons/book-package'
import colors from '@/app/presentation/styles/colors.module.scss'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const AIPoweredUX: React.FC<Props> = ({ ...props }) => {
  const challenges = [
    {
      title: 'Data Overload & Organization',
      description:
        'Users face long contract lists and need to scan key details (Name, Status, Date, Department, Counterparty) quickly, without endless scrolling.',
    },
    {
      title: 'Proactive Insights & Alerts',
      description:
        'Manual monitoring of renewals and pending approvals is time-consuming and error-prone, leading to missed deadlines and compliance risks.',
    },
    {
      title: 'Advanced Search & Filtering',
      description:
        'Traditional filters force users to combine multiple criteria manually, making complex searches slow and error-prone.',
    },
    {
      title: 'Enterprise-Level Interaction',
      description:
        'Users require bulk actions, inline status edits, and quick access to partner details, while keeping the interface uncluttered.',
    },
  ]

  const aiAssistedSections = [
    {
      title: 'Discovery',
      description:
        'I used Large Language Models (ChatGPT and Gemini) to accelerate early research and requirement definition, such as Stakeholder Understanding, Competitive Analysis, User Stories and Requirement Documents.',
      cards: [
        {
          icon: <BookPackageIcon />,
          title: 'Find Function \nPatterns',
          color: colors.greenDefault,
        },
        {
          icon: <BookPackageIcon />,
          title: 'Identify Valuable \nDifferentiators',
          color: colors.yellowDefault,
        },
        {
          icon: <BookPackageIcon />,
          title: 'Functionality & \nProduct Docs',
          color: colors.pinkDark,
        },
        {
          icon: <BookPackageIcon />,
          title: 'Create Different \nPersonas',
          color: colors.blueishDefault,
        },
      ],
    },
    {
      title: 'Design & Prototyping',
      description:
        'AI tools powered style exploration, dashboard first version and early interaction flows. For this phase, I used LLMs and Lovable, intercalating with Figma to design the final version.',
      cards: [
        {
          icon: <BookPackageIcon />,
          title: 'High-Fidelity \nFirst Draft',
          color: colors.pinkDefault,
        },
        {
          icon: <BookPackageIcon />,
          title: 'UI Style \nExploration',
          color: colors.orangeDefault,
        },
        {
          icon: <BookPackageIcon />,
          title: 'UI Refinement',
          color: colors.yellowDefault,
        },
        { icon: <BookPackageIcon />, title: 'High-Fidelity \nMockups' },
      ],
    },
    {
      title: 'Refinement & Delivery',
      description:
        'AI tools helped finalize interactions and prepare a near-production prototype. In this last stage, I used Builder.io, Lovable and Claude to create this high-fidelity and ready to launch final version.',
      cards: [
        { icon: <BookPackageIcon />, title: 'Code \nRefinement' },
        { icon: <BookPackageIcon />, title: 'Interaction \nEffects' },
        { icon: <BookPackageIcon />, title: 'Web Preview' },
        { icon: <BookPackageIcon />, title: 'Mock AI-Copilot' },
      ],
    },
  ]

  return (
    <>
      <section className={styles.section_1}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>B2B SAAS - LEGALTECH</p>
            <h1>
              AI-Powered UX: Rapid <br />
              Contracts Dashboard Design
            </h1>
            <Tags
              tags={['PROMPT ENGINEERING', 'AI-PROTOTYPING', 'UX/UI DESIGN']}
              color="green"
            />
          </div>
          <div className={styles.body}>
            <img src={ContractsDashboardPng} alt="ContractsDashboardPng" />
          </div>
          <div className={styles.footer}>
            <Skills
              role={'Senior UX/UI Designer'}
              responsibilities={
                'User Research . Competitive Analysis . AI-Assisted Documentation . Vibe-Coding Prototype .'
              }
              team={'Along with Chat GPT + Gemini + Lovable AI + Claude AI'}
              ai
            />
            <div className={styles.overview}>
              <h2>Overview</h2>
              <p>
                Legartis is an AI-driven LegalTech platform that streamlines
                contract review and management for legal, sales, and procurement
                teams. For this conceptual project, I designed a Contracts
                Overview Page that centralizes contract data, enables
                natural-language queries, and delivers proactive AI-powered
                alerts—mimicking a real-world engagement to showcase end-to-end
                UX methodology and advanced AI integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_2}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>The Challenge</h2>
            <p>
              In exploring Legartis’s contract management context, four core
              challenges emerged:
            </p>
          </div>
          <div className={styles.body}>
            <div className={styles.clover}>
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 204 204"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="79.0083"
                  y="21.6267"
                  width="144"
                  height="84"
                  rx="28"
                  transform="rotate(43.8723 79.0083 21.6267)"
                  fill="#F196EA"
                />
                <rect
                  x="21.6267"
                  y="124.599"
                  width="144"
                  height="84"
                  rx="28"
                  transform="rotate(-46.1277 21.6267 124.599)"
                  fill="#F196EA"
                />
              </svg>
            </div>
            <div className={styles.circles}>
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 264 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="36"
                  cy="36"
                  r="36"
                  transform="matrix(1 0 0 -1 192 72)"
                  fill="#FFC314"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="36"
                  transform="matrix(1 0 0 -1 96 168)"
                  fill="#FFC314"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="36"
                  transform="matrix(1 0 0 -1 192 168)"
                  fill="#FFC314"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="36"
                  transform="matrix(1 0 0 -1 0 168)"
                  fill="#FFC314"
                />
              </svg>
            </div>
            <div className={styles.challengesWrap}>
              {challenges.map((challenge, index) => (
                <div key={index} className={styles.challenge}>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.cloud}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 314 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M313.054 0C312.191 4.92513 310.541 9.7988 308.045 14.4443C295.496 37.796 266.394 46.5543 243.042 34.0059L229.614 26.79L233.562 34.623C245.493 58.296 235.975 87.1588 212.302 99.0898C188.629 111.021 159.766 101.502 147.835 77.8291L143.882 69.9854L144.914 78.708C148.029 105.034 129.213 128.901 102.887 132.016C76.5608 135.131 52.6942 116.314 49.5791 89.9883L48.6934 82.502L42.291 94.417C33.6339 110.527 17.0978 119.688 0.00683594 119.702V0H313.054Z"
              fill="#FF7A02"
            />
          </svg>
        </div>
        <div className={styles.pacman}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 199 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.826 203.644C16.5892 183.767 -12.886 122.064 6.99171 65.826L108.818 101.818L144.81 -0.00808716C201.047 19.8696 230.522 81.573 210.644 137.81C190.767 194.047 129.063 223.522 72.826 203.644Z"
              fill="#96D446"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>The Goals</h2>
            <p>
              To address these challenges, we established three measurable
              objectives
            </p>
          </div>
          <div className={styles.body}>
            <span>Provide a clear, scalable contracts overview.</span>
            <span>Enable efficient filtering, sorting, and search.</span>
            <span>Enable contract actions and partner details.</span>
          </div>
        </div>
      </section>
      <section className={styles.section_4}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>AI-Assisted Process</h2>
            <p>
              Throughout the Design Process, AI tools were integrated at every
              step to accelerate ideation, documentation, and prototyping.
            </p>
          </div>
          <div className={styles.body}>
            {aiAssistedSections.map((section, index) => (
              <div key={index} className={styles.subsection}>
                <div className={styles.header}>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
                <div className={styles.cards}>
                  {section.cards.map((card, cardIndex) => (
                    <div key={cardIndex} className={styles.card}>
                      <div
                        className={styles.icon}
                        style={{ backgroundColor: card.color }}
                      >
                        {card.icon}
                      </div>
                      <span className={styles.title}>
                        {card.title.split('\n').map((line, idx, arr) => (
                          <React.Fragment key={idx}>
                            {line}
                            {idx < arr.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
