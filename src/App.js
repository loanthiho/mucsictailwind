import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Artists,Browse,Browser, Chart,Header, Home, Layout,LayoutSidebar } from "./router";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
           <Route
            path="/browser"
            element={
              <Layout>
                <Browser />
              </Layout>
            }
          ></Route>
           <Route
            path="/charts"
            element={
              <Layout>
                <Chart />
              </Layout>
            }
          ></Route>
           <Route
            path="/artists"
            element={
              <Layout>
                <Artists />
              </Layout>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
