import "./App.css";
import ListProducts from "./Components/ListProducts";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <>
      <ListProducts />
    </>
  );
}

export default App;
