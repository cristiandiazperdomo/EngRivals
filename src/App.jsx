import {Routes, Route} from "react-router-dom";
import {SignIn} from "./pages/SignIn/SignIn";
import {Home} from "./pages/Home/Home";
import {SignUp} from "./pages/SignUp/SignUp";
import {Rooms} from "./pages/Rooms/Rooms";
import {Dashboard} from "./pages/Dashboard/Dashboard";
import {MyContext} from "./context/AppContext.js";
import {useInitialState} from "./hooks/useInitialState.js";
import {BrowserRouter} from "react-router-dom";

import {Theme} from "@radix-ui/themes";
export default function App() {
    const initialState = useInitialState();

    return (
        <>
            <MyContext.Provider value={initialState}>
                <BrowserRouter>
                    <Theme
                        accentColor="crimson"
                        grayColor="sand"
                        radius="large"
                        scaling="95%"
                    >
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/signin" element={<SignIn />}></Route>
                            <Route path="/signup" element={<SignUp />}></Route>
                            <Route path="/rooms" element={<Rooms />}></Route>
                            <Route
                                path="/dashboard"
                                element={<Dashboard />}
                            ></Route>
                        </Routes>
                    </Theme>
                </BrowserRouter>
            </MyContext.Provider>
        </>
    );
}
