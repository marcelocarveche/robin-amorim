import React, { useRef, useState, useEffect } from 'react'
import styles from './ai-powered-ux-styles.module.scss'
import {
  AssistantIcon,
  Navigation,
  Skills,
  Tags,
} from '@/app/presentation/components'
import ContractsDashboardPng from './assets/contracts-dashboard.png'
import { BookPackageIcon } from '@/app/presentation/components/icons/book-package'
import colors from '@/app/presentation/styles/colors.module.scss'
import { FunctionPatternsIcon } from '@/app/presentation/components/icons/function-patterns'
import { IdentityValuableIcon } from '@/app/presentation/components/icons/identify-valuable'
import { ProductDocsIcon } from '@/app/presentation/components/icons/product-docs'
import { DifferentPersonasIcon } from '@/app/presentation/components/icons/different-personas'
import { FirstDraftIcon } from '@/app/presentation/components/icons/first-draft'
import { UIStyleIcon } from '@/app/presentation/components/icons/ui-style'
import { UIRefinementIcon } from '@/app/presentation/components/icons/ui-refinement'
import { HightFidelityIcon } from '@/app/presentation/components/icons/high-fidelity'
import { CodeRefinementIcon } from '@/app/presentation/components/icons/code-refinement'
import { AICopilotIcon } from '@/app/presentation/components/icons/ai-copilot'
import { WebPreviewIcon } from '@/app/presentation/components/icons/web-preview'
import { InteractionEffectsIcon } from '@/app/presentation/components/icons/interaction-effects'
import SidebarNavigation from './assets/sidebar-navigation.png'
import StatusOverview from './assets/status-overview.png'
import NaturalLanguage from './assets/natural-language.png'
import BulkActionToolbar from './assets/bulk-action-toolbar.png'
import CompactDataView from './assets/compact-data-view.png'
import AdaptableLayouts from './assets/adaptable-layouts.png'
import { DocumentationIcon } from '@/app/presentation/components/icons/documentation'
import { PrototypeBaselineIcon } from '@/app/presentation/components/icons/prototype-baseline'
import { DesignTransferIcon } from '@/app/presentation/components/icons/design-transfer'
import { EfficientInterationIcon } from '@/app/presentation/components/icons/efficient-interection'
import { AIHHumanIcon } from '@/app/presentation/components/icons/ai-human'
import { Routes } from '@/app/presentation/protocols'
import DashboardVideo from './assets/dashboard-video.mp4'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const AIPoweredUX: React.FC<Props> = ({ ...props }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const carouselRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

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
          icon: <FunctionPatternsIcon />,
          title: 'Find Function \nPatterns',
          color: colors.yellowLight,
        },
        {
          icon: <IdentityValuableIcon />,
          title: 'Identify Valuable \nDifferentiators',
          color: colors.orangeLight,
        },
        {
          icon: <ProductDocsIcon />,
          title: 'Functionality & \nProduct Docs',
          color: colors.pinkLight,
        },
        {
          icon: <DifferentPersonasIcon />,
          title: 'Create Different \nPersonas',
          color: colors.blueishLight,
        },
      ],
    },
    {
      title: 'Design & Prototyping',
      description:
        'AI tools powered style exploration, dashboard first version and early interaction flows. For this phase, I used LLMs and Lovable and/or V0, intercalating with Figma to design the final version.',
      cards: [
        {
          icon: <FirstDraftIcon />,
          title: 'High-Fidelity \nFirst Draft',
          color: colors.pinkDefault,
        },
        {
          icon: <UIStyleIcon />,
          title: 'UI Style \nExploration',
          color: colors.yellowLight,
        },
        {
          icon: <UIRefinementIcon />,
          title: 'UI Refinement',
          color: colors.yellowDefault,
        },
        {
          icon: <HightFidelityIcon />,
          title: 'High-Fidelity \nMockups',
          color: colors.orangeLight,
        },
      ],
    },
    {
      title: 'Refinement & Delivery',
      description:
        'AI tools helped finalize interactions and prepare a near-production prototype. In this last stage, I used Builder.io, Lovable and/or V0 and Claude to create this high-fidelity and ready to launch final version.',
      cards: [
        {
          icon: <CodeRefinementIcon />,
          title: 'Code \nRefinement',
          color: colors.pinkDefault,
        },
        {
          icon: <InteractionEffectsIcon />,
          title: 'Interaction \nEffects',
          color: colors.blueishLight,
        },
        {
          icon: <WebPreviewIcon />,
          title: 'Web Preview',
          color: colors.yellowDefault,
        },
        {
          icon: <AICopilotIcon />,
          title: 'Mock AI-Copilot',
          color: colors.yellowLight,
        },
      ],
    },
  ]

  const solutionsHighlights = [
    {
      image: SidebarNavigation,
      content: [
        {
          title: 'Sidebar Navigation',
          description:
            'A sidebar provides easy access to “Dashboard,” “Archive,” and “Trash” (30-day retention), plus a “New Contract” button for quick creation.',
        },
        {
          title: 'AI Copilot Chat & Smart Alerts:',
          description:
            'The “AI Copilot” item in the top right opens a chat interface, letting users ask natural-language questions (e.g., “Summarize cost of 2025 contracts”) and see results in real time. \nAI responses can trigger dashboard updates (e.g., “Show me contracts pending approval”), seamlessly integrating chat with the core interface.',
        },
      ],
    },
    {
      image: StatusOverview,
      content: [
        {
          title: 'Status Overview Cards:',
          description:
            'At the top of the dashboard, dynamic cards display real-time contract counts and progress. Users can apply filters to refine their view instantly.',
        },
        {
          title: 'KPIs & Visual Insights:',
          description:
            'Displays key metrics, while giving users the option to customize data visualization for fast and better decision-making.',
        },
      ],
    },
    {
      image: NaturalLanguage,
      content: [
        {
          title: 'Natural-Language Search Bar: ',
          description:
            'Supports multi-keyword, semantic queries (e.g., “contracts expiring next month with Supplier X”), instantly applying filters without strict syntax.',
        },
        {
          title: 'Filter Panel:',
          description:
            'A “Filters” button keeps the table uncluttered until the user needs to refine results. When expanded, users can combine any filters and clear all selections at once, enhancing speed.',
        },
      ],
    },
    {
      image: BulkActionToolbar,
      content: [
        {
          title: 'Bulk Action Toolbar:',
          description:
            'When one or more contracts are selected, a toolbar appears showing the count and action buttons. One-click execution speeds up high-volume workflows.',
        },
        {
          title: 'Row-Level “More Actions” Menu:',
          description:
            'Each contract row offers a menu for operations including Contract Overview (opens summary in slide-in), Edit, Download, Email Reminder, Archive, and Delete (with confirmation).',
        },
      ],
    },
    {
      image: CompactDataView,
      content: [
        {
          title: 'Compact Data View:',
          description:
            'The table includes important fields for contract management, such as next-step ownership and deadlines at a glance.',
        },
        {
          title: 'Partner Information Slide-In:',
          description:
            'Clicking the Partner icon in a contract row opens a slide-in panel with detailed company information and primary contact.Within the same panel, users see all contracts linked to that partner (with status badges and checkboxes), plus a “View Contract(s)” action, enabling efficient partner-level management.',
        },
      ],
    },
    {
      image: AdaptableLayouts,
      content: [
        {
          title: 'Adaptable Layouts: ',
          description:
            'One of the need was to create a tablet version.On tablet, the sidebar collapses or becomes a hamburger menu; the filter panel becomes a slide-over; contract rows transform into card stacks for easier tapping.',
        },
      ],
    },
  ]

  const resultsAndLearnings = [
    {
      icon: <DocumentationIcon />,
      title: 'Fast Ideation & \nDocumentation',
      description:
        'ChatGPT & Gemini generated several user profiles, PRD, and functionality specs in under 3 hours (vs. ~6–8 hours manually), providing clear guidance for prototyping.',
    },
    {
      icon: <PrototypeBaselineIcon />,
      title: 'Rapid Prototype \nBaseline',
      description:
        'Lovable and/or V0 delivered an interactive skeleton (filters, table, chat) in ~2 hours, saving ~60 % of wireframing time.\nBesides, it validated layout feasibility quickly.',
    },
    {
      icon: <DesignTransferIcon />,
      title: 'Seamless Design \nTransfer',
      description:
        'Builder.io import of Figma the Design and some of its assets to Lovable and/or V0, ensuring a near-production code snippets and visuals, minimizing ambiguity, and easing later Refinement.',
    },
    {
      icon: <EfficientInterationIcon />,
      title: 'Efficient Interaction Refinement',
      description:
        'Claude added smooth transitions, effects, and form validation without extra Lovable and/or V0 credits. It reduces iteration time and cost, and possibilites high-polish interactions for handoff.',
    },
    {
      icon: <AIHHumanIcon />,
      title: 'Balancing AI & Human \nJudgment',
      description:
        'AI tools handled repetitive tasks, while human ensured consistency, understanding, and accessibility. The Human-AI collaboration requires learning-time and experience.',
    },
  ]

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      const tolerance = 5 // Adicionar uma pequena tolerância para melhor detecção

      setCanScrollLeft(scrollLeft > tolerance)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - tolerance)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current && canScrollLeft) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      })
      // Recheck buttons after scroll
      setTimeout(checkScrollButtons, 300)
    }
  }

  const scrollRight = () => {
    if (carouselRef.current && canScrollRight) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      })
      // Recheck buttons after scroll
      setTimeout(checkScrollButtons, 300)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      // Executar checkScrollButtons após um pequeno delay para garantir que o DOM esteja totalmente renderizado
      setTimeout(() => {
        checkScrollButtons()
      }, 100)

      carousel.addEventListener('scroll', checkScrollButtons)
      window.addEventListener('resize', checkScrollButtons)

      return () => {
        carousel.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [resultsAndLearnings]) // Adicionar dependência para reexecutar quando os dados mudarem

  // Video visibility observer
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set playback speed to 1.75x
    video.playbackRate = 1.75

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ensure video is ready to play
            if (video.readyState >= 2) {
              video.play().catch((error) => {
                console.warn('Video autoplay failed:', error)
              })
            } else {
              // If video not ready, wait for it to load
              video.addEventListener(
                'canplay',
                () => {
                  video.play().catch((error) => {
                    console.warn('Video autoplay failed:', error)
                  })
                },
                { once: true }
              )
            }
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.3, // Video starts playing when 30% visible (more responsive)
        rootMargin: '0px 0px -10% 0px', // Small margin to prevent edge cases
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

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
              team={
                'Along with Chat GPT + Gemini + Lovable and/or V0 AI + Claude AI'
              }
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
      <section className={styles.section_5}>
        <div className={styles.content}>
          <h2>Solution Highlights</h2>
          <div className={styles.video}>
            <video
              ref={videoRef}
              width={'100%'}
              loop
              muted
              playsInline
              preload="auto"
              style={{ cursor: 'default' }}
            >
              <source src={DashboardVideo} type="video/mp4" />
              Your browser does not support the video.
            </video>
            <p>
              Prototype created with V0, by Vercel. To access it,{' '}
              <a
                href="https://kzmoqiadc6wwzjx7qe05.lite.vusercontent.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </p>
          </div>
          <div className={styles.wrapHighlights}>
            {solutionsHighlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <img
                  src={highlight.image}
                  alt={`Highlight ${index + 1}`}
                  className={styles.image}
                />
                <div className={styles.content}>
                  {highlight.content.map((item, itemIndex) => (
                    <div key={itemIndex} className={styles.item}>
                      <h4>{item.title}</h4>
                      {/* Se tiver um \n na string substituir por <br /> */}
                      <p>
                        {item.description.split('\n').map((line, idx, arr) => (
                          <React.Fragment key={idx}>
                            {line}
                            {idx < arr.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section_6}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Results and Learnings</h2>
            <p>
              Demonstrates how a full UX process can be "AI-augmented," not
              replaced—freeing up design time for strategic thinking and user
              empathy work. Sets a blueprint for integrating AI assistants in
              enterprise dashboards: always combine AI's speed with designers'
              critical lens.
            </p>
          </div>

          <div className={styles.carousel}>
            <div
              className={styles.leftButton}
              onClick={scrollLeft}
              style={{
                opacity: canScrollLeft ? 1 : 0.3,
                cursor: canScrollLeft ? 'pointer' : 'not-allowed',
              }}
            >
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="27.5"
                  fill="#F9F6F2"
                  stroke={canScrollLeft ? '#171717' : '#676767'}
                />
                <path
                  d="M26.3188 28.0003L32.6596 34.3407C33.0115 34.693 33.1875 35.135 33.1875 35.667C33.1875 36.1989 33.0115 36.641 32.6596 36.9932C32.3074 37.3452 31.8653 37.5212 31.3333 37.5212C30.8014 37.5212 30.3593 37.3452 30.0071 36.9932L22.3504 29.3366C22.164 29.1499 22.0278 28.9427 21.9417 28.7149C21.8556 28.4874 21.8125 28.2492 21.8125 28.0003C21.8125 27.7514 21.8556 27.5132 21.9417 27.2857C22.0278 27.058 22.164 26.8507 22.3504 26.6641L30.0071 19.0074C30.3593 18.6555 30.8014 18.4795 31.3333 18.4795C31.8653 18.4795 32.3074 18.6555 32.6596 19.0074C33.0115 19.3596 33.1875 19.8017 33.1875 20.3337C33.1875 20.8656 33.0115 21.3077 32.6596 21.6599L26.3188 28.0003Z"
                  fill={canScrollLeft ? '#171717' : '#676767'}
                />
              </svg>
            </div>
            <div className={styles.wrapCards} ref={carouselRef}>
              {resultsAndLearnings.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.icon}>{item.icon}</div>

                  <h4>
                    {item.title.split('\n').map((line, idx, arr) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h4>
                  <p>
                    {item.description.split('\n').map((line, idx, arr) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={styles.rightButton}
              onClick={scrollRight}
              style={{
                opacity: canScrollRight ? 1 : 0.3,
                cursor: canScrollRight ? 'pointer' : 'not-allowed',
              }}
            >
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="27.5"
                  fill="#F9F6F2"
                  stroke={canScrollRight ? '#171717' : '#676767'}
                />
                <path
                  d="M28.6813 28.0003L22.3404 21.6599C21.9885 21.3077 21.8125 20.8656 21.8125 20.3337C21.8125 19.8017 21.9885 19.3596 22.3404 19.0074C22.6926 18.6555 23.1347 18.4795 23.6667 18.4795C24.1986 18.4795 24.6407 18.6555 24.9929 19.0074L32.6496 26.6641C32.836 26.8507 32.9722 27.058 33.0583 27.2857C33.1444 27.5132 33.1875 27.7514 33.1875 28.0003C33.1875 28.2492 33.1444 28.4874 33.0583 28.7149C32.9722 28.9427 32.836 29.1499 32.6496 29.3366L24.9929 36.9932C24.6407 37.3452 24.1986 37.5212 23.6667 37.5212C23.1347 37.5212 22.6926 37.3452 22.3404 36.9932C21.9885 36.641 21.8125 36.1989 21.8125 35.667C21.8125 35.135 21.9885 34.693 22.3404 34.3407L28.6813 28.0003Z"
                  fill={canScrollRight ? '#171717' : '#676767'}
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_7}>
        <div className={styles.eight}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 217 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M216.204 -0.0078125C216.204 38.2594 196.301 71.8766 166.282 91.0605C185.712 103.539 200.881 122.074 209.124 144H6.87598C15.1478 121.998 30.3936 103.41 49.9209 90.9307C20.0165 71.725 0.204102 38.1725 0.204102 -0.0078125H216.204Z"
              fill="#FF7A02"
            />
          </svg>
        </div>
        <div className={styles.circle}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 140 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M140 104.254C130.084 107.399 119.543 109.157 108.602 109.289C52.6985 109.964 6.20264 68.042 -0.000228882 13.6687V-0.000236511H140V104.254Z"
              fill="#0E20A2"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <h2>Summary & Conclusion</h2>
          <p>
            This AI-Powered Contracts Dashboard demonstrates how AI can be the
            cornerstone of both the UX process (ChatGPT, Gemini for
            documentation; Lovable and/or V0 for prototyping; Claude for code
            refinement) and the product experience (semantic search, proactive
            alerts, interactive filters). By harnessing these tools, I delivered
            a high-fidelity, interactive prototype in just 5 days—showing how
            contract management workflows can become a seamless, intelligent
            experience.
          </p>
        </div>
      </section>
      <section className={styles.section_8}>
        <Navigation next={Routes.caseStudies.reducingTeacherWorkload} />
      </section>
    </>
  )
}
