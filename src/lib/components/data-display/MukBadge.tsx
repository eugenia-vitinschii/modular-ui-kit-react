import { type FC } from "react"
import type { UITextVariant, UISize } from "../../types/ui.types"
import { MukText } from "../typography/MukText"

export interface MukBadgeProps{
   variant?: UITextVariant
   size?: UISize
   text?: React.ReactNode
   icon?: React.ReactNode
}


export const MukBadge: FC<MukBadgeProps> = ({
   variant = "primary",
   size = "md",
   text,
   icon,
}) => {

   const badgeClass = ["muk-badge", `muk-badge--${variant}`, `muk-badge--${size}`].filter(Boolean).join(" ");

   return (
      <div className={badgeClass}>
         {icon && (
            <div className="muk-badge__icon">
               {icon}
            </div>
         )}
         {text && (
            <div className="muk-badge__text">
               <MukText type='muk-none' variant={variant}>{text}</MukText>
            </div>
         )}
      </div>
   )
}