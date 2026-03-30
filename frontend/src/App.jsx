import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ProblemsPage from "./pages/ProblemsPage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn } = useUser();
  return (
    <>
      {/* <h1 className="text-red-500 bg-amber-500 p-10 text-3xl">
        Welcome to the app
      </h1> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        ></Route>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
