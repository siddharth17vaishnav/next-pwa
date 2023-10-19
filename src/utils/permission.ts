import { getToken } from "firebase/messaging";
import { messaging } from "../firebase.config";

const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BDXBeTvmS4Nq5RRgj8Y_SOzucqD3MM8zH3XlhJ3CFVkzMtMn65EoDwfE4RYn9FWZywt8OUklGpeGfLI3QWLyXaA",
    });
    localStorage.setItem("token", token);
  } else if (permission === "denied") {
    alert("Permission denied by user");
  }
};

export { requestPermission };
