import { useState } from "react";
import { MukText } from "../../../lib/components/typography/MukText";
import { MukTextarea } from "../../../lib/components/form/MukTextarea";

function TextareaView() {
  //state
  const [textareaValue, setTextareaValue ] = useState("");


  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
           Textarea Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
               <MukTextarea
                  value={textareaValue} 
                  onChange={(val) => setTextareaValue(val)}
                  label="Order Comments"
                  placeholder="Add special instructions for delivery..."
                  error="Comment length cannot exceed 150 characters."
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextareaView;