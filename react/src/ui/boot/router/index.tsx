import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../../App";
import HomePage from "../../pages/home";
import Profile from "../../pages/profile";

const RoutesTree = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default RoutesTree;
