import React from "react";
import type { FieldError } from "react-hook-form";
import { motion } from "framer-motion";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: FieldError;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full border p-2 rounded-lg outline-none focus:ring-2 
          transition ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </motion.div>
  );
};

export default InputField;
