/* Theming */
type Theme = {
  colors: 'background' | 'text' | 'primary' | 'secondary';
  fontFamilies: 'primary' | 'secondary';
  fontWeights: 'regular' | 'bold';
};

/* Components Props */
export type GlobalProps = React.PropsWithChildren<{}>;
export type LayoutProps = React.PropsWithChildren<{
  nav?: React.ReactNode | null;
  footer?: React.ReactNode | null;
}>;
export type TypographyProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  color?: Theme['colors'];
  family?: Theme['fontFamilies'];
  weight?: Theme['fontWeights'];
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: Theme['colors'];
  color?: Theme['colors'];
  family?: Theme['fontFamilies'];
  weight?: Theme['fontWeights'];
};
export type FieldProps = React.InputHTMLAttributes<HTMLInputElement>;
export type CardProps = React.LiHTMLAttributes<HTMLLIElement>;
export type BoxProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  tag?: 'div' | 'main' | 'article' | 'section' | 'aside';
};

/*
  FIXME: Add the correct component type
*/
export type SeoProps = {
  component: any;
  description?: string;
  ogDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  title: string;
};
