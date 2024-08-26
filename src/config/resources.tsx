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
  // {
  //   name: "events",
  //   list: "/calendar",
  //   create: "/calendar/create",
  //   edit: "/calendar/edit/:id",
  //   show: "/calendar/show/:id",
  //   meta: {
  //     label: "Calendar",
  //     // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
  //     icon: <CalendarOutlined />,
  //   },
  // },
  {
    name: "scrumboard",
    meta: {
      label: "Reports",
      // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
      icon: <ProjectOutlined />,
    },
  },

  {
    name: "tasks",
    list: "/quotes/Engineering Progress Report & 6-Month Look-Ahead Forecast",
    // create: "/scrumboard/kanban/create",
    // edit: "/scrumboard/kanban/edit/:id",
    meta: {
      label: "Engineering",
      parent: "scrumboard",
    },
  },
  {
    name: "task",
    list: "/quotes/Procurement Progress Report & Schedule",
    // create: "/scrumboard/kanban/create",
    // edit: "/scrumboard/kanban/edit/:id",
    meta: {
      label: "Procurement",
      parent: "scrumboard",
    },
  },
  {
    name: "taskStages",
    list: "/quotes/Bulk Material Procurement Progress Report & Look-Ahead Forecast",
    // create: "/scrumboard/kanban/stages/create",
    // edit: "/scrumboard/kanban/stages/edit/:id",
    meta: {
      label: "Construction",
      parent: "scrumboard",
    },
  },
  {
    name: "deals",
    list: "/quotes/Construction Progress Report & 6-Month Look-Ahead Forecast",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Budget",
      parent: "scrumboard",
    },
  },
  {
    name: "deal",
    list: "/quotes/Subcontracts Status Report",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Subcontract",
      parent: "scrumboard",
    },
  },
  {
    name: "dea",
    list: "/quotes/Manpower Status Report & 12-Month Look-Ahead Forecast",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Manpower",
      parent: "scrumboard",
    },
  },
  {
    name: "de",
    list: "/quotes/Machinery Status Report & 12-Month Look-Ahead Forecast",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Machinery",
      parent: "scrumboard",
    },
  },
  {
    name: "d",
    list: "/quotes/Cost & Cash Outflow Forecast",
    create: "/contacts/create",
    edit: "/contacts/edit/:id",
    show: "/contacts/show/:id",
    meta: {
      label: "Bulk Materials",
      parent: "scrumboard",
    },
  },
  {
    name: "deals",
    identifier: "finalize-deals",
    edit: "/scrumboard/sales/:id/finalize",
    meta: {
      hide: true,
    },
  },
  {
    name: "dealStages",
    create: "/scrumboard/sales/stages/create",
    edit: "/scrumboard/sales/stages/edit/:id",
    list: "/scrumboard/sales",
    meta: {
      hide: true,
    },
  },

  // {
  //   name: "companies",
  //   identifier: "sales-companies",
  //   create: "/scrumboard/sales/create/company/create",
  //   meta: {
  //     hide: true,
  //   },
  // },
  // {
  //   name: "contacts",
  //   list: "/contacts",
  //   create: "/contacts/create",
  //   edit: "/contacts/edit/:id",
  //   show: "/contacts/show/:id",
  //   meta: {
  //     label: "Contacts",
  //     // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
  //     icon: <TeamOutlined />,
  //   },
  // },
  // {
  //   name: "quotes",
  //   list: "/quotes",
  //   create: "/quotes/create",
  //   edit: "/quotes/edit/:id",
  //   show: "/quotes/show/:id",
  //   meta: {
  //     label: "Quotes",
  //     // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
  //     icon: <ContainerOutlined />,
  //   },
  // },
  // {
  //   name: "administration",
  //   meta: {
  //     label: "Administration",
  //     // @ts-expect-error Ant Design Icon's v5.0.1 has an issue with @types/react@^18.2.66
  //     icon: <CrownOutlined />,
  //   },
  // },
  // {
  //   name: "settings",
  //   list: "/administration/settings",
  //   meta: {
  //     label: "Settings",
  //     parent: "administration",
  //   },
  // },
  // {
  //   name: "audits",
  //   list: "/administration/audit-log",
  //   meta: {
  //     label: "Audit Log",
  //     parent: "administration",
  //   },
  // },
];
