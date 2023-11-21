import "./form.css";
import { useIndigitall } from "../context/context";

export function FormEmail({onClick}) {
    const { topicsList, sendCustomEvent, topicsUnsubscribe, eventState, setEventState } = useIndigitall();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onClick()
        if (sendCustomEvent) {
            sendCustomEvent(
                {
                    eventType: "step2",
                    customData: {},
                    async: false,
                },
                (response) => {
                    setEventState({message: 'Cada vez está más cerca',
                    backgroundColor: 'lime'})
                    topicsList.map((topic) => {
                        if (
                            topic.code === "incomplete_step2" &&
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
                <input type="email" name="name" placeholder="Email" />
                <input type="email" name="date" placeholder="Confirm email"/>
                <button type="submit">Enviar</button>
            </form>
            <p style={{ backgroundColor: eventState.backgroundColor  }}>{eventState.message}</p>

        </>
    );
}
