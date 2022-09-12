import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js'
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <div class="row">
          <div class="col-md-3">
              <Sidebar />
          </div>
          <div class="col-md-9">
              <BrowserRouter>
                <Routes>
                  <Route path="/workouts" element={<Dashboard />}>

                  </Route>
                </Routes>
              </BrowserRouter>
          </div>
      </div>
   </>
    

  );
}

export default App;
