import { Home, NYC, PLV } from '@Pages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nyc" element={<NYC />} />
                <Route path="/plv" element={<PLV />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
