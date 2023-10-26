import React from "react";
import {
  Dashboard,
  Done,
  AddCircleOutline,
  Logout,
  AddChart,
} from "@styled-icons/material";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: "/dashboard",
  },
  {
    name: "Additional",
    icon: AddCircleOutline,
    url: "/chart",
    subItems: [
      {
        name: "3d Chart",
        icon: AddChart,
        url: "/chart",
      },
      {
        name: "CMS1",
        icon: Done,
        url: "/cmsTableOne",
      },
      {
        name: "CMS2",
        icon: Done,
        url: "/cmsTableTwo",
      },
    ],
  },
];

export type MenuItem = {
  name: string;
  icon: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
