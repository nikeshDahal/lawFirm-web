import { MainHeadingProps } from "@/interface";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// const MainHeading: React.FC<MainHeadingProps> = ({
//   link = null,
//   title = null,
//   description = null,
//   customClass = "",
// }) => {
//   if (!title && !description) return null;

//   const Item = (
//     <div
//       className={`${customClass} flex flex-col items-center text-center relative`}
//     >
//       {/* Horizontal Lines with Heading */}
//       {title && (
//         <div className="relative flex items-center w-full mb-4">
//           {/* Left Line */}
//           <div className="hidden md:block flex-1 h-1 bg-secondary rounded-full"></div>

//           {/* Heading */}
//           <p className="mx-4 text-secondary font-extrabold text-5xl uppercase tracking-[0.05em] relative z-10">
//             {title}
//           </p>

//           {/* Right Line */}
//           <div className="hidden md:block flex-1 h-1 bg-secondary rounded-full"></div>
//         </div>
//       )}

//       {/* Description */}
//       {description && (
//         <p
//           className={cn([
//             "line-clamp-5",
//             "text-gray-600 leading-relaxed font-light text-lg",
//           ])}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );

//   if (link) return <Link href={link}>{Item}</Link>;
//   return Item;
// };

const MainHeading: React.FC<MainHeadingProps> = ({
  link = null,
  title = null,
  description = null,
  customClass,
}) => {
  if (!title && !description) return null;

  const content = (
    <div
      className={cn(
        "flex flex-col items-center text-center relative w-full",
        customClass,
      )}
    >
      {/* Horizontal Lines + Title */}
      {title && (
        <div className="flex items-center justify-center w-full mb-4">
          {/* Left Line */}
          <div className="hidden md:block flex-1 h-0.5 bg-secondary rounded-full mr-6" />
          <div className="block md:hidden h-0.5 bg-secondary rounded-full w-6 sm:w-10 mr-3" />

          {/* Title */}
          <p className="text-gradient-gold font-extrabold text-xl sm:text-3xl md:text-5xl uppercase tracking-[0.05em] whitespace-nowrap">
            {title}
          </p>

          {/* Right Line */}
          <div className="hidden md:block flex-1 h-0.5 bg-secondary rounded-full ml-6" />
          <div className="block md:hidden h-0.5 bg-secondary rounded-full w-6 sm:w-10 ml-3" />
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="line-clamp-5 text-gray-600 leading-relaxed font-light text-base sm:text-lg md:text-lg">
          {description}
        </p>
      )}
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};

export default MainHeading;
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
