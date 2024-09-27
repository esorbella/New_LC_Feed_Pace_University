import { Link } from 'react-router-dom';
import { pace_nyc_image, pace_plv_image } from '@Assets';
import { Header, Text } from '@Components';

const Home: React.FC = () => {
    return (
        <div className="h-screen bg-sky-300 p-2">
            <Header weather_banner={false} />
            <div className="rounded-md bg-blue-900 p-2 flex flex-col justify-center h-2/3 text-center">
                <div className="h-1/6 w-full">
                    <Text
                        classNameProps={' text-4xl text-center'}
                    >
                        Please Select an LC Location
                    </Text>
                </div>
                <div className="h-5/6 w-full flex flex-row justify-center">
                    <Link to="/nyc" className="h-full w-1/2">
                        <img
                            alt="Pace NYC Campus"
                            src={pace_nyc_image}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            className="w-full h-full"
                        />
                    </Link>
                    <Link to="/plv" className="h-full w-1/2">
                        <img
                            alt='Pace PLV Campus'
                            src={pace_plv_image}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
