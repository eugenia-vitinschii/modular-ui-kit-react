import  type { HTMLAttributes, FC} from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { MukIconButton } from "../buttons/MukIconButton";
import { MukText } from "../typography/MukText";


export interface BreadcrumbItem {
   label: string;
   to: string;
}

export interface MukBreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
   items: BreadcrumbItem[]
}

export const MukBreadcrumbs: FC<MukBreadcrumbsProps> = ({
   items,
   className,
   ...rest
}) => {
   const location = useLocation();
   const navigate = useNavigate()

   if(location.pathname === '/' || items.length === 0){
      return null;
   }

   const containerClasses = ['muk-container', className].filter(Boolean).join(' ');

   return(
      <div className={containerClasses} {...rest}>
         <nav className="muk-breadcrumbs" aria-label="BreadCrumb"> 
            <ul className="muk-breadcrumbs__list">
               <MukIconButton
                  onClick={() => navigate(-1)}
                  aria-label="Go Back"
                  size="sm"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
               </MukIconButton>
               {items.map((crumb, index) =>{
                  const isLast = index === items.length - 1;
                  return (
                     <li className="muk-breadcrumbs__item" key={crumb.to}>
                        {isLast ? (
                           <MukText as="span">{crumb.label}</MukText>
                        ):(
                           <>
                           <Link to={crumb.to}><MukText as="span" align="center">{crumb.label}</MukText></Link>
                           <MukText className="muk-breadcrumbs__item-separator" as="span">/</MukText>
                           </>
                        )}
                     </li>
                  );
               })}
            </ul>
         </nav>
      </div>
   )
}