import { Link } from "react-router-dom";
import { useState } from "react";
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
    TvMinimalPlay,
    CircleUser,
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


export default function Sidebar({ open }) {
    const [showSubscriptionsMenu, setShowSubscriptionsMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <>

            <aside
                className={`
  sidebar fixed left-0 top-[56px] z-[999]
  bg-white pb-[40px]
  overflow-y-auto overflow-x-visible
  transition-all duration-300

  xl:h-[calc(100vh-56px)]

  ${open
                        ? "translate-x-0 w-[256px]"
                        : "xl:w-[72px] xl:translate-x-0 -translate-x-full xl:block"
                    }
`}
            >
                {!open && (
                    <div className="flex flex-col items-center px-2 pt-2">
                        <Link to="/" className="w-[64px] grid place-items-center rounded-[10px] text-black pt-[14px] pb-[16px] hover:bg-[#F2F2F2]">
                            <House size={24} />
                            <span className="text-[10px] text-black font-normal lheight-[12px] nowrap max-h-[14px]">
                                Home
                            </span>
                        </Link>


                        <Link to="/shorts" className="w-[64px] pt-[14px] pb-[16px] grid place-items-center rounded-[10px] text-black hover:bg-[#F2F2F2]">
                            <img src={Shorts} alt="Shorts" className="w-[24px] h-[24px] lheight-[12px] nowrap" />
                            <span className="text-[10px] text-black font-normal lheight-[12px] nowrap max-h-[14px] ">
                                Shorts
                            </span>
                        </Link>


                        <div
                            onMouseEnter={() => setShowSubscriptionsMenu(true)}
                            onMouseLeave={() => setShowSubscriptionsMenu(false)}
                            className="w-[64px]"
                        >
                            <Link
                                to="/subscriptions"
                                className="w-[64px] pt-[14px] pb-[16px] grid place-items-center rounded-[10px] text-black hover:bg-[#F2F2F2]"
                            >
                                <TvMinimalPlay className="w-[24px] h-[24px]" />

                                <span className="text-[10px] text-black font-normal leading-[12px]">
                                    Subscriptions
                                </span>
                            </Link>
                        </div>

                        <div
                            onMouseEnter={() => setShowProfileMenu(true)}
                            onMouseLeave={() => setShowProfileMenu(false)}
                            className="w-[64px]">
                            <Link to="/" className="w-[64px] pt-[14px] pb-[16px] grid place-items-center rounded-[10px] text-black hover:bg-[#F2F2F2]">
                                <CircleUser className="w-[24px] h-[24px]" />
                                <span className="text-[10px] text-black font-normal lheight-[12px] nowrap max-h-[14px]">
                                    You
                                </span>
                            </Link>
                        </div>



                    </div>
                )}

                {open && (
                    <div className="flex flex-col gap-1 py-4">
                        
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


                    </div>

                )}



            </aside>
            {showSubscriptionsMenu && !open && (
                <div
                    className="fixed left-[75px] top-[200px] z-[2000] transition-all duration-300"
                    onMouseEnter={() => setShowSubscriptionsMenu(true)}
                    onMouseLeave={() => setShowSubscriptionsMenu(false)}
                >
                    <div className="w-56 bg-white rounded-[12px] shadow-lg py-2">

                        <h3 className="text-black p-3 pt-0 text-lg font-medium text-left">Subscription</h3>
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
                                className="flex items-center w-full px-3 h-[40px] hover:bg-[#F2F2F2] transition-colors duration-200"
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

                </div>
            )}
            {showProfileMenu && !open && (
                <div
                    className="fixed left-[75px] top-[270px] z-[2000]"
                    onMouseEnter={() => setShowProfileMenu(true)}
                    onMouseLeave={() => setShowProfileMenu(false)}
                >
                    <div className="w-56 bg-white rounded-[12px] shadow-lg py-2">

                        <h3 className="text-black p-3 pt-0 text-lg font-medium text-left">You</h3>
                        {feedlist.map((item) => (

                            <button
                                key={item.title}
                                className="flex items-center px-3 h-[40px] w-full hover:bg-[#F2F2F2] transition-colors duration-200"
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

                </div>
            )}
        </>
    );
}



