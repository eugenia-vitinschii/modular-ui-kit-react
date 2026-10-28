import { useState } from "react";
import { MukText } from "../../../lib/components/typography/MukText";
import { MukCheckbox } from "../../../lib/components/form/MukCheckbox";

function CheckboxView() {
   const [isChecked, setIsChecked] = useState(false)

   return(
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
           Checkbox Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
            <MukCheckbox label="I agree to terms and conditions" 
               value={isChecked}
               onChange={(val) => setIsChecked(val)}
               hint="You must agree before continuing."
            />
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default CheckboxView