import { SignInForm } from "./components/signInForm";
import { FormEmail } from "./components/emailForm";
import { FormPassword } from "./components/formPassword";
import { TopicsList } from "./components/topics";
import { useState } from "react";

export function SignUp() {
    const [formState, setFormState] = useState(1);
    const handleClick = () => {
        setFormState(formState + 1);
    };

    if (formState === 1) {
        return (
            <>
                <SignInForm onClick={handleClick} />
                <TopicsList />
            </>
        );
    } else if (formState === 2) {
        return (
            <>
                <FormEmail onClick={handleClick} />
                <TopicsList />
            </>
        );
    } else if (formState === 3) {
        return (
            <>
                <FormPassword onClick={handleClick} />
                <TopicsList />
            </>
        );
    }
}
