import * as LucideIcons from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Content } from "../markup";

type IconName = keyof typeof LucideIcons;
type Props = {
  icon?: string;
  title?: string;
  content?: string | null;
  link?: string | null;
  pageImage?: string;
  metaData?: string;
};

const OverviewCard = ({
  link = null,
  icon = "Sacle",
  title = "Legal Strategy",
  pageImage = "",
  content = null,
  metaData = "",
}: Props) => {
  // const Icon = LucideIcons[icon as IconName] as LucideIcons.LucideIcon;

  const Item = (
    <div className="p-8 h-[320px] border group border-gray-100 rounded-lg transition-shadow group hover:bg-primary hover:text-white bg-primary-foreground/80 flex flex-col justify-between">
      {/* Icon */}
      <div className="w-15 h-14 bg-gray-50 rounded flex items-center justify-center mb-6 group-hover:bg-white transition-colors group-hover:animate-bounce overflow-hidden">
        <Image
          src={pageImage || "/noimage.png"}
          alt="icon"
          width={48}
          height={48}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.src = "/noimage.png";
          }}
        />
      </div>

      {/* Title */}
      <h4 className="text-start text-xl font-serif mb-4 line-clamp-1">
        {title}
      </h4>

      {/* Content */}
      {content && (
        <Content
          html={metaData}
          className="text-start text-gray-600 group-hover:text-white leading-relaxed line-clamp-3 mb-6 flex-1"
        />
      )}

      {/* Bottom line and button */}
      <div className="mt-auto pt-4 border-t border-primary group-hover:border-white">
        <button className="flex cursor-pointer items-center gap-2 text-[#1a1c1e] group-hover:text-white text-xs font-black uppercase tracking-[0.2em] group/btn">
          Read More{" "}
          <LucideIcons.ArrowRight
            size={14}
            className="text-secondary group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );

  if (link) return <Link href={link}>{Item}</Link>;
  return Item;
};

export default OverviewCard;
