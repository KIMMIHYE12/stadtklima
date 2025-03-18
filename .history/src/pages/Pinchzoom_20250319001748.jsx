import React, { useState, useEffect } from "react";

const Pinchzoom = () => {
  const [fontSize, setFontSize] = useState(1); // 기본 크기 1rem (16px)

  useEffect(() => {
    const handleResize = () => {
      // 현재 화면 크기에 따라 글자 크기 자동 조정 (최대 400%)
      const scaleFactor = Math.min(window.innerWidth / 320, 4); // 최대 400%
      setFontSize(scaleFactor);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          fontSize: `${fontSize}rem`, // 1rem = 기본 16px (최대 64px까지 조정)
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
          fontSize: `${fontSize}rem`,
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
          fontSize: `${fontSize}rem`,
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
