import { useState } from "react";

/* COMPONENTS */
import { MukText, MukInput  } from "../../../lib";

function InputView() {
  //state
  const [nameValue, setNameValue] = useState("");
  const [ emailValue, setEmailValue] = useState("");
  const [ passwordValue, setPasswordValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("");
  const [dateValue, setDateValue] = useState("")

  const emailError = !emailValue ? '' : emailValue.includes('@') ? '' : 'Invalid email address'
  
  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">Input Preview</MukText>
          <div className="muk-page__content">
            <div className="form muk-section">
               <div className="form-item">
                  <MukInput
                    label="*Name" placeholder="Enter your username..."
                    value={nameValue} onChange={(val) => setNameValue(val)}
                  />
               </div>
                <div className="form-item">
                  <MukInput
                    type="email" label="*Enter email" placeholder="example@email.com"
                    error={emailError}
                    value={emailValue} onChange={(val) => setEmailValue(val)}
                  />
               </div>
                <div className="form-item">
                  <MukInput
                    label="API Key" disabled 
                    value={disabledValue} onChange={(val) => setDisabledValue(val)}
                  />
               </div>
                <div className="form-item">
                  <MukInput
                    type="password" label="*Enter password" placeholder="Enter password..."
                    value={passwordValue} onChange={(val) => setPasswordValue(val)}
                  />
               </div>
               <div className="form-item">
                  <MukInput
                    type="date" label="Your birthday"
                    value={dateValue} onChange={(val) => setDateValue(val)}
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputView;
