/* Theming */
type Theme = {
  colors: 'background' | 'text' | 'primary' | 'secondary';
  fontTypes: 'primary' | 'secondary';
  fontWeights: 'regular' | 'bold';
};

/* Components Props */
export type GlobalProps = React.PropsWithChildren<{}>;
export type LayoutProps = React.PropsWithChildren<{
  nav?: React.ReactNode;
  footer?: React.ReactNode;
}>;
export type TypographyProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  color?: Theme['colors'];
  fontType?: Theme['fontTypes'];
  fontWeight?: Theme['fontWeights'];
  tagName?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: Theme['colors'];
  color?: Theme['colors'];
  fontType?: Theme['fontTypes'];
  fontWeight?: Theme['fontWeights'];
};
export type FieldProps = React.InputHTMLAttributes<HTMLInputElement>;
export type CardProps = React.LiHTMLAttributes<HTMLLIElement>;
export type WrapProps = React.HTMLAttributes<HTMLDivElement>;
export type SeoProps = {
  description?: string;
  ogDescription?: string;
  ogImage?: string;
  ogTitle?: string;
  title: string;
};
