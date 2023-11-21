import { useIndigitall } from "../context/context";

export function TopicsList() {
    const { topics } = useIndigitall();
    const subscribedTopics = topics.filter(
        topic => topic.subscribed === false
    );
    console.log(subscribedTopics)
    return (
        <div>
            <p>Te faltan estos pasos para lograrlo:</p>
            <ul>
                {subscribedTopics.map((topic) => (
                    <li key={topic.code}>{topic.name}</li>
                ))}
            </ul>
        </div>
    );
}
