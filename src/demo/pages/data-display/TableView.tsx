
import { MukText, MukRadio} from "../../../lib"
import { DemoTable, type  ActionsLayoutType  } from "../../components/DemoTable"
import { useState} from "react"



const ACTIONS_LAYOUT_OPTIONS: ActionsLayoutType[] = ["row", 'column'];

function TableView() {
   const [selectedActionsLayout, setSelectedActionsLayout] = useState<ActionsLayoutType>("column")

   return (
      <div className="muk-page">
         <div className="muk-container">
            <div className="muk-page__wrapper">
               <div className="muk-page__header">
                  <MukText>Table Preview</MukText>
               </div>
               <div className="muk-page__content">
                  <div className="demo-controls muk-section">
                     <MukText type="muk-subheading">Demo Controls</MukText>
                     <MukText>Variants</MukText>
                     <div className="demo-controls--row">
                        {ACTIONS_LAYOUT_OPTIONS.map((variant) => (
                           <MukRadio
                              key={variant}
                              name="layout-variant"
                              value={variant}
                              label={variant}
                              checked={selectedActionsLayout === variant}
                              onChange={() => setSelectedActionsLayout(variant)}
                           />
                        ))}
                     </div>
                  </div>
                  <div className="muk-section">
                     <DemoTable
                        actionsType={selectedActionsLayout}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TableView