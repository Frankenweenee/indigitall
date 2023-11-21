import { useIndigitall } from "../context/context";

export function TopicsList() {
    const { topicsList, eventState } = useIndigitall();
    const subscribedTopics = topicsList
        .filter((topic) => topic.subscribed === true)
        .reverse();
    return (
        <div>
            <p>Te faltan estos pasos para lograrlo:</p>
            <ul style={{color: eventState.backgroundColor}}>
                {subscribedTopics.map((topic) => (
                    <li key={topic.code}>{topic.name}</li>
                ))}
            </ul>
        </div>
    );
}

