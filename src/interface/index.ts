interface BasicTitleProps {
  title?: string;
  description?: string | React.ReactElement;
}
interface FirmOverviewItem extends BasicTitleProps {
  id: number;
  icon: string;
}

interface MainHeadingProps extends BasicTitleProps {
  link?: string;
}

export type { BasicTitleProps, FirmOverviewItem, MainHeadingProps };
