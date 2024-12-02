export type Menu = {
  id: number;
  icon: JSX.Element;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
