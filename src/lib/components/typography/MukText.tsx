import type {FC, HTMLAttributes} from 'react'
import type { UITextAlign, UITextType, UITextVariant } from '../../types/ui.types'

export interface MukTextProps extends HTMLAttributes<HTMLElement>{
   variant?: UITextVariant;
   as?: React.ElementType;
   type?: UITextType;
   align?: UITextAlign;
   children?: React.ReactNode;
   [key: string]: any;
}

export const MukText: FC<MukTextProps> = ({
   variant = 'secondary',
   align = 'left',
   as: Component = 'p',
   type = 'muk-body-text',
   children,
   className = '',
   ...props
}) => {
   const textClasses = [
      type,
      `muk-txt--${align}`,
      `muk-txt--${variant}`,
      className,
   ].filter(Boolean).join(' ');
   return(
      <Component className={textClasses} {...props}>{children}</Component>
   )
}