import React, { useState, useEffect } from "react";

const Pinchzoom = () => {
  const [fontSize, setFontSize] = useState(16); // 기본 글자 크기

  useEffect(() => {
    const preventZoom = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault(); // 기본 Pinch Zoom 차단
      }
    };

    document.addEventListener("touchmove", preventZoom, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventZoom);
    };
  }, []);

  const handlePinchZoom = (event) => {
    if (event.touches.length === 2) {
      event.preventDefault(); // 기본 확대 차단
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];

      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
      );

      const scaleFactor = distance / 200; // 확대 비율 조정
      const newFontSize = Math.min(Math.max(16 * scaleFactor, 16), 64);

      setFontSize(newFontSize);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // 가로 스크롤 제거
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#f5f5f5",
      }}
      onTouchMove={handlePinchZoom}
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
