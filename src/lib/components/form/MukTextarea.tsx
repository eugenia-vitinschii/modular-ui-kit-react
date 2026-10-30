import  {type TextareaHTMLAttributes, type FC,useId } from "react";


export interface MukTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>{
      value?: string | number;
      onChange?: (value: string)=> void;
      label?: string;
      hint?: string;
      error?: string;
      rows?: number
}

export const MukTextarea: FC<MukTextareaProps> = ({
   value = "",
   onChange,
   label,
   error,
   hint,
   rows = 6,
   disabled = false,
   placeholder,
   id: customId,
   className = "",
   ...props
})=> {
      const generateId = useId();
      const textareaId = customId || generateId
   
      const textareaClasses = ["muk-textarea", error ? "is-error" : '', disabled ? "is-disabled" : "", className].filter(Boolean).join(" ");
   return (
      <div className={textareaClasses}>
         {label && (
            <label htmlFor={textareaId} className="muk-form-label muk-form-label--top">{label}</label>
         )}
         <textarea className="muk-textarea__field" id={textareaId}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder} rows={rows} disabled={disabled} 
            aria-invalid={!!error}
            aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
            {...props}
         />
           {error ? ( <p className="muk-form-error"  id={`${textareaId}-error`}>{ error }</p>
               ): hint ? (
               <p className="muk-form-hint" id={`${textareaId}-hint`}>{ hint }</p>
            ): null}
      </div>
   )
}