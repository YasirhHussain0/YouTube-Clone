// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

// export default function MainLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="min-h-screen bg-white">

//       <Header onMenuClick={() => setSidebarOpen((open) => !open)} />

//       <div className="mt-[56px]">
//         <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//         <main
//           className={`px-4 transition-[margin] duration-300 ${
//             sidebarOpen ? "ml-[256px]" : "ml-[120px]"
//           }`}
//         >
//           {children}
//         </main>

//       </div>

//     </div>
//   );
// }
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <Header onMenuClick={() => setSidebarOpen(prev => !prev)} />

      <div className="mt-[56px]">

        {/* SIDEBAR */}
        <Sidebar open={sidebarOpen} />

        {/* MAIN CONTENT */}
        <main
          className={`
            px-4 transition-all duration-300
            ${sidebarOpen
              ? "ml-[256px]"
              : "ml-[64px]"
            }
          `}
        >
          {children}
        </main>

      </div>

    </div>
  );
}