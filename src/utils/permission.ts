import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import config from "../firebase.config";
const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const firebase = initializeApp(config);
    const messaging = getMessaging(firebase);
    const token = await getToken(messaging, {
      vapidKey:
        "BDXBeTvmS4Nq5RRgj8Y_SOzucqD3MM8zH3XlhJ3CFVkzMtMn65EoDwfE4RYn9FWZywt8OUklGpeGfLI3QWLyXaA",
    });
  } else if (permission === "denied") {
    alert("Permission denied by user");
  }
};

export { requestPermission };
