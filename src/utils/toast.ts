import toast from "react-hot-toast";

// Success Toast
export const showSuccess = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: "12px",
      background: "#10b981", // Tailwind green-500
      color: "#fff",
    },
    iconTheme: {
      primary: "white",
      secondary: "#10b981",
    },
  });
};

// Error Toast
export const showError = (message: string) => {
  toast.error(message, {
    style: {
      borderRadius: "12px",
      background: "#ef4444", // Tailwind red-500
      color: "#fff",
    },
    iconTheme: {
      primary: "white",
      secondary: "#ef4444",
    },
  });
};

// Info Toast
export const showInfo = (message: string) => {
  toast(message, {
    style: {
      borderRadius: "12px",
      background: "#3b82f6", // Tailwind blue-500
      color: "#fff",
    },
  });
};
