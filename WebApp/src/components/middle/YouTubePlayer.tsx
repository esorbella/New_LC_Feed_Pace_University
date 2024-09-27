export interface YoutubePlayerProps {
    videoId: string;
}

const YouTubePlayer: React.FC<YoutubePlayerProps> = ({ videoId }: YoutubePlayerProps) => {
    return (
        <div className="h-full w-full">
            <iframe
                width="100%"
                height="100%"
                className="rounded-md"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    );
};

export default YouTubePlayer;
