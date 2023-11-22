import "./form.css";
import { useIndigitall } from "../context/context";

export function SignInForm({ onClick }) {
    const { topicsList, sendCustomEvent, topicsUnsubscribe, setEventState } =
        useIndigitall();
    const handleSubmit = (event) => {
        event.preventDefault();
        onClick();
        sendCustomEvent(
            {
                eventType: "step1",
                customData: {},
                async: false,
            },
            (response) => {
                setEventState({
                    message:
                        "Ahora estás más cerca de unite al mundo INDIGITALL",
                    backgroundColor: "blue",
                });
                topicsList.map((topic) => {
                    if (
                        topic.code === "incomplete_step1" &&
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
    };

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" />
            <input type="date" name="date" />
            <button type="submit">Enviar</button>
        </form>
    );
}
