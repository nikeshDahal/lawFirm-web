import * as LucideIcons from "lucide-react";
import Link from "next/link";

type IconName = keyof typeof LucideIcons;
type Props = {
  icon: string;
  title?: string;
  descripiton?: string;
  link?: string | null;
};

const OverviewCard = ({
  link = null,
  icon = "Sacle",
  title = "Legal Strategy",
  descripiton = "Tailored legal solutions designed to protect your interests and secure your future through strategic planning.",
}: Props) => {
  const Icon = LucideIcons[icon as IconName] as LucideIcons.LucideIcon;
  const Item = (
    <div className="p-8 border group border-gray-100 rounded-lg transition-shadow group hover:bg-primary hover:text-white bg-primary-foreground/80">
      <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6  group-hover:bg-white transition-colors  group-hover:animate-bounce">
        {Icon && <Icon className="text-tertiary group-hover:text-primary" />}
      </div>
      <h4 className="text-start text-xl font-serif mb-4 line-clamp-1">
        {title}
      </h4>
      <p className="text-start text-gray-600 group-hover:text-white leading-relaxed line-clamp-3">
        {descripiton}
      </p>
    </div>
  );
  if (link) return <Link href={link}>{Item}</Link>;
  return Item;
};

export default OverviewCard;
