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
    <div className="p-8 border border-gray-100 rounded-lg hover:shadow-xl transition-shadow group">
      <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 group-hover:bg-[#c5a059] transition-colors">
        {Icon && <Icon className="text-[#c5a059] group-hover:text-white" />}
      </div>
      <h4 className="text-xl font-serif mb-4">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{descripiton}</p>
    </div>
  );
  if (link) return <Link href={link}>{Item}</Link>;
  return Item;
};

export default OverviewCard;
