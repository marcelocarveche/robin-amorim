import React from 'react'
import styles from './ecommerce-styles.module.scss'
import {
  ARPULiftIcon,
  BiggerCartsIcon,
  DeniedIcon,
  FamiliesIcon,
  GoalIcon,
  Navigation,
  RevenueIcon,
  StarIcon,
  Tags,
} from '@/app/presentation/components'
import { CartDesign } from './components/cart-design/cart-design'
import { Skills } from '@/app/presentation/components'
import { AuthorPageDesign } from './components/author-page-design/author-page-design'
import { QuestionBaloon } from '@/app/presentation/components/forms'
import { ChildLinkIcon } from '@/app/presentation/components/icons/child-link'
import { colors } from '@/app/presentation/styles'
import { MessageBoardIcon } from '@/app/presentation/components/icons/message-board'
import { UpsellIcon } from '@/app/presentation/components/icons/upsell'
import { BiographyIcon } from '@/app/presentation/components/icons/biography'
import { EasySharingIcon } from '@/app/presentation/components/icons/easy-sharing'
import { SocialProofIcon } from '@/app/presentation/components/icons/social-proof'
import { BookPackageIcon } from '@/app/presentation/components/icons/book-package'
import { MultiChildPurchaseIcon } from '@/app/presentation/components/icons/multi-child-purchase'
import { ScarcityIcon } from '@/app/presentation/components/icons/scarcity'
import { ChildLink } from './components/child-link/child-link'
import { CheckoutFlow } from './components/checkout-flow/checkout-flow'
import { SocialEngagement } from './components/social-engagement/social-engagement'
import { SmartUpsell } from './components/smart-upsell/smart-upsell'
import { Routes } from '@/app/presentation/protocols'
import { useNavigate } from 'react-router-dom'

type Props = {} & React.HTMLAttributes<HTMLDivElement>

export const Ecommerce: React.FC<Props> = ({ ...props }) => {
  const hypotheses = [
    {
      title: 'Hypothesis 1: \nStreamlined \nPurchase Flow',
      description:
        'Removing the necessity of Magic Pass and auto-matching parents to their child would cut sign-up abandonment and make first access effortless.',
    },
    {
      title: 'Hypothesis 2: \nBoost \nAccessibility',
      description:
        'Opening the Author’s Page to friends and relatives—code-free—and adding simple social features would broaden reach and raise average order value.',
    },
    {
      title: 'Hypothesis 3: \nBoost Purchase \nMomentum',
      description:
        'Applying proven e-commerce tactics—upsells, scarcity and social proof—would turn engaged parents into higher-value buyers.',
    },
  ]

  const discoveryMethods = [
    {
      title: 'Sign-up \nFriction',
      description:
        'The registration is long and parents had to enter a child code provided by the school.',
    },
    {
      title: 'Biography \nDrives Sales',
      description:
        'Parents who finish writing their child’s biography are far more likely to purchase.',
    },
    {
      title: 'Missed \nDeadline',
      description:
        'Poor communication leaves many parents unaware of timelines and order windows.',
    },
    {
      title: 'Event-driven \nSales',
      description:
        'Awareness of the school’s Book-Signing Event strongly boosts book purchases.',
    },
  ]

  const solutions = [
    {
      icon: <ChildLinkIcon />,
      title: 'Easy Child Link',
      color: colors.yellowLight,
    },
    {
      icon: <MessageBoardIcon />,
      title: 'Message Board',
      color: colors.blueishLight,
    },
    {
      icon: <UpsellIcon />,
      title: 'Upsell',
      color: colors.orangeLight,
    },
    {
      icon: <BiographyIcon />,
      title: 'Biography in Onboarding',
      color: colors.blueishDefault,
    },
    {
      icon: <EasySharingIcon />,
      title: 'Easy Sharing',
      color: colors.pinkDefault,
    },
    {
      icon: <SocialProofIcon />,
      title: 'Social-proof',
      color: colors.pinkLight,
    },
    {
      icon: <BookPackageIcon />,
      title: 'Book Package Choices',
      color: colors.pinkLight,
    },
    {
      icon: <MultiChildPurchaseIcon />,
      title: 'Multi-child Purchase',
      color: colors.orangeDefault,
    },
    {
      icon: <ScarcityIcon />,
      title: 'Scarcity',
      color: colors.yellowDefault,
    },
  ]

  const quantifiableResults = [
    {
      icon: <FamiliesIcon />,
      title: 'Active Families	',
      description: '270 k parents + 218 k children with purchase.',
    },
    {
      icon: <RevenueIcon />,
      title: 'Revenue Rebound',
      description: '96 % of 2019 revenue recovered.',
    },
    {
      icon: <ARPULiftIcon />,
      title: 'ARPU Lift',
      description: '11 % increase in \nARPU.',
    },
    {
      icon: <BiggerCartsIcon />,
      title: 'Bigger Carts',
      description: '14 % increase in average order value per child.',
    },
  ]

  const conclusion = [
    {
      icon: <DeniedIcon />,
      title: 'Problem',
      description: 'Revenue dropped after the pandemic.',
    },
    {
      icon: <GoalIcon />,
      title: 'Goal',
      description: 'Restore pre‑pandemic revenue in a customer‑centric way.',
    },
    {
      icon: <StarIcon />,
      title: 'Result',
      description: '96 % revenue recovered, AOV ↑ 14 %, ARPU ↑ 11 %',
    },
  ]

  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <section className={styles.section_1}>
        <div className={styles.content}>
          <div className={styles.header}>
            <p>B2B2C - Startup</p>
            <h1>
              E-commerce redesign recovered <br />
              96% of Pre‑Pandemic Revenue
            </h1>
            <Tags
              tags={['web responsive', 'research', 'ux/ui design']}
              color={'yellow'}
            />
          </div>
          <div className={styles.body}>
            <CartDesign />
          </div>
          <div className={styles.footer}>
            <Skills
              role={'Lead UX/UI Designer'}
              responsibilities={
                'User Research . Wireframe . Prototype . Usability Test . Iteration . Alignment & Hand-off'
              }
              team={
                'Along with 1 Product Manager + 3 Developers + External Partner'
              }
            />
            <div className={styles.overview}>
              <h2>Overview</h2>
              <p>
                Estante Mágica transforms children into published authors and
                has produced 2.5 million books across nine countries. <br />
                When schools closed during the COVID-19 pandemic, revenue
                plunged by 92 % (2020) and 82 % (2021), the business needed a
                fast rebound. <br /> As the lead designer, I drove an end-to-end
                UX/UI redesign of our e-commerce experience flow—work that
                restored 96 % of pre-pandemic revenue by lifting average order
                value 14 % and increasing ARPU 11 %.
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
              The Author’s Page – a personalised storefront where each child’s
              e-book lives and parents write the child’s biography and order
              printed copies – sat behind a unique “Magic Pass” code and lacked
              any social or interactive sections. Parents could only grant
              access by sharing the Magic Pass manually, which created friction
              and prevented friends or relatives from discovering and buying
              books.
            </p>
          </div>
          <div className={styles.body}>
            <AuthorPageDesign />
          </div>
          <div className={styles.footer}>
            <h4>
              How might we craft an enchanting e-commerce experience that
              restores pre-pandemic revenue?
            </h4>
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <div className={styles.content}>
          <div className={styles.sub_section_1}>
            <div className={styles.header}>
              <h2>The Objective & Hyp0theses</h2>
              <p>
                Recover pre-pandemic revenue by pulling two levers: <br />
                <b>
                  ARPU (Average Revenue Per User) <br />
                  Average order value per child
                </b>
                <br />
                We crafted three research-backed hypotheses, each aimed at
                moving <br />
                ARPU or average order value.
              </p>
            </div>
            <div className={styles.body}>
              {hypotheses.map((item, index) => (
                <div className={styles.hypothese} key={index}>
                  <QuestionBaloon />
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: item.title.replace(/\n/g, '<br />'),
                    }}
                  />
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sub_section_2}>
            <div className={styles.header}>
              <h2>
                Discovery Methods & <br />
                Takeaways
              </h2>
              <p>
                To start, I delve into the purchasing experience on our platform
                to uncover ways to maximize our earnings.I mapped the purchase
                journey through interviews, flow diagrams and support-ticket
                analysis. Four insights stood out:
              </p>
            </div>
            <div className={styles.body}>
              <div className={styles.trianglesWrap}>
                <svg
                  width="209"
                  height="375"
                  viewBox="0 0 209 375"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.6336 102.841L169.508 23.3056L176.326 172.646L44.6336 102.841Z"
                    fill="#FFB674"
                  />
                  <path
                    d="M44.6336 304.841L169.508 225.306L176.326 374.646L44.6336 304.841Z"
                    fill="#FFB674"
                  />
                  <path
                    d="M37.1906 124.949L165.741 198.395L36.7707 273.997L37.1906 124.949Z"
                    fill="#FFB674"
                  />
                </svg>
              </div>
              <div className={styles.moonElement}>
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 227 232"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-5.126e-05 73.8745C43.5101 33.0749 111.857 35.2723 152.656 78.7824C193.456 122.293 191.258 190.639 147.748 231.439L-5.126e-05 73.8745Z"
                    fill="#FFDEFD"
                  />
                </svg>
              </div>
              {discoveryMethods.map((item, index) => (
                <div className={styles.discoveryCard} key={index}>
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: item.title.replace(/\n/g, '<br />'),
                    }}
                  />
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.footer}>
              <p>
                From the hypothesis, we had a brainstorm session for possible
                solutions. The solutions were then designed and tested with
                users:
              </p>
              <div className={styles.solutionsWrap}>
                {solutions.map((item, index) => (
                  <div className={styles.solutionCard} key={index}>
                    <div
                      className={styles.icon}
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_4}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Revenue Levers in Action</h2>
            <p>
              Grounded in usability-test insights—and balanced against technical
              constraints and business priorities—we implemented the
              highest-impact solutions:
            </p>
          </div>
          <div className={styles.body}>
            <ChildLink />
            <CheckoutFlow />
            <SocialEngagement />
            <SmartUpsell />
          </div>
        </div>
      </section>
      <section className={styles.section_5}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>
              Quantifiable Results & <br />
              Business Impact
            </h2>
          </div>
          <div className={styles.body}>
            {quantifiableResults.map((item, index) => (
              <div className={styles.resultCard} key={index}>
                <div className={styles.icon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.description.replace(/\n/g, '<br />'),
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section_6}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Learnings & Future Vision</h2>
          </div>
          <div className={styles.body}>
            <div className={styles.triangle}>
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 219 214"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0693633 164.625L149.133 0.00741607L218.274 213.326L0.0693633 164.625Z"
                  fill="#FFC314"
                />
              </svg>
            </div>
            <div className={styles.circles}>
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 160 158"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="124" cy="36" r="36" fill="#96D446" />
                <circle cx="36" cy="36" r="36" fill="#96D446" />
                <circle cx="124" cy="122" r="36" fill="#96D446" />
              </svg>
            </div>
            <div className={styles.cardsWrap}>
              <div className={styles.card}>
                <h4>Funnel focus</h4>
                <p>
                  Simple onboarding led parents straight to their child’s page.
                </p>
              </div>
              <div className={styles.card}>
                <h4>Pride drives sales</h4>
                <p>
                  Seeing the Author’s Page, and child's book sparks purchases.
                </p>
              </div>
              <div className={styles.card}>
                <h4>Network effect</h4>
                <p>
                  Sharing the Author's Page with friends & family raise ticket
                  value.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <p>
              <b>Next up</b>: make previous‑year books easier to access,
              introduce new customized products and roll out a structured
              referral program.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section_7}>
        <div className={styles.tree}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 269 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M144.727 100.219C144.305 126.725 122.476 147.871 95.9695 147.449C69.4631 147.027 48.3175 125.198 48.7392 98.6915L49.503 50.6976C49.9247 24.1913 71.7543 3.04562 98.2606 3.46741C124.767 3.88919 145.913 25.7187 145.491 52.225L144.727 100.219Z"
              fill="#FF7A02"
            />
            <path
              d="M196.543 138.737C176.61 156.213 146.283 154.222 128.807 134.289C111.33 114.355 113.322 84.0287 133.255 66.5522L169.348 34.9082C189.281 17.4316 219.607 19.4232 237.084 39.3565C254.56 59.2897 252.569 89.6163 232.636 107.093L196.543 138.737Z"
              fill="#FF7A02"
            />
            <path
              d="M4.72642 135.687C24.0949 153.788 54.4694 152.76 72.5698 133.391C90.6702 114.023 89.6422 83.6482 70.2738 65.5478L35.204 32.7741C15.8356 14.6737 -14.539 15.7017 -32.6394 35.0702C-50.7398 54.4386 -49.7118 84.8132 -30.3433 102.914L4.72642 135.687Z"
              fill="#FF7A02"
            />
          </svg>
        </div>
        <div className={styles.pacman}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 187 296"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M241.042 201.708C211.15 253.324 145.074 270.934 93.4585 241.042L147.584 147.583L54.1251 93.4584C84.0175 41.8427 150.093 24.2325 201.709 54.125C253.324 84.0174 270.934 150.093 241.042 201.708Z"
              fill="#0E20A2"
            />
          </svg>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Summary & Conclusion</h2>
          </div>
          <div className={styles.body}>
            <div className={styles.cardsWrap}>
              {conclusion.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.icon}>
                    {item.icon}
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            <p>
              This redesign proves how a research‑driven, hypothesis‑led UX
              approach can turn a pandemic revenue nosedive into sustainable
              growth, restoring the business while deepening parents’ emotional
              connection with their child authors.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section_8}>
        <Navigation previous={Routes.caseStudies.reducingTeacherWorkload} />
      </section>
    </>
  )
}
