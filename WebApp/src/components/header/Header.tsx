import { WeatherBannerProps } from '@Hooks';
import { Text } from '@Components/common';
import { WeatherBanner } from '@Components/weather';

const Header: React.FC<WeatherBannerProps> = ({
    location,
    coordinates,
    weather_banner = true,
}: WeatherBannerProps) => {
    return (
        <div className="h-fit flex flex-col justify-center mb-2">
            <div className="h-fit mx-auto p-2 rounded-md bg-blue-900">
                <Text
                    classNameProps="font-bold text-4xl text-center"
                >
                    Welcome to the Pace University Learning Commons
                </Text>
            </div>
            {
                weather_banner &&
                location &&
                <WeatherBanner location={location} coordinates={coordinates} />
            }
        </div>
    );
};


export default Header;
