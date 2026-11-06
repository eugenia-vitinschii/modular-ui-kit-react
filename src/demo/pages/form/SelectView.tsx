import { useState } from "react";

import {
  MukSelect,
  MukText,
  type MukSelectOption,
} from "../../../lib";

const countries: MukSelectOption[] = [
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "germany", label: "Germany" },
  { value: "japan", label: "Japan" },
  { value: "canada", label: "Canada" },
];

const cities: MukSelectOption[] = [
  { value: "kyiv", label: "Kyiv" },
  { value: "lviv", label: "Lviv" },
];

const workModelOptions: MukSelectOption[] = [
  { value: "office", label: "In-office" },
  { value: "hybrid", label: "Hybrid" },
  { value: "remote", label: "Fully Remote" },
];

function SelectView() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [lockedWorkModel, setLockedWorkModel] = useState<string>("remote");

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Select Preview
          </MukText>
          <div className="muk-page__content">
            <div className="form muk-section">
              <div className="form__item">
                <MukSelect
                  label="Choose country"
                  placeholder="Select a country..."
                  value={selectedCountry}
                  onChange={(val) => setSelectedCountry(val)}
                  options={countries}
                  hint="Select your primary residence"
                />
              </div>
              <div className="form__item">
                <MukSelect
                  placeholder="Select sity..."
                  label="Your City"
                  error="Please select your city to continue"
                  value={selectedCity}
                  onChange={(val) => setSelectedCity(val)}
                  options={cities}
                />
              </div>
              <div className="form__item">
                <MukSelect
                  placeholder="Select sity..."
                  label="Preferred Work Model"
                  hint="Work model cannot be changed for this role."
                  disabled
                  value={lockedWorkModel}
                  onChange={(val) => setLockedWorkModel(val)}
                  options={workModelOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectView;
