import React, { useState } from "react";
import type { FieldError } from "react-hook-form";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

type PasswordFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  register: any;
  error?: FieldError;
};

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="mb-4 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full border p-2 rounded-lg outline-none focus:ring-2 pr-10
            transition ${
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-blue-300"
            }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </motion.div>
  );
};

export default PasswordField;
