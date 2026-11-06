import { useState } from "react";
import { MukText } from "../../../lib/components/typography/MukText";
import { MukRadio } from "../../../lib/components/form/MukRadio";

function RadioView() {
  const [selectedPlan, setSelectedPlan] = useState<string>("starter");
  const [errorPlan, setErrorPlan] = useState<string | null>(null);
  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Radio Preview
          </MukText>
          <div className="muk-page__content">
            <div className="form muk-section">
              <div className="form__item">
                <MukRadio
                  value="starter"
                  name="billing-group"
                  label="Starter Plan"
                  selectedValue={selectedPlan}
                  onChange={(val) => setSelectedPlan(val as string)}
                />
              </div>
              <div className="form__item">
                <MukRadio
                  value="pro"
                  name="billing-group"
                  label="Pro Business"
                  hint="$19/month, unlimited projects & team sharing"
                  selectedValue={selectedPlan}
                  onChange={(val) => setSelectedPlan(val as string)}
                />
              </div>
              <div className="form__item">
                <MukRadio
                  value="enterprise"
                  name="billing-group"
                  label="Enterprise"
                  hint="Custom solutions for large organizations"
                  selectedValue={selectedPlan}
                  onChange={(val) => setSelectedPlan(val as string)}
                  disabled
                />
              </div>
              <div className="form__item">
                <MukRadio
                  name="error-group"
                  label="Accept terms & privacy policy"
                  error="You must accept the terms before changing your plan"
                  value="declined"
                  selectedValue={errorPlan ?? undefined}
                  onChange={(val) => setErrorPlan(val as string)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioView;
