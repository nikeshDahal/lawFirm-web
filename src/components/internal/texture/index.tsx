import { MainHeadingProps } from "@/interface";
import Link from "next/link";
import React from "react";

const MainHeading: React.FC<MainHeadingProps> = ({
  link = null,
  title = null,
  description = null,
  customClass = "",
}) => {
  if (!title && !description) return;
  const Item = (
    <div className={customClass}>
      {title && (
        <p className="text-secondary font-bold uppercase tracking-[0.3em] mb-4">
          {title}
        </p>
      )}
      {description && (
        <h3 className="text-3xl font-serif text-[#1a1c1e]">{description}</h3>
      )}
    </div>
  );
  if (link) return <Link href={link}>{Item}</Link>;
  return Item;
};

const TitleHeading: React.FC<MainHeadingProps> = ({
  link = null,
  title = null,
  description = null,
}) => {
  if (!title && !description) return;
  const Item = (
    <div className="">
      {title && (
        <p className="text-secondary font-bold uppercase tracking-[0.2em] mb-4">
          {title}
        </p>
      )}
      {description && (
        <h3 className="text-[18px] font-serif text-[#1a1c1e] mb-12">
          {description}
        </h3>
      )}
    </div>
  );
  if (link) return <Link href={link}>{Item}</Link>;
  return Item;
};

export { MainHeading, TitleHeading };
