import React, { type FC } from "react";

import type { UISkeletonType } from "../../types/ui.types";

export interface MukSkeletonProps{
   type?: UISkeletonType;
   width?: string | number
   height?: string | number
   shimmer?: boolean
}

export const MukSkeleton: FC<MukSkeletonProps> = ({
   type = "text",
   shimmer =  true,
   height,
   width,
}) =>{

   const computedStyle: React.CSSProperties = React.useMemo(() => {
      const sizes: Record<string, string> = {}

      if (width !== undefined && width !== '') {
         const widthValue = typeof width === 'number' ? `${width}px` : width;
         sizes.width = widthValue

         if( type === 'circle' && !height){
            sizes.height = widthValue;
         }
      }

      if (height !== undefined && height !== ''){
         const heightValue = typeof height === 'number' ? `${height}px` : height;
         sizes.height = heightValue

         if (type === 'circle' && !width){
            sizes.width = heightValue
         }
      }
      return sizes
   }, [width, height, type])

   const skeletonClasses = ["muk-skeleton",`muk-skeleton__${type}`, shimmer ? "muk-shimmer" : ""].filter(Boolean).join(" ");

   return (
      <div className={skeletonClasses} style={computedStyle}></div>
   )
}