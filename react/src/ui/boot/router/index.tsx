import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../../App";
import HomePage from "../../pages/home";
import Profile from "../../pages/profile";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)