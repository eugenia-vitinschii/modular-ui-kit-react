import { BrowserRouter } from "react-router-dom"
import { DemoRoutes } from "./demo/routes"
import {AppHeader} from "./demo/components/AppHeader"
import { AppFooter } from "./demo/components/AppFooter"
import { DemoWidget } from "./demo/components/DemoWidget"


function App() {
  return (
    <BrowserRouter>
      <div className="muk-wrapper">
        <AppHeader/>
        <main className="muk-content">
          <DemoRoutes/>
          <DemoWidget/>
        </main>
       <AppFooter/>
      </div>

   </BrowserRouter>
  )
}

export default App
