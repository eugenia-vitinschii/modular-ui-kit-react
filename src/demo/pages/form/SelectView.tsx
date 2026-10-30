import { useState } from "react";

import { MukText } from "../../../lib/components/typography/MukText";
import { MukSelect, type MukSelectedOption } from "../../../lib/components/form/MukSelect";

const countryOptions: MukSelectedOption[] = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "de", label: "Germany" },
];

function SelectView() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Checkbox Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
              <MukSelect
               label="Choose country"
               placeholder="Select a country..."
               value={selectedCountry}
               onChange={(val) => setSelectedCountry(val)}
               options={countryOptions}
               hint="Select your primary residence"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectView;
