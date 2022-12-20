/* Theming */
type Theme = {
  colors: 'background' | 'text' | 'primary' | 'secondary' | 'transparent'
  fontFamilies: 'primary' | 'secondary'
  fontWeights: 'regular' | 'bold'
}

/* Components Props */
export type LayoutProps = React.PropsWithChildren<
  {
    nav?: React.ReactNode | null
    footer?: React.ReactNode | null
  } & BoxProps
>
export type TextProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  color?: Theme['colors']
  family?: Theme['fontFamilies']
  weight?: Theme['fontWeights']
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: Theme['colors']
  color?: Theme['colors']
  family?: Theme['fontFamilies']
  weight?: Theme['fontWeights']
}
export type FieldProps = React.InputHTMLAttributes<HTMLInputElement>
export type CardProps = BoxProps
export type BoxProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  background?: Theme['colors']
  color?: Theme['colors']
  tag?:
    | 'div'
    | 'main'
    | 'article'
    | 'section'
    | 'aside'
    | 'nav'
    | 'footer'
    | 'li'
}

export type TextFieldProps = React.PropsWithChildren<{
  tag?: 'input' | 'textarea'
  testId?: string
}> &
  React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

/*
  FIXME: Add the correct component type
*/
export type SeoProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any
  description?: string
  ogDescription?: string
  ogImage?: string
  ogTitle?: string
  title: string
}
