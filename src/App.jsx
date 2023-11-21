import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndigitallProvider } from "./context/context";
import { Home } from "./home";
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";

function App() {
    return (
        <IndigitallProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />}></Route>
                    <Route path="/logIn" element={<LogIn />}></Route>
                    <Route
                        path="/SignUp"
                        element={<SignUp/>}></Route>
                </Routes>
            </BrowserRouter>
        </IndigitallProvider>
    );
}
export default App;
