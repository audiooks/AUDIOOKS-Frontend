import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Show splash for 2.5s, then fade out
            const timer = setTimeout(() => {
                  setVisible(false);

                        // Trigger onFinish after fade completes (0.8s)
                              const finishTimer = setTimeout(() => {
                                      if (onFinish) onFinish();
                                            }, 800);

                                                  return () => clearTimeout(finishTimer);
                                                      }, 2500);

                                                          return () => clearTimeout(timer);
                                                            }, [onFinish]);

                                                              return (
                                                                  <div
                                                                        style={{
                                                                                position: "fixed",
                                                                                        top: 0,
                                                                                                left: 0,
                                                                                                        width: "100vw",
                                                                                                                height: "100vh",
                                                                                                                        minHeight: "100vh",
                                                                                                                                backgroundColor: "#000",
                                                                                                                                        backgroundImage:
                                                                                                                                                  "url('https://archive.org/download/audiooks_blue/audiooks_blue.png')",
                                                                                                                                                          backgroundSize: "cover",
                                                                                                                                                                  backgroundPosition: "center",
                                                                                                                                                                          backgroundRepeat: "no-repeat",
                                                                                                                                                                                  display: "flex",
                                                                                                                                                                                          justifyContent: "center",
                                                                                                                                                                                                  alignItems: "center",
                                                                                                                                                                                                          flexDirection: "column",
                                                                                                                                                                                                                  color: "white",
                                                                                                                                                                                                                          zIndex: 9999,
                                                                                                                                                                                                                                  overflow: "hidden",
                                                                                                                                                                                                                                          opacity: visible ? 1 : 0, // fade effect
                                                                                                                                                                                                                                                  transition: "opacity 0.8s ease-in-out",
                                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                  <img
                                                                                                                                                                                                                                                                          src="https://archive.org/download/img-20250811-wa-0028/IMG-20250811-WA0028.jpg"
                                                                                                                                                                                                                                                                                  alt="Audiooks Logo"
                                                                                                                                                                                                                                                                                          style={{
                                                                                                                                                                                                                                                                                                    width: 200,
                                                                                                                                                                                                                                                                                                              height: 200,
                                                                                                                                                                                                                                                                                                                        objectFit: "cover",
                                                                                                                                                                                                                                                                                                                                  marginBottom: 20,
                                                                                                                                                                                                                                                                                                                                            borderRadius: "50%",
                                                                                                                                                                                                                                                                                                                                                      border: "4px solid white",
                                                                                                                                                                                                                                                                                                                                                                boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
                                                                                                                                                                                                                                                                                                                                                                        }}
                                                                                                                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                                                                                                                    <h1 style={{ fontSize: 32, marginBottom: 10, fontWeight: "bold" }}>
                                                                                                                                                                                                                                                                                                                                                                                            Audiooks
                                                                                                                                                                                                                                                                                                                                                                                                  </h1>
                                                                                                                                                                                                                                                                                                                                                                                                        <p style={{ fontSize: 16, opacity: 0.9 }}>
                                                                                                                                                                                                                                                                                                                                                                                                                Learn with immersive audio stories
                                                                                                                                                                                                                                                                                                                                                                                                                      </p>
                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                            }