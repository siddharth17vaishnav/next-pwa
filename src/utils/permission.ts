import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import config from "../firebase.config";
import { Cookie } from "next-cookie";

const requestPermission = async () => {
  let token = null;
  const cookie = new Cookie();
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const firebase = initializeApp(config);
    const messaging = getMessaging(firebase);
    const tokens = await getToken(messaging, {
      vapidKey:
        "BDXBeTvmS4Nq5RRgj8Y_SOzucqD3MM8zH3XlhJ3CFVkzMtMn65EoDwfE4RYn9FWZywt8OUklGpeGfLI3QWLyXaA",
    });
    token = tokens;
    cookie.set("token", token);
  } else if (permission === "denied") {
    alert("Permission denied by user");
  }
  return token;
};

export { requestPermission };
