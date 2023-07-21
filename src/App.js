import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/Itemdetail/ItemDetailContainer";
import Navbar from "./components/Navbar";
import ItemlistContainer from "./components/Itemliscontainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemlistContainer />} />
          <Route path="/category/:categoryId" element={<ItemlistContainer />} />
          <Route path="item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      </div>
      );
}
export default App
