import logo from './logo.svg';
import './App.scss';
import { Link } from "react-router-dom";
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <div className="header-container">
      <Header />
      </div>
      <div className="main-Container">
        <div className="sidebar-container">

        </div>
      </div>
      <div className='app-content'></div>
     <Outlet/>

    </div>
  );
}

export default App;
//outlet để dùng chung trong react router dom