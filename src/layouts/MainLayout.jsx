import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Offcanvas from "../components/Offcanvas";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header
        onMenuClick={() => setSidebarOpen((prev) => !prev)}
        onOffcanvasClick={() => setOffcanvasOpen(true)}
      />

      <div className="mt-[56px]">

        {/* Desktop Sidebar */}
        {isDesktop && (
          <Sidebar open={sidebarOpen} />
        )}

        {/* Mobile / Tablet Offcanvas */}
        {!isDesktop && (
          <Offcanvas
            open={offcanvasOpen}
            onClose={() => setOffcanvasOpen(false)}
          >
            {/* Use your existing expanded sidebar content */}
            <Sidebar open={true} />
          </Offcanvas>
        )}

        <main
          className={`
            px-4 transition-all duration-300
            ${
              isDesktop
                ? sidebarOpen
                  ? "ml-[256px]"
                  : "ml-[72px]"
                : "ml-0"
            }
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}