import { MukText } from "../../../lib";

import { MukEmptyState } from "../../../lib/components/feedback/MukEmptyState";
import { MukErrorState } from "../../../lib/components/feedback/MukErrorState";
import { MukSkeleton } from "../../../lib/components/feedback/MukSkeleton";

function ComponentFlowView(){
   return(
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrapper">
               <div className="muk-page__header">
                  <MukText as="h2" type="muk-heading">Component Flow Preview</MukText>
               </div>
               <div className="muk-page__content">
                  <div className="demo-controls muk-section">
                     <MukText as='h3' type='muk-subheading'>Demo Controls</MukText>
                  </div>
                  <div className="muk-section">
                     <MukEmptyState
                        variant='primary'  
                     />
                  </div>
                  <div className="muk-section">
                     <MukErrorState/>
                  </div>
                  <div className="muk-section">
                     <MukSkeleton height="400px" type="circle"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ComponentFlowView