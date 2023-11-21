import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadIndigitallScript from "./indigitallInit";
import { Home } from "./home";
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";

let indigitall;

function App() {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        loadIndigitallScript()
            .then(() => {
                indigitall = window.indigitall;
                indigitall.init(
                    {
                        appKey: "94cb9c3e-0749-450f-8445-49bf2b269d8a",
                        workerPath:
                            "/node_modules/indigitall-web-sdk/worker.min.js",
                        requestLocation: true,
                    },
                    window.indigitall.topicsList((topics) => {
                        setTopics(topics);
                    })
                );

                const topicCodes = [
                    "incomplete_step3",
                    "incomplete_step2",
                    "incomplete_step1",
                ];

                indigitall.topicsUnsubscribe(topicCodes, (topics) => {
                    console.log(topics);
                });
            })
            .catch((error) => {
                console.error("Error loading script");
            });
    }, []);

    const subsTopics = topics.filter((topic) => topic.subscribed);
    console.log(subsTopics);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Home />}></Route>
                <Route path="/logIn" element={<LogIn />}></Route>
                <Route path="/SignUp" element={<SignUp topics={topics} />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
