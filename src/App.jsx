import { BrowserRouter } from "react-router-dom";
import SmartShop from "./pages/SmartShop";
import { LampContext, LampProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <LampProvider>
        <SmartShop />
      </LampProvider>
    </BrowserRouter>
  );
}

export default App;
