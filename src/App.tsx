import { BrowserRouter } from "react-router-dom"
import { MukText } from "./lib/components/typography/MukText"
import { DemoRoutes } from "./demo/routes"


function App() {
  return (
    <BrowserRouter>
      <div className="muk-wrapper">
        <div className="muk-header">
           <MukText type='muk-heading' variant="primary" as='h1'>modular-ui-kit-react</MukText>
        </div>
        <main className="muk-content">
          <DemoRoutes/>
        </main>
       <div className="muk-footer"><MukText variant="primary">modular-ui-kit-react</MukText></div> 
      </div>
      
   </BrowserRouter>
  )
}

export default App
