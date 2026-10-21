import { BrowserRouter } from "react-router-dom"
import { MukText } from "./lib/components/typography/MukText"
import { DemoRoutes } from "./demo/routes"


function App() {
  return (
    <BrowserRouter>
      <div className="muk-wrapper">
          <MukText type='muk-heading' variant="primary" as='h1'>modular-ui-kit-react</MukText>
        <main className="muk-content">
          <DemoRoutes/>
        </main>
      </div>
   </BrowserRouter>
  )
}

export default App
