import "./form.css";
import { useState } from "react";
import { useIndigitall } from "../context/context";

export function SignInForm() {
    const { topics, sendCustomEvent } = useIndigitall();
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (sendCustomEvent) {
            sendCustomEvent(
                {
                    eventType: "EVENTO_1",
                    customData: {},
                    async: false,
                },
                (response) => {
                    setMessage(
                        "Ahora estás más cerca de unite al mundo INDIGITALL"
                    );
                },
                (error) => {
                    //LOG ERROR
                }
            );
        }
    };

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" />
                <input type="date" name="date" />
                <button type="submit">Enviar</button>
            </form>
            <p>{message}</p>
        </>
    );
}
