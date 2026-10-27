import { useState } from "react";
import { MukText } from "../../../lib/components/typography/MukText";
import { MukInput } from "../../../lib/components/form/MukInput";

function InputView() {
  //state
  const [inputValue, setInputValue ] = useState("");
  const [ passwordValue, setPasswordValue] = useState("");

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
           Input Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
               <MukInput label="Email address" placeholder="Enter email" value={inputValue} 
               onChange={(val) => setInputValue(val)}
               hint="We'll never share your email."
               />
               <MukInput type="password" label="password" placeholder="Enter Password" value={passwordValue} 
                onChange={(val) => setPasswordValue(val)}
                error="PLease set ..."
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputView;
