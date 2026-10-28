import {type  InputHTMLAttributes, type FC, useId} from "react";


export interface MukCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>{
   value?: boolean;
   onChange?: (value: boolean)=> void;
   label?: string;
   hint?: string;
   error?: string;
}

export const MukCheckbox: FC<MukCheckboxProps> = ({
   value = false,
   onChange,
   label,
   error,
   hint,
   disabled = false,
   id: customId,
   className = "", 
   ...props
}) => {
   const generateId = useId();
   const checkboxId = customId || generateId;

   const checkboxClasses = ["muk-checkbox", error ? "is-error" : "", disabled ? "is-disabled" : '', className].filter(Boolean).join(" ");
   return(
      <div className={checkboxClasses}>
         <label htmlFor={checkboxId} className="muk-checkbox__wrapper">
            <div className="muk-checkbox__data">
               <input type="checkbox" className="muk-checkbox__field" id={checkboxId} checked={value} disabled={disabled}
               onChange={(e) => onChange?.(e.target.checked)}
               aria-invalid={!!error}
               aria-describedby= {error ? `${checkboxId }-error` : hint ? `${checkboxId }-hint` : undefined}
               {...props}
               />
               <span className="muk-checkbox__box">
                  <span className="muk-checkbox__check">✓</span>
               </span>
               {label && (
                  <span className="muk-form-label muk-form-label--side"> { label }</span>
               )}
            </div>
         </label>
         <div className="muk-checkbox__info">
             {error ? (
          <p className="muk-form-error"  id={`${checkboxId}-error`}>{ error }</p>
      ): hint ? (
         <p className="muk-form-hint" id={`${checkboxId}-hint`}>{ hint }</p>
      ) : null}
         </div>
      </div>
   )
}