import { useRef, useState, useEffect } from "react";
import { tags } from "../data/tags";
import { ChevronRight, ChevronLeft } from "lucide-react";

const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function TagList({ variant = "main" }) {
  const allTag = "All";

  const [randomTags] = useState(() => {
    
    const filtered = tags.filter((tag) => tag !== allTag);

    
    const uniqueTags = [...new Set(filtered)];

    const shuffled = shuffleArray(uniqueTags);

    return [allTag, ...shuffled.slice(0, 14)];
  });

  const [selectedTag, setSelectedTag] = useState(allTag);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    el.addEventListener("scroll", handleScroll);

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(el);

    return () => {
      window.removeEventListener("resize", updateScrollButtons);
      el.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollByAmount = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    const next = direction === "left" ? el.scrollLeft - amount : el.scrollLeft + amount;
    el.scrollTo({ left: next, behavior: "smooth" });
  };

  const containerClassName =
    variant === "sidebar"
      ? "w-full bg-transparent h-[56px] flex items-center"
      : "sticky top-[56px] z-50 w-full bg-[#fffffffa] h-[56px] flex items-center -mx-4 px-4 transition-[margin] duration-300";

  return (
    <div className={containerClassName}>
      {/* Left nav */}
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        disabled={!canScrollLeft}
        className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full mr-1 text-black text-xs font-bold transition-colors ${
          canScrollLeft ? "bg-[#F2F2F2] hover:bg-[#E5E5E5]" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll tags left"
      >
        <ChevronLeft size={14} />
      </button>

      {/* Scrollable tag row */}
      <div
        ref={scrollContainerRef}
        className="flex-1 flex gap-[12px] overflow-hidden scrollbar-none"
      >
        {randomTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`whitespace-nowrap h-[32px] px-[12px] rounded-[8px] text-[14px] font-medium flex items-center justify-center transition-colors duration-200 ${
              selectedTag === tag
                ? "bg-black text-white"
                : "bg-[#F2F2F2] text-black"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Right nav */}
      <button
        type="button"
        onClick={() => scrollByAmount("right")}
        disabled={!canScrollRight}
        className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full ml-1 text-black text-xs font-bold transition-colors ${
          canScrollRight ? "bg-[#F2F2F2] hover:bg-[#E5E5E5]" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll tags right"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}