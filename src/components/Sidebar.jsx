import { Link } from "react-router-dom";
import Shorts from "../assets/shorts.svg";
import News from "../assets/news.svg?react";
import Music from "../assets/Music.svg?react";
import Gaming from "../assets/gaming.svg?react";
import YT_Premium from "../assets/yt_premium.svg?react";
import YT_Musics from "../assets/yt_music.svg?react";
import YT_Kids from "../assets/yt_kids.svg?react";

import {
    House,
    ChevronRight,
    User,
    History,
    ListVideo,
    Clock3,
    ThumbsUp,
    PlaySquare,
    ArrowDownToLine,
    Trophy,
} from "lucide-react";

const explorelist = [
    {
        title: "Music",
        icon: <Music />
    },
    {
        title: "Gaming",
        icon: <Gaming />
    },
    {
        title: "News",
        icon: <News />
    },
    {
        title: "Sports",
        icon: <Trophy />
    }
]
const feedlist = [
    {
        title: "Your Channel",
        icon: <User />
    },
    {
        title: "History",
        icon: <History />
    },
    {
        title: "Playlists",
        icon: <ListVideo />
    },
    {
        title: "Watch Later",
        icon: <Clock3 />
    },
    {
        title: "Liked Videos",
        icon: <ThumbsUp />
    },
    {
        title: "Your Videos",
        icon: <PlaySquare />
    },
    {
        title: "Download",
        icon: <ArrowDownToLine />
    }
]

const morefromYt = [
    {
        title: "YouTube Premium",
        icon: <YT_Premium />
    },
    {
        title: "Youtube Music",
        icon: <YT_Musics />
    },
    {
        title: "YouTube Kids",
        icon: <YT_Kids />
    }
]

export default function Sidebar({ open, onClose }) {
    return (
        <>
            {open && (
                <button
                    type="button"
                    onClick={onClose}
                    className="fixed inset-0 top-[56px] z-[998] bg-black/40 lg:hidden"
                    aria-label="Close sidebar"
                />
            )}

            <aside
                className={`sidebar fixed left-0 top-[56px] z-[999] flex flex-col w-[256px] h-[calc(100vh-56px)] overflow-y-auto bg-white pb-[40px] transition-transform duration-300 will-change-transform ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >

            {/* Main Navigation */}
            <div className="flex flex-col gap-1 p-3 border-b border-gray-300">

                <Link to="/" className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200">

                    <div className="me-[24px] text-black grid place-items-center">
                        <House size={24} />
                    </div>

                    <span className="text-[14px] text-black font-medium">
                        Home
                    </span>

                </Link>

                <Link
                    to="/shorts"
                    className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200"
                >

                    <img
                        src={Shorts}
                        alt="Shorts"
                        className="w-[24px] h-[24px] me-[24px]"
                    />

                    <span className="text-[14px] text-black font-medium">
                        Shorts
                    </span>

                </Link>

            </div>

            {/* Subscriptions */}
            <div className="flex flex-col gap-1 p-3 border-b border-gray-300">

                <button className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200">

                    <span className="text-[16px] text-black font-medium">
                        Subscriptions
                    </span>

                    <span className="text-black ml-[14px]">
                        <ChevronRight size={18} />
                    </span>

                </button>

                {[
                    "Gb Musical Band Skardu",
                    "Zulfiqarraazofficial",
                    "Yasir Hussain",
                    "Ruhullah Vazir",
                    "Anchan Art",
                    "Alkamal channel",
                ].map((channel) => (

                    <button
                        key={channel}
                        className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200"
                    >

                        <div className="h-[24px] w-[24px] rounded-full me-[24px] bg-black text-white grid place-items-center text-sm font-semibold ">
                            {channel.charAt(0)}
                        </div>

                        <span className="text-[14px] text-black text-left text-ellipsis whitespace-nowrap overflow-hidden">
                            {channel}
                        </span>

                    </button>

                ))}

            </div>

            {/*Feed*/}
            <div className="flex flex-col gap-1 p-3 border-b border-gray-300">

                <button className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200">

                    <span className="text-[16px] text-black font-medium">
                        You
                    </span>

                    <span className="text-black ml-[14px]">
                        <ChevronRight size={18} />
                    </span>

                </button>

                {feedlist.map((item) => (

                    <button
                        key={item.title}
                        className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200"
                    >

                        <div className="h-[24px] w-[24px] me-[24px] text-black grid place-items-center text-sm font-semibold ">
                            {item.icon}
                        </div>

                        <span className="text-[14px] text-black text-left text-ellipsis whitespace-nowrap overflow-hidden">
                            {item.title}
                        </span>

                    </button>

                ))}

            </div>


            {/*Explore*/}
            <div className="flex flex-col gap-1 p-3 border-b border-gray-300">

                <button className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200">

                    <span className="text-[16px] text-black font-medium">
                        Explore
                    </span>

                    <span className="text-black ml-[14px]">
                        <ChevronRight size={18} />
                    </span>

                </button>

                {explorelist.map((item) => (

                    <button
                        key={item.title}
                        className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200"
                    >

                        <div className="h-[24px] w-[24px] me-[24px] text-black grid place-items-center text-sm font-semibold ">
                            {item.icon}
                        </div>

                        <span className="text-[14px] text-black text-left text-ellipsis whitespace-nowrap overflow-hidden">
                            {item.title}
                        </span>

                    </button>

                ))}

            </div>


            {/*More from Youtube*/}
            <div className="flex flex-col gap-1 p-3 border-b border-gray-300">

                <button className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200">

                    <span className="text-[16px] text-black font-medium">
                        More from YouTube
                    </span>

                    <span className="text-black ml-[14px]">
                        <ChevronRight size={18} />
                    </span>

                </button>

                {morefromYt.map((item) => (

                    <button
                        key={item.title}
                        className="flex items-center px-3 h-[40px] rounded-xl hover:bg-[#F2F2F2] transition-colors duration-200"
                    >

                        <div className="h-[24px] w-[24px] me-[24px] text-black grid place-items-center text-sm font-semibold ">
                            {item.icon}
                        </div>

                        <span className="text-[14px] text-black text-left text-ellipsis whitespace-nowrap overflow-hidden">
                            {item.title}
                        </span>

                    </button>

                ))}

            </div>


            </aside>
        </>
    );
}



 