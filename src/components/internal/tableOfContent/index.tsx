// "use client";

// import { useEffect, useState } from "react";

// interface Heading {
//   id: string;
//   text: string;
//   level: number;
// }

// export default function TableOfContents() {
//   const [headings, setHeadings] = useState<Heading[]>([]);
//   const [activeId, setActiveId] = useState<string>("");

//   // Generate headings
//   useEffect(() => {
//     const elements = Array.from(
//       document.querySelectorAll(
//         ".publication-content h2, .publication-content h3",
//       ),
//     ) as HTMLElement[];

//     const mapped: Heading[] = elements.map((el, i) => {
//       const id = `heading-${i}`;
//       el.setAttribute("id", id);
//       el.style.scrollMarginTop = "6rem"; // sticky header offset
//       return {
//         id,
//         text: el.textContent || "",
//         level: parseInt(el.tagName.substring(1)),
//       };
//     });

//     setHeadings(mapped);
//   }, []);

//   // Highlight active heading on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!headings.length) return;

//       const middleOfScreen = window.scrollY + window.innerHeight / 3; // pick 1/3 of screen height
//       let currentId = headings[0].id;

//       for (const heading of headings) {
//         const el = document.getElementById(heading.id);
//         if (!el) continue;

//         if (el.offsetTop <= middleOfScreen) {
//           currentId = heading.id;
//         } else {
//           break; // stop at the first heading below middle of screen
//         }
//       }

//       setActiveId(currentId);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // initial check
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [headings]);

//   if (!headings.length) return null;

//   return (
//     <aside className="hidden lg:block lg:w-64 sticky top-32 self-start">
//       <div className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
//         <h4 className="font-semibold mb-3 text-gray-500 text-sm uppercase tracking-wide">
//           Table of Content
//         </h4>
//         <ul className="space-y-2 text-sm list-none p-0 m-0">
//           {headings.map((h) => (
//             <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
//               <a
//                 href={`#${h.id}`}
//                 className={`block transition-colors duration-200 ${
//                   activeId === h.id
//                     ? "font-bold text-black"
//                     : "text-gray-400 hover:text-primary"
//                 }`}
//               >
//                 {h.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// }

"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Generate headings
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        ".publication-content h2, .publication-content h3",
      ),
    ) as HTMLElement[];

    const mapped: Heading[] = elements.map((el, i) => {
      const id = `heading-${i}`;
      el.setAttribute("id", id);
      el.style.scrollMarginTop = "6rem"; // sticky header offset
      return {
        id,
        text: el.textContent || "",
        level: parseInt(el.tagName.substring(1)),
      };
    });

    setHeadings(mapped);
  }, []);

  // Highlight active heading on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!headings.length) return;

      const middleOfScreen = window.scrollY + window.innerHeight / 3; // detect active heading
      let currentId = headings[0].id;

      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (!el) continue;

        if (el.offsetTop <= middleOfScreen) {
          currentId = heading.id;
        } else {
          break; // stop at first heading below middle
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="hidden lg:block lg:w-80 sticky top-32 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-gray-50 p-6 rounded-2xl border shadow-sm">
        <h4 className="font-semibold mb-3 text-gray-500 text-sm uppercase tracking-wide">
          Table of Content
        </h4>
        <hr className="border-gray-200 mb-4 border-solid w-full  " />
        <ul className="space-y-2 text-sm list-none p-0 m-0">
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
              <a
                href={`#${h.id}`}
                className={`block transition-colors duration-200 ${
                  activeId === h.id
                    ? "font-bold text-black"
                    : "text-gray-400 hover:text-primary"
                }`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
