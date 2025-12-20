import * as LucideIcons from "lucide-react";

interface BasicTitleProps {
  title?: string;
  description?: string | React.ReactElement;
}
interface FirmOverviewItem extends BasicTitleProps {
  id: number;
  icon: string;
}

interface PracticeProps {
  id: string; // slug e.g. "corporate-commercial-law"
  title: string;
  subtitle: string;
  metaDescription: string;
  category: "Primary Practice" | "Secondary Practice";
  leadPartner: string;
  icon: string;
  image: string;
  overview: string;
  detailedContent: string; // HTML string
}

interface MainHeadingProps extends BasicTitleProps {
  link?: string;
  customClass?: string;
}

type IconName = keyof typeof LucideIcons;
export type {
  BasicTitleProps,
  FirmOverviewItem,
  MainHeadingProps,
  IconName,
  PracticeProps,
};
