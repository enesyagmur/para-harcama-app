import "./App.css";
import Header from "./components/Header";
import { GlobalProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
      </GlobalProvider>
    </div>
  );
}

export default App;
