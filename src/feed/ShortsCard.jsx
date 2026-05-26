import {EllipsisVertical} from "lucide-react";
export default function ShortsCard({ short }) {
  return (
    <div className="cursor-pointer hover:bg-[#F8EDE7] p-2 pb-6 rounded-xl transition-all duration-600 z-0">

      <img
        src={short.thumbnail}
        alt={short.title}
        className="w-full h-[350px] lg:h-[460px] object-cover rounded-xl"
      />

      <div className="flex justify-between text-start mt-2">

        <div>
            <h3 className="text-black font-medium text-sm line-clamp-2">
          {short.title}
        </h3>

        <p className="text-gray-500 text-xs mt-1">
          {short.views}
        </p>
        </div>

        <button className="bg-none hover:bg-[#E5E5E5] rounded-full w-[34px] h-[34px] place-items-center text-black">
            <EllipsisVertical/>
        </button>

      </div>

    </div>
  );
}