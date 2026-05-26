// import { shorts } from "../data/shorts";
// import ShortsCard from "./ShortsCard";
// import Shorts from "../assets/shorts_red.svg?react"

// const shuffleArray = (arr) => {
//   const copy = [...arr];
//   for (let i = copy.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [copy[i], copy[j]] = [copy[j], copy[i]];
//   }
//   return copy;
// };

// export default function ShortsShelf() {
//     return (
//         <section className="pt-3">

//             <div className="flex gap-2 items-center mb-4 ml-2">
//                 <div className="w-[24px] h-[24px] ">
//                     <Shorts />
//                 </div>
//                 <h2 className="text-xl font-bold m-0">
//                     Shorts
//                 </h2>

//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-hidden">
//                 {shorts.map((short) => (
//                     <ShortsCard key={short.id} short={short} />
//                 ))}
//             </div>

//         </section>
//     );
// }
import { useMemo } from "react";
import { shorts } from "../data/shorts";
import ShortsCard from "./ShortsCard";
import Shorts from "../assets/shorts_red.svg?react";

const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function ShortsShelf() {
  const visibleShorts = useMemo(() => {
    return shuffleArray(shorts).slice(0, 5); // 👈 limit here
  }, []);

  return (
    <section className="pt-3">

      <div className="flex gap-2 items-center mb-4 ml-2">
        <div className="w-[24px] h-[24px]">
          <Shorts />
        </div>
        <h2 className="text-xl font-bold m-0">
          Shorts
        </h2>
      </div>

      {/* single horizontal row, responsive visible columns */}
      <div className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[48%] md:auto-cols-[32%] xl:auto-cols-[19%] gap-2 overflow-x-auto overflow-y-hidden">
        {visibleShorts.map((short) => (
          <div key={short.id}>
            <ShortsCard short={short} />
          </div>
        ))}
      </div>

    </section>
  );
}