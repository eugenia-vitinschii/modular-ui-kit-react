import { Routes, Route, Navigate } from "react-router-dom"
import TextView from "../pages/typography/TextView"
import ButtonView from "../pages/buttons/ButtonsView"
import IconButtonView from "../pages/buttons/IconButtonView"

export const DemoRoutes = () => {
   return (
      <Routes>
         <Route path='/' element = {<Navigate to='/text' replace/>}/>
         <Route path='/text' element= {<TextView/>}/>
         <Route path="/buttons" element={<ButtonView/>}/>
         <Route path="/icon-buttons" element={<IconButtonView/>}/>
      </Routes>
   )
}