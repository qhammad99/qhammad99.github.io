import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";

import './App.css'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default App