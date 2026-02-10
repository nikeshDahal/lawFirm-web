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
    <div className="p-8 h-[280px] border group border-gray-100 rounded-lg transition-shadow group hover:bg-primary hover:text-white bg-primary-foreground/80">
      <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6  group-hover:bg-white transition-colors  group-hover:animate-bounce">
        {/* {Icon && <Icon className="text-tertiary group-hover:text-primary" />} */}
        <Image
          height={40}
          width={40}
          alt="icon"
          onError={(e) => {
            e.currentTarget.src = "/noimage.png"; // your default image
          }}
          src={pageImage || "/noimage.png"}
        />
      </div>
      <h4 className="text-start text-xl font-serif mb-4 line-clamp-1">
        {title}
      </h4>
      {content && (
        <Content
          html={metaData}
          className="text-start text-gray-600 group-hover:text-white leading-relaxed line-clamp-3"
        />
      )}
    </div>
  );
  if (link) return <Link href={link}>{Item}</Link>;
  return Item;
};

export default OverviewCard;
