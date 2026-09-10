import React from "react";
import { useTheme } from "../context/ThemeContext";

const Logo = () => {
  const { isDark } = useTheme();

  return (
    <svg
      width="160"
      height="48"
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon badge */}
      <polygon
        points="24,4 42,14 42,34 24,44 6,34 6,14"
        fill="url(#hexGrad)"
        opacity="0.95"
      />
      {/* HB monogram */}
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="'Roboto', sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="white"
        letterSpacing="0.5"
      >
        HB
      </text>

      {/* Name text */}
      <text
        x="54"
        y="20"
        fontFamily="'Roboto', sans-serif"
        fontWeight="700"
        fontSize="15"
        fill={isDark ? "#e2eaf4" : "#1e3a5f"}
        letterSpacing="0.3"
      >
        Harihar
      </text>
      <text
        x="54"
        y="37"
        fontFamily="'Roboto', sans-serif"
        fontWeight="300"
        fontSize="13"
        fill={isDark ? "#60a5fa" : "#2563eb"}
        letterSpacing="2"
      >
        BIDARI
      </text>

      {/* Accent line */}
      <line
        x1="54"
        y1="40"
        x2="150"
        y2="40"
        stroke={isDark ? "#3b82f6" : "#2563eb"}
        strokeWidth="1"
        opacity="0.5"
      />

      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
