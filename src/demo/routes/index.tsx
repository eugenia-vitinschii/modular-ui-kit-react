import { Routes, Route, Navigate } from "react-router-dom"

import TextView from "../pages/typography/TextView"
import ButtonView from "../pages/buttons/ButtonsView"
import IconButtonView from "../pages/buttons/IconButtonView"
import InputView from "../pages/form/InputView"
import CheckboxView from "../pages/form/CheckboxView"
import RadioView from "../pages/form/RadioView"
import SelectView from "../pages/form/SelectView"
import TextareaView from "../pages/form/TextareaView"
import ComponentFlowView from "../pages/feedback/ComponentFlowView"
import BadgesView from "../pages/data-display/BadgesView"



export const DemoRoutes = () => {
   return (
      <Routes>
         <Route path='/' element = {<Navigate to='/demo/ui/text' replace/>}/>
         <Route path='/demo/ui/text' element= {<TextView/>}/>
         <Route path="/demo/ui/buttons" element={<ButtonView/>}/>
         <Route path="/demo/ui/icon-buttons" element={<IconButtonView/>}/>
         <Route path="/demo/ui/form/inputs" element={<InputView/>}/>
         <Route path="/demo/ui/form/checkboxes" element={<CheckboxView/>}/>
         <Route path="/demo/ui/form/radio" element={<RadioView/>}/>
         <Route path="/demo/ui/form/selects" element={<SelectView/>}/>
         <Route path="/demo/ui/form/textareas" element={<TextareaView/>}/>
         <Route path="/demo/ui/flow" element={<ComponentFlowView/>}/>
         <Route path="demo/ui/badge" element= {<BadgesView/>}/>
      </Routes>
   )
}