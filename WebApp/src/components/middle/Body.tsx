import { Text } from '@Components/common';
import { useDate, useYoutube } from '@Hooks';
import YouTubePlayer from './YouTubePlayer';

const Body: React.FC = () => {
    const { currentDate, currentTime } = useDate();
    const { youTubeLink } = useYoutube();

    return (
        <div className="flex flex-row place-content-center h-2/4 w-full">
            <div className="h-full w-1/2 bg-blue-900 flex flex-col justify-center text-center rounded-l-md">
                <Text
                    classNameProps="text-4xl font-bold"
                >
                    {currentDate}
                </Text>
                <Text
                    classNameProps="text-4xl font-bold"
                >
                    {currentTime}
                </Text>
            </div>
            <div className="h-full w-1/2 bg-blue-900">
                <YouTubePlayer videoId={youTubeLink} />
            </div>
        </div>
    );
};

export default Body;
