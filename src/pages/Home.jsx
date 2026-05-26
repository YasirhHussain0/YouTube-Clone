import VideoGrid from "../feed/VideoGrid";
import Taglist from "../components/Taglist";
import ShortsShelf from "../feed/ShortsShelf";

export default function Home() {
    return (
        <>
            <Taglist />

            <VideoGrid limit={6} shuffle={true}/>

            <ShortsShelf />

            <VideoGrid  limit={9} shuffle={true}/>
        </>
    );
}