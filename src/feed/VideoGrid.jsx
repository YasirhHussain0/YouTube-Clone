import { useMemo } from "react";
import VideoCard from "../feed/VideoCard";
import { Videos } from "../data/Videos";

const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function VideoGrid({ limit, shuffle = false }) {
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
      hypothesisId: "H1",
      location: "src/feed/VideoGrid.jsx:5",
      message: "VideoGrid module data loaded",
      data: { videosCount: Videos.length, firstVideoId: Videos[0]?.videoId ?? null },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  const visibleVideos = useMemo(() => {
    const uniqueVideos = Array.from(
      new Map(Videos.map((v) => [v.id, v])).values()
    );

    let result = shuffle ? shuffleArray(uniqueVideos) : uniqueVideos;

    if (limit) {
      result = result.slice(0, limit);
    }

    return result;
  }, [limit, shuffle]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pt-[24px]">
      {visibleVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}