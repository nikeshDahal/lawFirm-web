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
  customClass = "",
}) => {
  if (!title && !description) return null;

  const Item = (
    <div
      className={`${customClass} flex flex-col items-center text-center relative w-full`}
    >
      {/* Horizontal Lines with Heading */}
      {title && (
        <div className="flex items-center w-full mb-4 flex-wrap">
          {/* Left Line */}
          <div className="h-1 bg-secondary rounded-full flex-1 min-w-[20px] mr-2 md:mr-4"></div>

          {/* Heading */}
          <p className="text-secondary font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] break-words text-center">
            {title}
          </p>

          {/* Right Line */}
          <div className="h-1 bg-secondary rounded-full flex-1 min-w-[20px] ml-2 md:ml-4"></div>
        </div>
      )}

      {/* Description */}
      {description && (
        <p
          className={cn([
            "line-clamp-5",
            "text-gray-600 leading-relaxed font-light text-base sm:text-lg md:text-lg",
          ])}
        >
          {description}
        </p>
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
