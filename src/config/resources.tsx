import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import ArticleService from "@/services/articles";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "scrumboard",
    meta: {
      label: "Reports",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <ProjectOutlined />,
    },
  },

  {
    name: "scrumboard",
    list: "/quotes/1",
    // create: "/scrumboard/kanban/create",
    // edit: "/scrumboard/kanban/edit/:id",
    meta: {
      label: "Engineering",
      parent: "scrumboard",
    },
  },
  {
    name: "task",
    list: "/quotes/2",
    // create: "/scrumboard/kanban/create",
    // edit: "/scrumboard/kanban/edit/:id",
    meta: {
      label: "Procurement",
      parent: "scrumboard",
    },
  },
  // {
  //   name: "taskStages",
  //   list: "/quotes/Bulk Material Procurement Progress Report & Look-Ahead Forecast",
  //   // create: "/scrumboard/kanban/stages/create",
  //   // edit: "/scrumboard/kanban/stages/edit/:id",
  //   meta: {
  //     label: "Construction",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "deals",
  //   list: "/quotes/Construction Progress Report & 6-Month Look-Ahead Forecast",
  //   create: "/contacts/create",
  //   edit: "/contacts/edit/:id",
  //   show: "/contacts/show/:id",
  //   meta: {
  //     label: "Budget",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "deal",
  //   list: "/quotes/Subcontracts Status Report",
  //   create: "/contacts/create",
  //   edit: "/contacts/edit/:id",
  //   show: "/contacts/show/:id",
  //   meta: {
  //     label: "Subcontract",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "dea",
  //   list: "/quotes/Manpower Status Report & 12-Month Look-Ahead Forecast",
  //   create: "/contacts/create",
  //   edit: "/contacts/edit/:id",
  //   show: "/contacts/show/:id",
  //   meta: {
  //     label: "Manpower",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "de",
  //   list: "/quotes/Machinery Status Report & 12-Month Look-Ahead Forecast",
  //   create: "/contacts/create",
  //   edit: "/contacts/edit/:id",
  //   show: "/contacts/show/:id",
  //   meta: {
  //     label: "Machinery",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "d",
  //   list: "/quotes/Cost & Cash Outflow Forecast",
  //   create: "/contacts/create",
  //   edit: "/contacts/edit/:id",
  //   show: "/contacts/show/:id",
  //   meta: {
  //     label: "Bulk Materials",
  //     parent: "scrumboard",
  //   },
  // },
];
