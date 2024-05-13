import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
} from "./pages";

import "./App.css";

function App() {
  const activeMenu = false;

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* settings icon start */}
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{
                background: "blue",
                borderRadius: "50%",
              }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {/* settings icon start */}
        {/* sidebar start */}
        {activeMenu ? (
          <div className="sidebar w-72 fixed bg-white dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        {/* sidebar end */}
        {/* navbar start */}
        <div
          className={`w-full min-h-screen bg-main-bg dark:bg-main-bg ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="navber fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
            <Navbar />
          </div>
        </div>
        {/* navbar end */}
        {/* routes start */}
        <div>
          <Routes>
            {/* dashboard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* apps */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calender" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* charts */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
        {/* routes end */}
      </div>
    </BrowserRouter>
  );
}
export default App;
