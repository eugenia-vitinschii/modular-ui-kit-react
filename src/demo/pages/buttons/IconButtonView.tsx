/* COMPONENTS */
import { MukRadio, MukIconButton, MukText, MukInput  } from "../../../lib";

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

function IconButtonView() {
   /* STATE */
   const [buttonState, setButtonState] = useState<DemoState>('normal')
   const [demoText, setDemoText] = useState('Open folder');
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
               <MukInput 
                  value={demoText}
                  onChange={(val) => setDemoText(val)}
                  label="Custom text Preview"
                  placeholder="Type something..."
                />
                <br />
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
                                 <MukIconButton variant={variant}
                                    size={size}
                                    loading={buttonState === 'loading'}
                                    disabled={buttonState === 'disabled'}
                                    text={demoText}
                                    
                                 >
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,20q-0.82,0-1.41-0.59T2,18V8Q2,7.18 2.59,6.59T4,6h6l2-2h8q0.83,0 1.41,0.59Q22,5.18 22,6V18q0,0.82-0.59,1.41T20,20H4Zm1.83-7H11V7.82L5.83,13ZM4,12L8,8H4v4Zm0,3v3H20V6H13v7q0,0.82-0.59,1.41T11,15H4Zm7-4Z"/></svg>
                                 </MukIconButton>
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

export default IconButtonView;
