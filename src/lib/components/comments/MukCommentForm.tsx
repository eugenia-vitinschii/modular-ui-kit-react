import React, { useState, type FC } from "react";

import { MukTextarea } from "../form/MukTextarea";
import { MukIconButton } from "../buttons/MukIconButton";

export interface MukCommentFormProps {
   avatarSrc?: string;
   avatar?: React.ReactNode;
   placeholder?: string;
   disabled?: boolean;
   loading?: boolean;
   resetOnSubmit?: boolean;
   onSubmit?: (payload: { content: string}) => void;
}

export const MukCommentForm: FC<MukCommentFormProps> = ({
   placeholder = 'Type ...',
   disabled = false,
   loading = false,
   resetOnSubmit = true,
   avatarSrc,
   avatar,
   onSubmit,
}) => {

   const [content, setContent] = useState('');
   const isValid = content.trim().length > 0;

   const handleSubmit = (e?: React.FormEvent) =>{
      e?.preventDefault();

      if (!isValid || disabled ||loading) return;

      const textToSend = content.trim()
      onSubmit?.({ content: textToSend});

      if (resetOnSubmit) {
         setContent('')
      }
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
         e.preventDefault();
         handleSubmit();
      }  
   }

   return (
      <form  className="muk-comment-form muk-section__item" onSubmit={handleSubmit}>
         <div className="muk-comment-form__avatar">
            {avatar ? (avatar) : avatarSrc ? (
               <img src={avatarSrc} alt="User Avatar"/>
            ) : (
               <svg  className="muk-comment-avatar-placeholder" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 -960 960 960">
               <path
                  d="M324.5-404.5Q310-419 310-440t14.5-35.5Q339-490 360-490t35.5 14.5Q410-461 410-440t-14.5 35.5Q381-390 360-390t-35.5-14.5Zm240 0Q550-419 550-440t14.5-35.5Q579-490 600-490t35.5 14.5Q650-461 650-440t-14.5 35.5Q621-390 600-390t-35.5-14.5ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z" />
            </svg>
            )}
         </div>
         <div className="muk-comment-form__content">
            <div className="muk-comment-form__content--field">
               <MukTextarea
                  placeholder={placeholder} disabled={disabled || loading}
                  value={content}
                  onChange={(val) => setContent(val)}
                  onKeyDown={handleKeyDown}
               />
            </div>
            <MukIconButton size="sm" type="submit" disabled={!isValid || disabled || loading} loading ={loading }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
            </svg>
            </MukIconButton>
         </div>
      </form>
    
   )
}
