"use client";
import React from "react";

type Props = {
  content: string | null;
} & React.HTMLAttributes<HTMLParagraphElement>;

const MarkUpHTML: React.FC<Props> = ({ content, ...props }) => {
  if (!content) return null;

  return <p dangerouslySetInnerHTML={{ __html: content }} {...props} />;
};

interface ContentProps {
  html: string;
  className?: string;
}

function Content({ html, ...props }: ContentProps) {
  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default MarkUpHTML;
export { Content };
