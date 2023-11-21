
export function TopicsList({topics}) {

    return (
        <ul className="topics">
            {topics.map((topic) => (
                <li key={topic.code}>
                    {topic.name}
                </li>
            ))}
        </ul>
    );
}


