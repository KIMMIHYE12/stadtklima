import React, { useState, useEffect } from "react";

const Pinchzoom = () => {
  const [fontSize, setFontSize] = useState(16); // 기본 글자 크기

  useEffect(() => {
    const handleResize = () => {
      // 현재 화면 크기에 따라 글자 크기 조정 (최대 400%)
      const newFontSize = Math.min(16 * (window.innerWidth / 320), 64);
      setFontSize(newFontSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{ fontSize: `${fontSize}px`, transition: "font-size 0.2s ease" }}
      >
        핀치 줌 테스트 페이지
      </h2>
      <p
        style={{ fontSize: `${fontSize}px`, transition: "font-size 0.2s ease" }}
      >
        이 텍스트는 핀치 줌을 하면 자동으로 확대됩니다.
      </p>
      <p
        style={{ fontSize: `${fontSize}px`, transition: "font-size 0.2s ease" }}
      >
        기본 크기는 16px이며, 최대 400%까지 확대 가능합니다.
      </p>
    </div>
  );
};

export default Pinchzoom;
