import {type HTMLAttributes, type FC } from "react";
import { MukText } from "../../lib";
import { MukButton } from "../../lib";


export interface MukErrorPageStateProps extends HTMLAttributes<HTMLDivElement>{
   title: string;
   code: string | number;
   description: string;
   buttonText?: string;
   onAction?: () => void;
}


export const MukErrorPageState: FC<MukErrorPageStateProps> =({
   code,
   title,
   description,
   buttonText,
   onAction,
   className,
   ...rest
}) => {
   const containerClasses = ['muk-error-page', className].filter(Boolean).join(' ');

   return (
      <div className={containerClasses} {...rest}>
         <div className="muk-error-page__content">
            <MukText align="center" type="muk-heading">{code}</MukText>
            <MukText align="center" type="muk-subheading">{title}</MukText>
            <MukText align="center">{description}</MukText>
         </div>
         {buttonText && (
            <div className="muk-error-page__actions">
               <MukButton onClick={onAction} variant="success">{buttonText}</MukButton>
            </div>
         )}
      </div>
   )
}