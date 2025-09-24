import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

type SocialButtonProps = {
  provider: "google" | "twitter";
  onClick?: () => void;
};

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onClick }) => {
  const getConfig = () => {
    if (provider === "google") {
      return { text: "Login with Google", icon: <FcGoogle size={20} /> };
    }
    return {
      text: "Login with Twitter",
      icon: <FaTwitter size={20} color="#1DA1F2" />,
    };
  };

  const { text, icon } = getConfig();

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-2 w-full py-2 border rounded-lg font-medium bg-white hover:bg-gray-100 transition"
    >
      {icon}
      {text}
    </motion.button>
  );
};

export default SocialButton;
