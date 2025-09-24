import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  disabled,
}) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`w-full py-2 rounded-lg bg-blue-600 text-white font-semibold 
        hover:bg-blue-700 disabled:bg-gray-400 transition`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
