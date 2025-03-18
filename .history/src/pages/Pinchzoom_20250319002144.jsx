import React, { useState, useEffect } from "react";

const Pinchzoom = () => {
  const [fontSize, setFontSize] = useState(16); // 기본 글자 크기

  useEffect(() => {
    let lastDistance = null;

    const handleTouchMove = (event) => {
      if (event.touches.length === 2) {
        // 두 손가락으로 핀치 줌 감지
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];

        const currentDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );

        if (lastDistance !== null) {
          const scaleFactor = currentDistance / lastDistance;
          const newFontSize = Math.min(
            Math.max(fontSize * scaleFactor, 16),
            64
          ); // 최소 16px, 최대 64px 제한
          setFontSize(newFontSize);
        }
        lastDistance = currentDistance;
      }
    };

    const handleTouchEnd = () => {
      lastDistance = null;
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [fontSize]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // 스크롤 방지
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2
        style={{
          fontSize: `${fontSize}px`,
          transition: "font-size 0.2s ease",
          maxWidth: "90%",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        핀치 줌 테스트 페이지
      </h2>
      <p
        style={{
          fontSize: `${fontSize}px`,
          transition: "font-size 0.2s ease",
          maxWidth: "90%",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        이 텍스트는 핀치 줌을 하면 자동으로 확대됩니다.
      </p>
      <p
        style={{
          fontSize: `${fontSize}px`,
          transition: "font-size 0.2s ease",
          maxWidth: "90%",
          whiteSpace: "normal",
          wordBreak: "break-word",
        }}
      >
        기본 크기는 16px이며, 최대 400%까지 확대 가능합니다.
      </p>
    </div>
  );
};

export default Pinchzoom;
