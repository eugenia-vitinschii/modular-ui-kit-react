import { Routes, Route, Navigate } from "react-router-dom"

import TextView from "../pages/typography/TextView"
import ButtonView from "../pages/buttons/ButtonsView"
import IconButtonView from "../pages/buttons/IconButtonView"
import InputView from "../pages/form/InputView"
import CheckboxView from "../pages/form/CheckboxView"

export const DemoRoutes = () => {
   return (
      <Routes>
         <Route path='/' element = {<Navigate to='/text' replace/>}/>
         <Route path='/text' element= {<TextView/>}/>
         <Route path="/buttons" element={<ButtonView/>}/>
         <Route path="/icon-buttons" element={<IconButtonView/>}/>
         <Route path="/input" element={<InputView/>}/>
         <Route path="/checkbox" element={<CheckboxView/>}/>
      </Routes>
   )
}