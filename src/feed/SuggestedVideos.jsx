import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { videos } from "../data/videos";

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function SuggestedVideoItem({ video }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/video/${video.videoId}`)}
      className="w-full flex gap-3 p-2 rounded-xl hover:bg-[#F2F2F2] transition-colors"
    >
      <div className="w-[168px] h-[94px] shrink-0 rounded-xl overflow-hidden bg-black">
        <img
          src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="min-w-0 text-left">
        <div className="text-[14px] font-medium text-black line-clamp-2">
          {video.title}
        </div>
        <div className="text-[12px] text-gray-600 mt-1 line-clamp-1">
          {video.channel}
        </div>
        <div className="text-[12px] text-gray-600">
          {video.views} • {video.time}
        </div>
      </div>
    </button>
  );
}

export default function SuggestedVideos({ excludeVideoId, limit = 12 }) {
  const items = useMemo(() => {
    const filtered = excludeVideoId
      ? videos.filter((v) => v.videoId !== excludeVideoId)
      : videos;

    return shuffleArray(filtered).slice(0, limit);
  }, [excludeVideoId, limit]);

  return (
    <div className="flex flex-col">
      {items.map((video) => (
        <SuggestedVideoItem key={video.id} video={video} />
      ))}
    </div>
  );
}

