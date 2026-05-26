import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();

  const embedUrl = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`;

  return (
    <div
      className="cursor-pointer hover:bg-[#F2F2F2] border-gray-300 rounded-xl transition-all duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="m-2 mb-6">

        <div
          className="w-full h-[216px] md:h-[297px] rounded-xl overflow-hidden bg-black relative"
          onClick={() => navigate(`/video/${video.videoId}`)}
        >

          {!isHovering && (
            <img
              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          )}

          {isHovering && (
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title={video.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              className="pointer-events-none"
            />
          )}

          {isHovering && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* INFO */}
        <div className="flex mt-3 gap-3">

          <div className="w-10 h-10 rounded-full bg-gray-300" />

          <div>
            <h3 className="font-medium text-start text-black line-clamp-2 text-[16px]">
              {video.title}
            </h3>

            <p className="text-gray-500 text-sm text-start">
              {video.channel}
            </p>

            <p className="text-gray-500 text-xs text-start">
              {video.views} • {video.time}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}