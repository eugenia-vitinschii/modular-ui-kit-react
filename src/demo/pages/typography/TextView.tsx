/* COMPONENTS */
import { MukText } from "../../../lib/components/typography/MukText"

function TextView(){
   return(
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrapper">
                <MukText as="h1" type="muk-heading">Text Preview</MukText>
            </div>
            <div className="muk-page__content">
               <div className="demo-controls muk-section"></div>
            </div>
         </div>
      </div>
   )
}

export default TextView