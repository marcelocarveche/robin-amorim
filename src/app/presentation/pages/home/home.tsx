import {
  HandleCaseStudiesSection,
  HandleRecoveringPrePandemic,
  HeroSection,
  SkillsSection,
} from '@/app/presentation/components'
import { CaseStudiesSection } from './components/case-studies-section/case-studies-section'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <CaseStudiesSection />
    </>
  )
}

export default HomePage
