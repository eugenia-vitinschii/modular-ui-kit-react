import { type FC} from 'react';
import { formatSize } from '../../utils/formatSize';
import { MukText } from '../typography/MukText';


export interface MukErrorStateProps {
   title?: string;
   description?: string;
   width?: string | number;
   height?: string | number;
   action?: React.ReactNode;
}

export const MukErrorSate: FC<MukErrorStateProps> = ({
   title = "Oops! Something went wrong",
   description = 'Failed to fetch data. Please try again.',
   height,
   width,
   action,

}) => {

   const computedStyle: React.CSSProperties = {
       width: formatSize(width),
       height: formatSize(height)
   }
   return (
      <div className="muk-error-state" style={computedStyle}>
         <div className="muk-error-state__text">
            <MukText as='h3' type="muk-subheading" align='center' variant='danger'>{title}</MukText>
            <MukText align='center'>{description}</MukText>
         </div>
         {action && (
            <div className="muk-error-state__actions">
               {action}
            </div>
         )}
      </div>
   )
}
