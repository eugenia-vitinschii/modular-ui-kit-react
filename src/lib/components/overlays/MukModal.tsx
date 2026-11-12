

import { FC, useEffect } from "react"
import type { UIVariant } from "../../types/ui.types"
import { createPortal } from "react-dom";
import { MukText } from "../typography/MukText";


export interface MukModalProps {
   open: boolean;
   onClose: () => void;
   title?: string;
   variant?: UIVariant;
   content?: React.ReactNode;
   actions?: React.ReactNode;
}

export const MukModal: FC<MukModalProps> = ({
   open,
   onClose,
   title,
   variant = 'secondary',
   content,
   actions,
}) => {

   useEffect(() => {
      if(!open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
         if (e.key === 'Escape') onClose();
      };

      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      return () => {
         document.removeEventListener("keydown", handleKeyDown);
         document.body.style.overflow = ""      
      };
   }, [open, onClose]);

   if(!open) return null;

   return createPortal(
      <div className="muk-modal-backdrop" onClick={onClose}>
         <div className={`muk-modal muk-modal--${variant}`} onClick={(e) => e.stopPropagation()}>
            {title && (
               <div className="muk-modal__header">
                  <MukText type='muk-subheading'>{title}</MukText>
               </div>
            )}
            <div className="muk-modal__content">{content}</div>
            {actions && ( <div className="muk-modal__footer">{actions}</div> )}
         </div>
      </div>,
      document.body
   );
}