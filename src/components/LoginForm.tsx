import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import InputField from "./InputField";
import PasswordField from "./PasswordField";
import Button from "./Button";
import SocialButton from "./SocialButton";
import { loginSchema, type LoginFormValues } from "../types/loginSchema";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Submitted ✅:", data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto p-8 border rounded-2xl shadow-lg bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        register={register}
        error={errors.email}
      />

      <PasswordField
        label="Password"
        name="password"
        placeholder="Enter your password"
        register={register}
        error={errors.password}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex flex-col gap-3">
        <SocialButton provider="google" onClick={() => alert("Google Login")} />
        <SocialButton
          provider="twitter"
          onClick={() => alert("Twitter Login")}
        />
      </div>
    </motion.form>
  );
};

export default LoginForm;
