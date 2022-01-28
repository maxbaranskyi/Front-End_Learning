import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import Profile from "../../pages/profile";
import RegisterPage from "../../pages/register";

const RoutesTree = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesTree;
