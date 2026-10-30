import { type FC, useId, type SelectHTMLAttributes } from "react";

export interface MukSelectedOption {
   value: string | number;
   label: string;
}

export interface MukSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | "value">{
   value:  string | number;
   onChange?: (value: string) => void;
   options: MukSelectedOption[];
   label?: string;
   hint?: string;
   error?: string;
   placeholder?: string;
}


export const MukSelect: FC<MukSelectProps> = ({
   onChange,
   value,
   options = [],
   label,
   error,
   hint,
   name,
   placeholder,
   disabled = false,
   id: customId,
   className = "",
   ...props
}) => {
   const generateId = useId();
   const selectId = customId || generateId

   const selectClasses = ["muk-select", error ? "is-error" : '', disabled ? "is-disabled" : "", className].filter(Boolean).join(" ");

   return (
      <div className={selectClasses}>
        {label && (<label htmlFor={selectId} className="muk-form-label muk-form-label--top">{label}</label>)} 
        <div className="muk-select__wrapper">
         <select className="muk-select__field" name={name} id={selectId} disabled={disabled}
            value={value ?? ''}
            onChange={(e) => onChange?.(e.target.value)}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
            {...props}
         >
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
            {placeholder && (<option disabled>{placeholder}</option>)}

      </select>
      <span className="muk-select__icon">↓</span>
        </div>
      </div>
   )

}