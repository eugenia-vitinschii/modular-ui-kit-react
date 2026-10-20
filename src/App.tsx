import { MukText } from "./lib/components/typography/MukText"


function App() {
  return (
   <div>
    <MukText type='muk-heading' variant="primary" as='h1'>modular-ui-kit-react</MukText>
     <MukText type='muk-subheading' variant="primary" as='h2'>modular-ui-kit-react</MukText>
      <MukText  variant="secondary" variant="primary" as='p'>modular-ui-kit-react</MukText>
   </div>
  )
}

export default App
