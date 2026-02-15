import React from "react";

interface GradientIconProps {
  icon: React.ElementType;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const GradientIcon: React.FC<GradientIconProps> = ({
  icon: Icon,
  size = 32,
  strokeWidth = 2,
  className = "",
}) => {
  const gradientId = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CFB06A" />
          <stop offset="45%" stopColor="#D9B44A" />
          <stop offset="100%" stopColor="#F2D57E" />
        </linearGradient>
      </defs>

      <Icon
        width={size}
        height={size}
        stroke={`url(#${gradientId})`}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default GradientIcon;
