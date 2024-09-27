import { lc_coordinates, lc_locations } from '@Components/common';
import { Text } from '@Components/common';
import { Period, useWeatherData, WeatherBannerProps } from '@Hooks';

const WeatherBanner: React.FC<WeatherBannerProps> = ({
    location = lc_locations.plv,
    coordinates = lc_coordinates.plv,
}: WeatherBannerProps) => {
    const { weatherData, highLow, loading } = useWeatherData(coordinates);

    const CurrentForcast = () => {
        const period = weatherData.periods[0];
        return (
            <div className="h-full w-1/4 flex flex-col items-center rounded-md">
                {period.detailedForecast
                    .split('. ')
                    .map(
                        (sentence: string, index: number) =>
                            index < 3 && (
                                <Text
                                    key={index}
                                    classNameProps="text-sm line-clamp-2 text-center"
                                >
                                    {sentence}
                                </Text>
                            ),
                    )}
            </div>
        );
    };

    interface DayForcastProps {
        period: Period;
        index: number;
    }

    const DayForcast: React.FC<DayForcastProps> = ({ period, index }: DayForcastProps) => {
        return (
            <div
                key={index}
                className={`h-full w-2/6 ml-2 mr-2 flex flex-col items-center rounded-md ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'}`}
            >
                <Text
                    classNameProps="font-bold text-sm"
                >
                    {period.name}
                </Text>
                <div className='w-full h-full p-1 text-center'>
                    <Text
                        classNameProps="text-sm line-clamp-1"
                    >
                        {period.shortForecast}
                    </Text>
                </div>
                <div className="flex flex-row space-x-3">
                    <Text
                        classNameProps="text-sm"
                    >
                        {`H: ${highLow[index].high}°`}
                    </Text>
                    <Text
                        classNameProps="text-sm"
                    >
                        {`L: ${highLow[index].low}°`}
                    </Text>
                </div>
            </div>
        );
    };

    const WeekForcast = () => {
        return (
            <div className="h-full w-3/4 pl-4 pr-4 flex flex-row justify-start">
                {weatherData.periods.map(
                    (period: Period, index: number) =>
                        index !== 0 && <DayForcast key={index} period={period} index={index} />,
                )}
            </div>
        );
    };

    const Forcast = () => {
        return (
            <div className="h-fit w-full pl-4 pr-4 flex flex-row justify-center items-center bg-blue-700 rounded-md">
                <CurrentForcast />
                <WeekForcast />
            </div>
        );
    };

    const Titles = () => {
        return (
            <div className="h-fit w-full flex-row flex pl-2 pr-2 mb-2">
                <div className="h-fit w-1/4 text-center">
                    <Text
                        classNameProps="font-bold text-xl"
                    >
                        {`Current Weather in ${location}`}
                    </Text>
                </div>
                <div className="h-fit w-3/4 text-center">
                    <Text
                        classNameProps="font-bold text-xl"
                    >
                        Weekly Weather
                    </Text>
                </div>
            </div>
        );
    };

    return (
        <div className="h-30 mt-2 flex flex-col bg-blue-900 p-2 pt-0 items-center rounded-md">
            <Titles />
            {loading ? (
                <Text
                    classNameProps="text-2xl text-center"
                >
                    Loading Weather Data...
                </Text>
            ) :
                <Forcast />
            }
        </div>
    );
};

export default WeatherBanner;
