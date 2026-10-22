import type {  ButtonHTMLAttributes, FC } from "react";
import type { UIButtonType, UIButtonVariant, UISize } from "../../types/ui.types";

export interface MukButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   variant?: UIButtonVariant;
   size?: UISize;
   type?: UIButtonType;
   loading?: boolean;
   disabled?: boolean;
}


export const MukButton: FC<MukButtonProps> = ({
   variant = "primary",
   type = "button",
   size = "lg",
   loading = false,
   disabled = false,
   className = '',
   children,
   ...props
}) => {
   const buttonClasses =[
      "muk-btn",
      `muk-btn--${variant}`,
      `muk-btn--${size}`,
      loading ? "isLoading" : '',
      className,
   ].filter(Boolean).join(' ');
   return(
      <button 
         type={type}
         className={buttonClasses} 
         disabled={disabled || loading}
         aria-busy={loading}
         {...props}>
         {!loading ? (
          <span className="muk-btn__content">{children}</span>
         ):(
            <>
            <span className="muk-btn-spinner" aria-hidden="true"></span>
            <span className="visually-hidden">Loading</span>
            </>
         )} 
      </button>
   );
}
