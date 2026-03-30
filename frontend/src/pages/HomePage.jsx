import { SignIn, SignInButton, SignOutButton } from "@clerk/react";
import React from "react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <div>
      this is home page
      <button
        className="btn btn-primary"
        onClick={() => toast.success("This is the success toast message")}
      >
        click me to get toast
      </button>
    </div>
  );
}

export default HomePage;
