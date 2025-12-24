import Navigation from "./components/navigation/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewContent from "./pages/view_content/ViewContent";
import CreateContent from "./pages/create_content/CreateContent";
import Content from "./pages/content/Content";

export default function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <div className="main-cont">
          <Routes>
            <Route path="/" element={<ViewContent/>}/>
            <Route path="/create-content" element={<CreateContent/>}/>
            <Route path="/content/:id" element={<Content/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}