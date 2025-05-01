type CSSModuleClasses = { [className: string]: string }

declare module '*.module.scss' {
  const classes: CSSModuleClasses
  export const content: { [className: string]: string }
  export default classes
}
