import {  useState } from "react";

import { MukText, MukTextarea  } from "../../../lib";

function TextareaView() {
  //state
  const [biographyValue, setBiographyValue] = useState("");
  const [commentValue, setCommentValue] = useState(
    "Please deliver the package between 6 PM and 8 PM. If I am not at home, please leave it with my neighbor from apartment 42. Also, make sure to call me 10 minutes before arrival. Thank you so much for your help!",
  );
  const [systemNotes, setSystemNotes] = useState(
    "CONTAINER_ID: 9f82b3c1\nSTATUS: Active\nLAST_DEPLOY: 2026-07-02 12:44:12\nREGION: eu-central-1\nNo manual overrides allowed.",
  );

  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Textarea Preview
          </MukText>
          <div className="muk-page__content">
            <div className="form muk-section">
              <div className="form__item">
                <MukTextarea
                  value={biographyValue}
                  onChange={(val) => setBiographyValue(val)}
                  placeholder="Tell us about yourself, your skills, and your professional background..."
                  label="Biography"
                />
              </div>
              <div className="form__item">
                <MukTextarea
                  value={commentValue}
                  onChange={(val) => setCommentValue(val)}
                  label="Order Comments"
                  placeholder="Add special instructions for delivery..."
                  error="Comment length cannot exceed 150 characters."
                />
              </div>
              <div className="form__item">
                <MukTextarea
                  value={systemNotes}
                  onChange={(val) => setSystemNotes(val)}
                  label="System Notes (Read Only)"
                  placeholder="No system notes available for this resource."
                  hint="This field is locked and managed by the administrator"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextareaView;
