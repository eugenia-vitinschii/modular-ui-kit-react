import{ type InputHTMLAttributes, type FC, useState, useId } from "react";

import type { UIInputType } from "../../types/ui.types";
import { MukIconButton } from "../buttons/MukIconButton";


export interface MukInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>{
   value?: string | number;
   onChange?: (value: string)=> void;
   label?: string;
   hint?: string;
   error?: string;
   showPasswordToggle?: boolean
   type?: UIInputType
}

export const MukInput: FC<MukInputProps> = ({
   type = 'text',
   value = "",
   onChange,
   label,
   error,
   hint,
   showPasswordToggle = true,
   disabled = false,
   placeholder,
   id: customId,
   className = "",
   ...props
})=> {
   const generateId = useId();
   const inputId = customId || generateId;

   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   const isPasswordInput = type === "password" && showPasswordToggle;
   const computedType = isPasswordInput ? (isPasswordVisible ? 'text' : "password") : type

   const containerClasses = ["muk-input", isPasswordInput ? "muk-input-password" : "", className].filter(Boolean).join(" ");

   const inputClasses = ["muk-input__field", error ? "is-error" : "",].filter(Boolean).join(" ");
   const toogglePasswordVisibility = () => {setIsPasswordVisible((prev) => !prev)};

   return(
      <div className={containerClasses}>
        {label && (<label htmlFor="inputId" className="muk-form-label muk-form-label--top">{label}</label>)}
      <div className="muk-input__wrapper">
      <input 
         id={inputId}
         type={computedType}
         value={value}
         disabled={disabled}
         placeholder={placeholder}
         className={inputClasses}
         onChange={(e) => onChange?.(e.target.value)}
         aria-invalid={!!error}
         aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
         }
         {...props}
      />
      {isPasswordInput &&  (    
      <MukIconButton 
         className="muk-input__button" 
         onClick={toogglePasswordVisibility}
         ariaLabel={isPasswordVisible ? 'Hide password' : "Show password"}
      >
         {isPasswordVisible ? (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="M403.5-423.5Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM480-200q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q141 0 257.5 76T912-520h-91q-52-93-143-146.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q20 0 40-2t40-6v81q-20 3-40 5t-40 2Zm0-120q22 0 42.5-5t38.5-14q5-50 31.5-90t67.5-64v-7q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm-5-180Zm205 380q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
            </svg>
         ) : (
         <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" />
            </svg>
         )}
      </MukIconButton>
      )}
      </div>
      {error ? (
          <p className="muk-form-error"  id={`${inputId}-error`}>{ error }</p>
      ): hint ? (
         <p className="muk-form-hint" id={`${inputId}-hint`}>{ hint }</p>
      ) : null}
      </div>
   );
}