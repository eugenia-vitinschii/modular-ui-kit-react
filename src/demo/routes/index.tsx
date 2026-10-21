import { Routes, Route, Navigate } from "react-router-dom"
import TextView from "../pages/typography/TextView"

export const DemoRoutes = () => {
   return (
      <Routes>
         <Route path='/' element = {<Navigate to='/text' replace/>}/>
         <Route path='/text' element= {<TextView/>}/>
      </Routes>
   )
}