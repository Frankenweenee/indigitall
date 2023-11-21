import React, { createContext, useContext, useState, useEffect } from "react";

const IndigitallContext = createContext();

export function useIndigitall() {
    return useContext(IndigitallContext);
}

export function IndigitallProvider({ children }) {
    const [isIndigitallReady, setIndigitallReady] = useState(false);
    const [topicsList, setTopicsList] = useState([]);
    const [sendCustomEvent, setSendCustomEvent] = useState(null);
    const [topicsSubscribe, setTopicsSubscribe] = useState(null);
    const [topicsUnsubscribe, setTopicsUnsubscribe] = useState(null);
    const [eventState, setEventState] = useState({})
    const [logOut, setLogOut] = useState(null)

    useEffect(() => {
        new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "/node_modules/indigitall-web-sdk/sdk.min.js";
            script.async = true;
            script.onload = resolve;
            script.onerror = () => reject(new Error("Error loading script"));
            document.body.appendChild(script);
        }).then(() => {
            if (window.indigitall) {
                window.indigitall.init({
                    appKey: "94cb9c3e-0749-450f-8445-49bf2b269d8a",
                    workerPath:
                        "/node_modules/indigitall-web-sdk/worker.min.js",
                    requestLocation: true,
                });

                window.indigitall.topicsList((topics) => {
                    setTopicsList(topics);
                });
                setSendCustomEvent(() => window.indigitall.sendCustomEvent);
                setTopicsSubscribe(() => window.indigitall.topicsSubscribe);
                setTopicsUnsubscribe(() => window.indigitall.topicsUnsubscribe);
                setLogOut(()=>window.indigitall.logOut);
                setIndigitallReady(true);
            }
        });

        setEventState({
            message: '',
            backgroundColor: 'red',
        });
    }, []);

    return (
        <IndigitallContext.Provider
            value={{
                isIndigitallReady,
                topicsList,
                sendCustomEvent,
                topicsSubscribe,
                topicsUnsubscribe,
                eventState,
                setEventState,
                logOut,
            }}>
            {children}
        </IndigitallContext.Provider>
    );
}
