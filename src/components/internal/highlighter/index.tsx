import React from "react";

type Props = {
  text?: string;
  className?: string;
};

const HighlightLastWord: React.FC<Props> = ({ text = "", className }) => {
  const highlightLastWord = (value: string) => {
    const words = value.trim().split(" ");
    if (words.length === 0) return value;

    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")} <span className="text-secondary">{lastWord}</span>
      </>
    );
  };

  return <span className={className}>{highlightLastWord(text)}</span>;
};

export default HighlightLastWord;
