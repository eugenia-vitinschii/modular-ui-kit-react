/* REACT */
import { useState } from "react"

/* COMPONENTS */
import { MukText } from "../../../lib/components/typography/MukText"
import { MukInput } from "../../../lib/components/form/MukInput"
import { MukRadio } from "../../../lib/components/form/MukRadio"

/* TYPES */
import { type UITextVariant, type UITextAlign} from "../../../lib"

/* OPTIONS */
const variantOptions: UITextVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
   'muted'
]
const alignOptions: UITextAlign[] = ['left', 'center', 'right']

function TextView(){
   /* STATE */
   const [demoText, setDemoText] = useState('The quick brown fox jumps over the lazy dog');
   const [selectedVariant, setSelectedVariant] = useState<UITextVariant>('secondary');
   const [selectedAlign, setSelectedAlign] = useState<UITextAlign>('left');

   return(
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrapper">
               <MukText as="h2" type="muk-heading">Text Preview</MukText>
            <div className="muk-page__content">
               <div className="demo-controls muk-section">
                  <MukText type="muk-subheading">Demo controls</MukText>
                  <MukText variant="primary">Text:</MukText>
                  <MukInput 
                     value={demoText}
                     onChange={(val) => setDemoText(val)}
                     label="Custom text Preview"
                     placeholder="Type something..."
                  />
                  <MukText variant="primary">Variants:</MukText>
                  <div className="demo-controls--row">
                     {variantOptions.map((variant) => (
                        <MukRadio
                           key={variant}
                           name="text-variant"
                           value={variant}
                           label={variant}
                           checked = {selectedVariant === variant}
                           onChange= {() => setSelectedVariant(variant)}
                        />
                     ))}
                  </div>
                  <MukText variant="primary">Alignment:</MukText>
                  <div className="demo-controls--row">
                     {alignOptions.map((align) => (
                        <MukRadio
                           key={align}
                           name="text-align"
                           value={align}
                           label={align}
                           checked = {selectedAlign === align}
                           onChange= {() => setSelectedAlign(align)}
                        />
                     ))} 
                  </div>
               </div>
               <div className="demo-controls muk-section">
                  <MukText variant="primary">Types:</MukText>
                  <MukText as='h3' type='muk-heading' variant={selectedVariant} align={selectedAlign}>
                    muk-heading: {demoText}
                  </MukText>
                  <MukText type='muk-subheading' variant={selectedVariant} align={selectedAlign}>
                     muk-subheading: {demoText}
                  </MukText>
                  <MukText variant={selectedVariant} align={selectedAlign}>
                    muk-body-text: {demoText}
                  </MukText>
                  <MukText type='muk-caption' variant={selectedVariant} align={selectedAlign}>
                   muk-caption:  {demoText}
                  </MukText>
                  <MukText type='muk-none' variant={selectedVariant} align={selectedAlign}>
                   muk-none:  {demoText}
                  </MukText>
               </div>
               <div className="demo-controls muk-section">
                  <MukText as='h4' type='muk-heading'>
                     Custom Tags & Links (`as` prop)
                  </MukText>
                   <MukText as="a" href="#" type='muk-subheading'>
                     This is a Subheading rendered as a link (a tag)
                  </MukText>
                  <MukText>Rendered as default paragraph</MukText>
               </div>
            </div>
            </div>
         </div>
      </div>
   )
}

export default TextView