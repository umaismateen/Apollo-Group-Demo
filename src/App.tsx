import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import HeroSection from "./components/HeroSection";
import Characters from "./components/Characters";
import Footer from "./components/Footer";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const toast = useToast();

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
      if (navigator.onLine) {
        toast({
          position: "top",
          title: "You are online.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "You are offline.",
          description: "Please turn on your Wi-Fi to connect.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline, toast]);

  return (
    <>
      <HeroSection />
      <Characters />
      <Footer />
    </>
  );
}

export default App;
