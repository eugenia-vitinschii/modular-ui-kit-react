import { Routes, Route, Navigate } from "react-router-dom"

import TextView from "../pages/typography/TextView"
import ButtonView from "../pages/buttons/ButtonsView"
import IconButtonView from "../pages/buttons/IconButtonView"
import InputView from "../pages/form/InputView"
import CheckboxView from "../pages/form/CheckboxView"
import RadioView from "../pages/form/RadioView"
import SelectView from "../pages/form/SelectView"
import TextareaView from "../pages/form/TextareaView"



export const DemoRoutes = () => {
   return (
      <Routes>
         <Route path='/' element = {<Navigate to='/text' replace/>}/>
         <Route path='/text' element= {<TextView/>}/>
         <Route path="/buttons" element={<ButtonView/>}/>
         <Route path="/icon-buttons" element={<IconButtonView/>}/>
         <Route path="/input" element={<InputView/>}/>
         <Route path="/checkbox" element={<CheckboxView/>}/>
         <Route path="/radio" element={<RadioView/>}/>
         <Route path="/select" element={<SelectView/>}/>
          <Route path="/textarea" element={<TextareaView/>}/>
      </Routes>
   )
}