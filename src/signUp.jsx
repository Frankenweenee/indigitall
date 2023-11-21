import { SignInForm } from "./components/signInForm";
import { TopicsList } from "./components/topics";

export function SignUp({topics}) {

  return (
    <>
    <SignInForm />
    <TopicsList topics={topics}/>
    </>
  )
}

