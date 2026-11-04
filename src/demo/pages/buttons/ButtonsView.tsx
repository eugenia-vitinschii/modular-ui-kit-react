/* COMPONENTS */
import { MukRadio, MukButton, MukText  } from "../../../lib";

/* TYPES */
import { type UIButtonVariant, type UISize } from "../../../lib";

import { useState } from "react";

type DemoState = 'normal' | 'loading' | 'disabled'

/* variants */
const variants: UIButtonVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
   'ghost'
]
/* sizes */
const sizes: UISize[] = ['sm', 'md', 'lg']

function ButtonView() {
   /* STATE */
   const [buttonState, setButtonState] = useState<DemoState>('normal')
  return (
    <div className="muk-page">
      <div className="muk-container">
        <div className="muk-page__wrapper">
          <MukText as="h2" type="muk-heading">
            Buttons Preview
          </MukText>
          <div className="muk-page__content">
            <div className="demo-controls muk-section">
               <MukText type="muk-subheading">Demo controls</MukText>
               <MukRadio name='buttons-demo'selectedValue={buttonState}
               onChange={(val) => setButtonState(val as DemoState)} value='normal' label="Normal"/>
               <MukRadio name='buttons-demo'selectedValue={buttonState}
               onChange={(val) => setButtonState(val as DemoState)} value='loading' label="Loading"/>
               <MukRadio name='buttons-demo'selectedValue={buttonState}
               onChange={(val) => setButtonState(val as DemoState)} value='disabled' label="Disabled"/>
            </div>
            <div className="muk-section">
              <div className="buttons-grid">
                  {variants.map((variant)=>(
                     <div className="button-card" key={variant}>
                        <div className="button-card__header">
                           <MukText>{variant}</MukText>
                        </div>
                        <div className="button-card__sizes">
                           {sizes.map((size) => (
                              <div className="button-card-row" key={size}>
                                 <MukText>{size}</MukText>
                                 <MukButton variant={variant}
                                    size={size}
                                    loading={buttonState === 'loading'}
                                    disabled={buttonState === 'disabled'}
                                 >
                                    {variant}
                                 </MukButton>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonView;
