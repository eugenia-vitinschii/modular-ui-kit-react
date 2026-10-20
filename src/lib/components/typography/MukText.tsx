import type {FC, ElementType, HTMLAttributes, ReactNode} from 'react'
import type { UITextAlign, UITextType, UITextVariant } from '../../types/ui.types'

export interface MukTextProps extends HTMLAttributes<HTMLElement>{
   variant?: UITextVariant;
   as?: ElementType;
   type?: UITextType;
   align?: UITextAlign;
   children?: ReactNode;
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