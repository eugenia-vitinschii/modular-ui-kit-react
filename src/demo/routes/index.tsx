import { Routes, Route, Navigate } from "react-router-dom"
import TextView from "../pages/typography/TextView"
import ButtonView from "../pages/buttons/ButtonsView"

export const DemoRoutes = () => {
   return (
      <Routes>
         <Route path='/' element = {<Navigate to='/text' replace/>}/>
         <Route path='/text' element= {<TextView/>}/>
         <Route path="/buttons" element={<ButtonView/>}/>
      </Routes>
   )
}