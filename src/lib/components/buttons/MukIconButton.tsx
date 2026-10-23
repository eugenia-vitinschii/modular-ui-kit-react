import type {  ButtonHTMLAttributes, FC, ReactNode } from "react";
import type { UIButtonType, UIButtonVariant, UISize } from "../../types/ui.types";

export interface MukIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   ariaLabel?: string | number;
   variant?: UIButtonVariant;
   size?: UISize;
   type?: UIButtonType;
   loading?: boolean;
   disabled?: boolean;
   children?: ReactNode;
   text?: ReactNode;
}


export const MukIconButton: FC<MukIconButtonProps> = ({
   variant = "primary",
   type = "button",
   size = "lg",
   loading = false,
   disabled = false,
   className = '',
   ariaLabel,
   text,
   children,
   ...props
}) => {
   const buttonClasses =[
      "muk-btn-icon",
      `muk-btn-icon--${variant}`,
      `muk-btn-icon--${size}`,
      loading ? "isLoading" : '',
      text ? 'has-text' : '',
      className,
   ].filter(Boolean).join(' ');
   return(
      <button 
         type={type}
         className={buttonClasses} 
         disabled={disabled || loading}
         aria-busy={loading}
         artia-label={ariaLabel ? String(ariaLabel): undefined}
         {...props}
         >
         {!loading ? (
          <span className="muk-btn-icon__content">
            {children}
            {text}
           </span>
         ):(
            <>
            <span className="muk-btn-spinner" aria-hidden="true"></span>
            <span className="visually-hidden">Loading</span>
            </>
         )} 
      </button>
   );
}
