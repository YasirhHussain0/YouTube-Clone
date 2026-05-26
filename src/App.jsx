import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import VideoPage from "./pages/VideoPage";

import MainLayout from "./layouts/MainLayout";
import VideoLayout from "./layouts/VideoLayout";

export default function App() {
  return (
    <Routes>

      {/* MAIN APP (with sidebar) */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/shorts"
        element={
          <MainLayout>
            <Shorts />
          </MainLayout>
        }
      />

      {/* VIDEO PAGE (different layout) */}
      <Route
        path="/video/:id"
        element={
          <VideoLayout>
            <VideoPage />
          </VideoLayout>
        }
      />

    </Routes>
  );
}