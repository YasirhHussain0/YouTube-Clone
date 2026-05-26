import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Videos } from "../data/Videos";

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
      hypothesisId: "H3",
      location: "src/feed/SuggestedVideos.jsx:47",
      message: "SuggestedVideos module data loaded",
      data: { excludeVideoId: excludeVideoId ?? null, videosCount: videos.length },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  const items = useMemo(() => {
    const filtered = excludeVideoId
      ? Videos.filter((v) => v.videoId !== excludeVideoId)
      : Videos;

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

