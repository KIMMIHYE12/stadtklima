import React, { useState, useEffect } from "react";

const Pinchzoom = () => {
  const [scale, setScale] = useState(1); // 기본 배율 (100%)
  const scaleSteps = [1, 2.5, 4]; // 100%, 250%, 400% (단계별 확대)

  useEffect(() => {
    let lastDistance = null;

    const handleTouchMove = (event) => {
      if (event.touches.length === 2) {
        event.preventDefault(); // 기본 핀치 줌 방지
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];

        const currentDistance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );

        if (lastDistance !== null) {
          const scaleFactor = currentDistance > lastDistance ? 1 : -1; // 확대 또는 축소 방향 결정

          // 현재 배율에서 한 단계 위/아래로 이동
          const currentIndex = scaleSteps.indexOf(scale);
          let newScale = scaleSteps[currentIndex + scaleFactor] || scale;

          setScale(newScale); // 단계별 확대/축소 적용
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
  }, [scale]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center", // 중앙 정렬
        alignItems: "center", // 중앙 정렬
        overflow: "hidden", // 스크롤 방지
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: `${scale * 50}vw`, // 배율에 맞춰 박스 크기 조정
          maxWidth: "90vw", // 화면을 넘지 않도록 제한
          height: "auto",
          padding: `${scale * 1.5}rem`, // 배율에 맞춰 패딩 조정
          backgroundColor: "#ddd",
          borderRadius: `${scale * 10}px`, // 둥근 모서리 유지
          textAlign: "center",
          transition: "all 0.2s ease", // 부드러운 애니메이션
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: `${scale * 16}px`, // 배율에 맞춰 글자 크기 조정
            transition: "font-size 0.2s ease",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          핀치 줌 박스 테스트
        </h2>
        <p
          style={{
            fontSize: `${scale * 16}px`,
            transition: "font-size 0.2s ease",
            wordBreak: "break-word",
          }}
        >
          박스와 글자가 함께 확대됩니다.
        </p>
        <p
          style={{
            fontSize: `${scale * 16}px`,
            transition: "font-size 0.2s ease",
            wordBreak: "break-word",
          }}
        >
          확대 단계: {scale * 100}%
        </p>
      </div>
    </div>
  );
};

export default Pinchzoom;
