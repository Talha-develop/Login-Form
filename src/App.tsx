import React from "react";
import LoginForm from "./components/LoginForm";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <LoginForm />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
