import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Charts from "./Charts";

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="charts" element={<Charts/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;