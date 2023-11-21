import React, { createContext, useContext, useState, useEffect } from "react";

const IndigitallContext = createContext();

export function useIndigitall() {
    return useContext(IndigitallContext);
}

export function IndigitallProvider({ children }) {
    const [isIndigitallReady, setIndigitallReady] = useState(false);
    const [topics, setTopics] = useState([]);
    const [sendCustomEvent, setSendCustomEvent] = useState(null);
    const [topicsSubscribe, setTopicsSubscribe] = useState(null);
    const [topicsUnsubscribe, setTopicsUnsubscribe] = useState(null);

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
                    setTopics(topics);
                });

                setSendCustomEvent(() => window.indigitall.sendCustomEvent);
                setTopicsSubscribe(() => window.indigitall.topicsSubscribe);
                setTopicsUnsubscribe(() => window.indigitall.topicsUnsubscribe);
                setIndigitallReady(true);
            }
        });
    }, []);

    return (
        <IndigitallContext.Provider
            value={{
                isIndigitallReady,
                topics,
                sendCustomEvent,
                topicsSubscribe,
                topicsUnsubscribe,
            }}>
            {children}
        </IndigitallContext.Provider>
    );
}
