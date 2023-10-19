"use client";
import { useEffect } from "react";
import { requestPermission } from "../utils/permission";
import { messaging } from "../firebase.config";
import { onMessage } from "firebase/messaging";

export default function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
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
    requestPermission();
  }, []);
  const token = localStorage.getItem("token");
  return <main>HELLO WORLD {token}</main>;
}
