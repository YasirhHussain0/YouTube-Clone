import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Taglist from "../components/Taglist";
import SuggestedVideos from "../feed/SuggestedVideos";

export default function VideoLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">

      <Header onMenuClick={() => setSidebarOpen((open) => !open)} />

      <div className="mt-[56px]">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main
          className={`px-4 transition-[margin] duration-300 ${
            sidebarOpen ? "ml-[240px]" : "ml-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 min-w-0">
              {children}
            </div>

            <aside className="w-full lg:w-[420px] shrink-0">
              <div className="lg:sticky lg:top-[56px]">
                <Taglist variant="sidebar" />
                <div className="mt-2">
                  <SuggestedVideos excludeVideoId={id} />
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>

    </div>
  );
}