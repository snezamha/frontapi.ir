export type SubChildren = {
  href: string;
  label: string;
  active: boolean;
  children?: SubChildren[];
};
export type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: string;
  submenus?: Submenu[];
  children?: SubChildren[];
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: string;
  submenus: Submenu[];
  id: string;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
  id: string;
};

export function getHorizontalMenuList(
  pathname: string,
  t: (key: string) => string
): Group[] {
  return [
    {
      groupLabel: t('dashboard'),
      id: 'dashboard',
      menus: [
        {
          id: 'dashboard',
          href: '/',
          label: t('dashboard'),
          active: pathname.includes('/'),
          icon: 'heroicons-outline:home',
          submenus: [],
        },
      ],
    },
  ];
}