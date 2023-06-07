import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { GlobalProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <ProductList />
      </GlobalProvider>
    </div>
  );
}

export default App;
