/* COMPONENTS */
import { MukText } from "../../../lib/components/typography/MukText"
import { MukButton } from "../../../lib/components/buttons/MukButton"

function ButtonView(){
   return(
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrapper">
                <MukText as="h2" type="muk-heading">Button Preview</MukText>
            
            <div className="muk-page__content">
               <div className="demo-controls muk-section">
                  <MukButton size="sm">test</MukButton>
                  <br />
                   <MukButton size="md" variant="danger">test</MukButton>
               </div>
            </div>
            </div>
         </div>
      </div>
   )
}

export default ButtonView