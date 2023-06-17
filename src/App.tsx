import { Input } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Input />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
