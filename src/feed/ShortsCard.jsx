import { useState } from "react";
import { EllipsisVertical } from "lucide-react";

export default function ShortsCard({ short }) {
  const [isHovering, setIsHovering] = useState(false);

  const videoId = short.thumbnail; // treating thumbnail as videoId

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="cursor-pointer hover:bg-[#F8EDE7] p-2 pb-6 rounded-xl transition-all duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Media */}
      <div className="relative w-full h-[350px] lg:h-[460px] rounded-xl overflow-hidden bg-black">

        {/* Thumbnail (default) */}
        {!isHovering && (
          <img
            src={thumbnailUrl}
            alt={short.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Hover preview (YouTube iframe) */}
        {isHovering && (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
            title={short.title}
            allow="autoplay; encrypted-media"
          />
        )}
      </div>

      {/* Info section (unchanged layout) */}
      <div className="flex justify-between text-start mt-2">
        <div>
          <h3 className="text-black font-medium text-sm line-clamp-2">
            {short.title}
          </h3>

          <p className="text-gray-500 text-xs mt-1">
            {short.views}
          </p>
        </div>

        <button className="hover:bg-[#E5E5E5] rounded-full w-[34px] h-[34px] grid place-items-center text-black">
          <EllipsisVertical />
        </button>
      </div>
    </div>
  );
}