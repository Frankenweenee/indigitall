import { useIndigitall } from "./context/context";
import { SignInForm } from "./components/signInForm";
import { TopicsList } from "./components/topics";

export function SignUp() {
    const { topics, sendCustomEvent, topicsSubscribe } = useIndigitall();

    if (topicsSubscribe) {
        let topicsCodes = topics.map((topic) => {
            return { ...topic, subscribed: true };
        });
        console.log(topics);
    }

    if (sendCustomEvent) {
        sendCustomEvent(
            {
                eventType: "EVENTO_1",
                customData: {},
                async: false,
            },
            (response) => {},
            (error) => {
                //LOG ERROR
            }
        );
    }
    return (
        <>
            <SignInForm topics={topics} />
            <TopicsList topics={topics} />
        </>
    );
}
