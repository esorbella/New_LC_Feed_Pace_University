import { Body, Header, lc_coordinates, lc_locations, StockTicker } from "@Components";

const Home_nyc: React.FC = () => {
    return (
        <div className="h-screen bg-sky-300 p-2">
            <Header
                location={lc_locations.nyc}
                coordinates={lc_coordinates.nyc}
            />
            <Body />
            <StockTicker />
        </div>
    );
};

export default Home_nyc;
