import  { FC, HTMLAttributes, useMemo } from "react";
import { MukIconButton } from "../buttons/MukIconButton";
import { MukText } from "../typography/MukText";

export interface MukPaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>{
   page: number;
   totalPages: number;
   onChange?: (page: number) => void;
}

export const MukPagination: FC<MukPaginationProps> = ({
   page,
   totalPages,
   onChange,
   className,
   ...rest
}) => {
   const pages = useMemo(() => {
      const pageSize = 5;
      const startPage = Math.floor((page - 1) / pageSize + 1);
      const endPage = Math.min(totalPages, startPage + pageSize -1)

      const range: (number | string)[] = [];
   if (startPage > 1) {  
      range.push(1)
      if (startPage > 2) {
         range.push('...')
      }
   }

   for (let i = startPage; i <= endPage; i++) {
      range.push(i)  
   }

   if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
         range.push('...')
      }
      range.push(totalPages)
   }
   return range

   }, [page, totalPages])

   const paginationClasses = ['muk-pagination', className].filter(Boolean).join('')
   return (
      <div className={paginationClasses} {...rest}>
         <MukIconButton
            disabled={ page <= 1}
            onClick={() => onChange?.(page -1 )}
            aria-label="Previous page"
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
         </svg>
         </MukIconButton>
         <div className="muk-pagination__desktop">
            { pages.map((item, index) => {
               const isEllipsis = item === '...';
               const isActive = item === page;

               return (
                  <MukIconButton
                     key= {typeof item === 'number' ? item : `ellipsis-${index}`}
                     disabled={isEllipsis}
                     className= {isActive ? 'is-active' : undefined}
                     onClick={() => {
                        if(typeof item === 'number'){
                           onChange?.(item)
                        }
                     }}
                     text={
                        <MukText>{item}</MukText>
                     }
                  />
               );
            })}
         </div>
         <div className="muk-pagination__mobile">
            <MukText>{page} / {totalPages}</MukText>
         </div>
         <MukIconButton
            disabled ={ page >= totalPages}
            onClick={() => onChange?.(page +1 )}
            aria-label="Next Page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
         </svg>
            </MukIconButton>
      </div>
   )
}


