import { useMemo } from "react";
import VideoCard from "../feed/VideoCard";
import { videos } from "../data/videos";

const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export default function VideoGrid({ limit, shuffle = false }) {
  const visibleVideos = useMemo(() => {
    const uniqueVideos = Array.from(
      new Map(videos.map((v) => [v.id, v])).values()
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