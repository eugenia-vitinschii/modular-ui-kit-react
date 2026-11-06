import { useState } from "react";
import { MukText } from "../../../lib/components/typography/MukText";
import { MukCheckbox } from "../../../lib/components/form/MukCheckbox";

function CheckboxView() {
  const [baseValue, setBaseValue] = useState(false)
  const [hintValue, setHintValue] = useState(false)
  const [errorValue, setErrorValue] = useState(false)
  const [disabledUncheckedValue, setDisabledUncheckedValue] = useState(false)
  const [disabledCheckedValue, setDisabledCkeckedValue] = useState(true)


   return(
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">Checkbox Preview</MukText>
          <div className="muk-page__content">
            <div className="form muk-section">
              <div className="form-item">
                <MukCheckbox 
                  label="Remember me" 
                  value={hintValue}
                  onChange={(val) => setHintValue(val)}
                  hint="We promise to send only high-quality articles once a week."
              />
              </div>
               <div className="form-item">
                <MukCheckbox 
                  label="Subscribe to newsletter" 
                  value={baseValue}
                  onChange={(val) => setBaseValue(val)}
              />
              </div>
               <div className="form-item">
                <MukCheckbox 
                  label="I accept the Terms and Conditions"
                  error="This field is required"
                  value={errorValue}
                  onChange={(val) => setErrorValue(val)}  
              />
              </div>
               <div className="form-item">
                <MukCheckbox 
                  label="Unavailable option" 
                  value={disabledUncheckedValue}
                  onChange={(val) => setDisabledUncheckedValue(val)}
                  disabled
              />
              </div>
               <div className="form-item">
                <MukCheckbox 
                  label="Locked active option" 
                  value={disabledCheckedValue}
                  onChange={(val) => setDisabledCkeckedValue(val)}
                  disabled
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default CheckboxView