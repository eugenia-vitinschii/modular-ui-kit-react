import { type InputHTMLAttributes, type FC, useId } from "react";


export interface MukRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | "value">{
   value: boolean | string | number;
   selectedValue?: boolean | string | number | null;
   onChange?: (value: boolean | string | number | null) => void;
   label?: string;
   hint?: string;
   error?: string;
}

export const MukRadio: FC<MukRadioProps> = ({
   onChange,
   value,
   selectedValue,
   label,
   error,
   hint,
   name,
   disabled = false,
   id: customId,
   className = "",
   ...props
}) => {
   const generateId = useId();
   const radioId = customId || generateId

   const isChecked = selectedValue !== undefined ? selectedValue === value : props.checked;

   const radioClasses = ["muk-radio", error ? "is-error" : '', disabled ? "is-disabled" : "", className].filter(Boolean).join(" ");

   return (
      <div className={radioClasses}>
         <label htmlFor={radioId} className="muk-radio__wrapper">
             <div className="muk-radio__data">
               <input type="radio" className="muk-radio__field" name={name} 
                  id={radioId} checked={isChecked} disabled={disabled} 
                  onChange={() => onChange?.(value)}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${radioId}-error` : hint ? `${radioId}-hint` : undefined}
                  {...props}
               />
               <span className="muk-radio__box">
                  <span className="muk-radio__circle" aria-hidden="true"></span>
               </span>
               {label && (
                  <span className="muk-form-label muk-form-label--side">{label}</span>
               )}
             </div>
         </label>
         <div className="muk-radio__info">
             {error ? ( <p className="muk-form-error"  id={`${radioId}-error`}>{ error }</p>
               ): hint ? (
               <p className="muk-form-hint" id={`${radioId}-hint`}>{ hint }</p>
            ): null}
         </div>
      </div>
   )
}