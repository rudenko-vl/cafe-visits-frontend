import toast from 'react-hot-toast';
export const notifySuccess = (text) => toast.success(text, {
        duration: 3000,
        style: {
          fontWeight: 600,
          fontSize: "18px",
            backgroundColor: "#24a92f",
            color: "white",
            width: "700px",
            height: "40px",}
});
    
export const notifyError = (text) => toast.error(text, {
        duration: 3000,
        style: {
          fontWeight: 700,
          fontSize: "18px",
            backgroundColor: "#da7676",
            color: "white",
            width: "500px",
            height: "40px",}
});
    
export const notifyWarning = (text) => toast(text, {
  icon: '❕',
        duration: 2000,
        style: {
          fontWeight: 700,
          fontSize: "18px",
            backgroundColor: "#f2fa0f",
            color: "#651fff",
            width: "500px",
            height: "40px",}
    });