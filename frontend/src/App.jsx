import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  UserButton,
} from "@clerk/react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>

      <SignInButton />
      <SignOutButton />
      <UserButton />
    </>
  );
}

export default App;
