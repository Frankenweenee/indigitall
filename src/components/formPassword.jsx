import "./form.css";
import { useIndigitall } from "../context/context";

export function FormPassword({ onClick }) {
    const {
        topicsList,
        sendCustomEvent,
        topicsUnsubscribe,
        eventState,
        setEventState,
    } = useIndigitall();
    const handleSubmit = (event) => {
        event.preventDefault();
        onClick();
        if (sendCustomEvent) {
            sendCustomEvent(
                {
                    eventType: "newUser",
                    customData: {},
                    async: false,
                },
                (response) => {
                    setEventState({
                        message:
                            "Sigue avanzando para llevar tu negocio al otro nivel con INDIGITALL",
                        backgroundColor: "lime",
                    });
                    topicsList.map((topic) => {
                        if (
                            topic.code === "incomplete_step3" &&
                            topicsUnsubscribe
                        ) {
                            topic.subscribed = false;
                            topicsUnsubscribe(topic.code, (error) => {
                                console.log(error);
                            });
                        }
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    };

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <input type="password" name="email" placeholder="Password" />
                <input
                    type="password"
                    name="email"
                    placeholder="confirm password"
                />
                <button type="submit">Enviar</button>
            </form>
            <p style={{ backgroundColor: eventState.backgroundColor }}>
                {eventState.message}
            </p>
        </>
    );
}
