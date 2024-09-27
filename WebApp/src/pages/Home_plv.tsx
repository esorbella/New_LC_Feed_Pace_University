import { Body, Header, lc_coordinates, lc_locations, StockTicker } from "@Components";

const Home_plv: React.FC = () => {
    return (
        <div className="h-screen bg-sky-300 p-2">
            <Header
                location={lc_locations.plv}
                coordinates={lc_coordinates.plv}
            />
            <Body />
            <StockTicker />
        </div>
    );
};

export default Home_plv;
