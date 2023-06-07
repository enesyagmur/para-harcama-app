import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { GlobalProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <ProductList />
        <Basket />
      </GlobalProvider>
    </div>
  );
}

export default App;
