import { Outlet } from "react-router-dom";
//Elements
import "./index.css";

export default function App() {
  return (
    <div className="bg-primary">
      <Outlet />
    </div>
  );
}
