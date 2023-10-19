"use client";
import { useEffect, useState } from "react";
import { requestPermission } from "../utils/permission";
import { getMessaging, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import config from "../firebase.config";

export default function Home() {
  const [token, setToken] = useState("");
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

  useEffect(() => {
    requestPermission().then((token) => setToken(token as string));
  }, []);

  return (
    <main>
      <div style={{ wordWrap: "break-word" }}>{token}</div>
      <button
        onClick={() =>
          requestPermission().then((data) => setToken(data as string))
        }
      >
        permission
      </button>
    </main>
  );
}
