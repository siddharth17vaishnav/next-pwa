"use client";
import { useEffect } from "react";
import { requestPermission } from "../utils/permission";
import { getMessaging, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import config from "../firebase.config";
import { Cookie } from "next-cookie";

export default function Home() {
  const cookie = new Cookie();
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const firebase = initializeApp(config);
      const messaging = getMessaging(firebase);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);
        // Handle the received push notification while the app is in the foreground
        // You can display a notification or update the UI based on the payload
      });
      return () => {
        unsubscribe(); // Unsubscribe from the onMessage event
      };
    }
  }, []);

  const token = cookie.get("token");
  const isServer = typeof window !== "undefined";
  return (
    <main>
      {isServer && <div>TOKEN: {token as string}</div>}
      <button onClick={requestPermission}>permission</button>
    </main>
  );
}
