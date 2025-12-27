import Navigation from "./components/navigation/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewContent from "./pages/view_content/ViewContent";
import CreateContent from "./pages/create_content/CreateContent";
import Content from "./pages/content/Content";
import Authentication from "./pages/auth/Authentication";

export default function App() {
  const isLoggedIn = false;
  return (
    <>
      <Router>
        <Navigation/>
        <div className="main-cont">
          <Routes>

              <Route path="/" element={<ViewContent/>}/>
              {
                isLoggedIn && 
                <Route path="/create-content" element={<CreateContent/>}/>
              }
              <Route path="/content/:id" element={<Content/>}/>
              {
                !isLoggedIn && <Route path="/auth" element={<Authentication/>}/>
              }
          </Routes>
        </div>
      </Router>
    </>
  );
}