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
  // #region agent log
  fetch("http://127.0.0.1:7623/ingest/5cf08144-ba0c-463e-aa05-1aefbc4b1557", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "4cbb0a",
    },
    body: JSON.stringify({
      sessionId: "4cbb0a",
      runId: "case-check",
      hypothesisId: "H4",
      location: "src/components/Taglist.jsx:16",
      message: "TagList module data loaded",
      data: { variant, tagsCount: tags.length, firstTag: tags[0] ?? null },
      // timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  const [randomTags] = useState(() => {
    
    const filtered = tags.filter((tag) => tag !== allTag);

    
    const uniqueTags = [...new Set(filtered)];

    const shuffled = shuffleArray(uniqueTags);

    return [allTag, ...shuffled.slice(0, 20)];
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

  const navButtonBase =
    "hidden sm:flex absolute top-1/2 -translate-y-1/2 z-[60] items-center justify-center w-9 h-9 rounded-full bg-white text-black transition-shadow duration-200 hover:bg-[#ededed] hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]";

  const containerClassName =
    variant === "sidebar"
      ? "relative w-full bg-transparent h-[56px]"
      : "relative sticky top-[56px] z-50 bg-[#fffffffa] w-auto h-[56px] -mx-4 px-4 transition-[margin] duration-300";

  return (
    <div className={containerClassName}>
      {/* Left nav */}
      <button
        type="button"
        onClick={() => scrollByAmount("left")}
        disabled={!canScrollLeft}
        className={`${navButtonBase} left-0 ${
          canScrollLeft ? "" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll tags left"
      >
        <ChevronLeft size={24} />
      </button>

      
      <div
        ref={scrollContainerRef}
        className="flex h-full w-full items-center gap-[12px] overflow-hidden scrollbar-none px-4"
      >
        {randomTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`shrink-0 whitespace-nowrap h-[32px] px-[12px] rounded-[8px] text-[14px] font-medium flex items-center justify-center transition-colors duration-200 ${
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
        className={`${navButtonBase} right-0 ${
          canScrollRight ? "" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll tags right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
