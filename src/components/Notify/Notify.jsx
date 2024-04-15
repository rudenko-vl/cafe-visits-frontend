import toast from "react-hot-toast";
export const notifySuccess = (text) =>
  toast.success(text, {
    duration: 1500,
    style: {
      fontWeight: 600,
      fontSize: "18px",
      backgroundColor: "#24a92f",
      color: "white",
      width: "700px",
      height: "40px",
    },
  });

export const notifyError = (text) =>
  toast.error(text, {
    duration: 1500,
    style: {
      fontWeight: 700,
      fontSize: "18px",
      backgroundColor: "#da7676",
      color: "white",
      width: "500px",
      height: "40px",
    },
  });

export const notifyWarning = (text) =>
  toast(text, {
    icon: "❕",
    duration: 5000,
    style: {
      fontWeight: 700,
      fontSize: "22px",
      backgroundColor: "#f4f87f",
      color: "#000acb",
      width: "500px",
      height: "60px",
    },
  });
