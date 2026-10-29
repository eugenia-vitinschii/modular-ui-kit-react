import { useState } from "react";
import { MukText } from "../../../lib/components/typography/MukText";
import { MukRadio } from "../../../lib/components/form/MukRadio";


function RadioView() {
   const [selectedOption, setSelectedOption] = useState<string>("option1");

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Checkbox Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
              <MukRadio
               name="plan"
               label="Basic"
               value='option 1'
               selectedValue={selectedOption}
               onChange={(val) => setSelectedOption(val as string)}
              />
                 <MukRadio
               name="oro"
               label="Pro"
               value='option 2'
               selectedValue={selectedOption}
               onChange={(val) => setSelectedOption(val as string)}
              />
              <MukRadio
               name="business"
               label="Business"
               value='option 3'
               selectedValue={selectedOption}
               onChange={(val) => setSelectedOption(val as string)}
               disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioView;
