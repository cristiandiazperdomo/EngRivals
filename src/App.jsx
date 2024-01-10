import {Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/SignIn/SignIn";
import {Home} from "./pages/Home/Home";
import {SignUp} from "./pages/SignUp/SignUp";
import {Rooms} from "./pages/Rooms/Rooms";
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {Header} from "./components/UnloggedHeader/UnloggedHeader";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/rooms" element={<Rooms />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </>
    );
}
