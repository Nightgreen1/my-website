import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import How from "./pages/how";

export default function App() {

 return (
  <div className="min-h-screen w-screen flex flex-col">
     <header className="bg-emerald-800 text-white p-4" >
       <h1>AN318 React Class</h1>
     </header>
     <div className="flex flex-1">
      <Sidebar/>
      <main className="flex-1 p-6 bg-white text-black">
         <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/how" element={<How />} />
         </Routes>
      </main>
     </div>
  </div>
 )
}