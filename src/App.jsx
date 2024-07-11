import { Outlet } from "react-router-dom";
//Elements
import "./index.css";

export default function App() {
  return (
    <div className="container bg-container mx-auto ">
      <Outlet />
    </div>
  );
}
