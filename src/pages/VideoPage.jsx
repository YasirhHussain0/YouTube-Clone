import { useParams } from "react-router-dom";
import { videos } from "../data/Videos";
import { useState } from 'react'

import {
    ThumbsUp,
    ThumbsDown,
    Forward,
    ArrowDownToLine,
    Ellipsis
} from 'lucide-react';


export default function VideoPage() {
    const { id } = useParams();

    const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    const video = videos.find((v) => v.videoId === id);
    const getInitials = (name) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();
    };
    const [likes, setLikes] = useState(220900);
    const [dislikes, setDislikes] = useState(90);

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(2) + "M";
        if (num >= 1000) return (num / 1000).toFixed(2) + "K";
        return num;
    };

    return (
        <div className="min-h-screen w-full p-4">

            {/* Video */}
            <div className=" w-full mx-auto">
                <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title="video player"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>

                <h1 className="text-lg mt-4 font-bold text-left">
                    {video?.title}
                </h1>

                <div className="flex justify-between">
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center gap-2 mt-2">

                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-black">
                                {getInitials(video?.channel)}
                            </div>

                            <div className="text-sm text-gray-700 text-start">
                                <h2 className="text-[16px] font-semibold m-0 text-left">{video?.channel}</h2>
                                <span className="text-[12px] text-gray ">5.5k subscribers</span>
                            </div>

                        </div>
                        <button className="text-white bg-black rounded-full px-5 text-sm h-[45px]">Subscribe</button>

                    </div>

                    <div className="icons flex gap-2 items-center">
                        <div className="flex gap-0 items-center">
                            <button
                                onClick={() => setLikes(likes + 1)}
                                className="flex bg-[#0000000d] gap-2 items-center rounded-l-full px-[12px] text-black text-sm font-medium py-2 hover:bg-[#E5E5E5]">
                                <ThumbsUp /> {likes > 0 && (
                                    <span>
                                        {formatNumber(likes)}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setDislikes(dislikes + 1)}
                                className="flex bg-[#0000000d] gap-2 items-center rounded-r-full px-[12px] text-black text-sm font-medium py-2 hover:bg-[#E5E5E5]">
                                {dislikes > 0 && (
                                    <span>
                                        {formatNumber(dislikes)}
                                    </span>
                                )
                                }<ThumbsDown />
                            </button>
                        </div>
                        <button className="flex bg-[#0000000d] gap-2 items-center rounded-full px-[12px] text-black text-sm py-[12px] font-medium hover:bg-[#E5E5E5]">
                            <Forward /> Share
                        </button>
                        <button className="flex bg-[#0000000d] gap-2 items-center rounded-full px-[12px] text-black py-[12px] text-sm font-medium hover:bg-[#E5E5E5]">
                            <ArrowDownToLine /> Download
                        </button>
                        <button className="bg-[#0000000d] px-[12px] rounded-full text-black text-sm font-medium py-[12px] hover:bg-[#E5E5E5]">
                            <Ellipsis />
                        </button>

                    </div>

                </div>

                {/* Description */}
                <div className="mt-4 text-sm rounded-xl bg-[#0000000d] p-4 text-left text-black text-sm text-black hover:bg-[#FFFAF0]">
                    <p>
                        {video.views} {video.time}
                    </p>

                    <p>
                        Video description will go here. You can fetch this from API later. For now, it's just a placeholder text to show how the description will look like on the video page. You can replace this with actual description when you have the API ready. Video description will go here. You can fetch this from API later. For now, it's just a placeholder text to show how the description will look like on the video page. You can replace this with actual description when you have the API ready.
                    </p>
                </div>
            </div>
        </div>
    );
}