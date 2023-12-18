const video = {
    "title": "Tears of Steel",
    "description": "In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "thumbnailUrl": "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    "genre": "Action",
    "duration": "12 minutes"
}


const Video = () => {

    return (
        <div className="relative hidden lg:block">
            <video className="w-full" poster={video.thumbnailUrl} autoPlay muted loop src={video.videoUrl}>
            </video>
            <div className="w-1/2 flex flex-col absolute top-1/3 left-3">
                <p className="lg:text-6xl underline p-2 drop-shadow-lg">{video.title}</p>
                <p className="px-2 text-2xl drop-shadow-lg mt-4 video-banner-description">{video.description}</p>
                <div className="p-2 mt-4">
                    <button className="w-32 border-2 bg-sky-400 p-2 lg:hover:bg-sky-700">Play Now</button>
                </div>
            </div>
        </div>
    )
}

export default Video