import { icons } from "../../utils/icons";

export const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: icons.dashboardIcon,
    path: "/student/dashboard/",
    badge: "New",
  },
  {
    id: "profile",
    label: "Profile",
    icon: icons.profile,
    path: "/profile",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: icons.activity,
    path: "/analytics",
    subMenu: [
      {
        id: "traffic",
        label: "Traffic & Visitors",
        path: "/analytics/traffic",
      },
      {
        id: "conversion",
        label: "Conversion Rate",
        path: "/analytics/conversions",
      },
      { id: "funnels", label: "Funnels", path: "/analytics/funnels" },
      { id: "cohorts", label: "Cohort Analysis", path: "/analytics/cohorts" },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    icon: icons.chart,
    path: "/sales",
    count: 50,
    subMenu: [
      { id: "revenue", label: "Revenue KPIs", path: "/sales/revenue" },
      { id: "pipeline", label: "Pipeline", path: "/sales/pipeline" },
      { id: "targets", label: "Targets vs Actuals", path: "/sales/targets" },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: icons.kanban,
    path: "/projects",
    subMenu: [
      {
        id: "active-projects",
        label: "Active Projects",
        path: "/projects/active",
      },
      {
        id: "sprints",
        label: "Sprints & Velocity",
        path: "/projects/sprints",
      },
      { id: "risks", label: "Risks", path: "/projects/risks" },
    ],
  },
  {
    id: "messages",
    label: "Messages",
    icon: icons.messages,
    path: "/messages",
    badge: 3,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: icons.calendar,
    path: "/calendar",
    badge: 1,
  },
  {
    id: "team",
    label: "Team",
    icon: icons.users,
    path: "/team",
    badge: 5,
    subMenu: [
      {
        id: "performance",
        label: "Team Performance",
        path: "/team/performance",
      },
      { id: "workload", label: "Workload", path: "/team/workload" },
    ],
  },
  {
    id: "members",
    label: "Members",
    icon: icons.user,
    path: "/members",
    badge: 12,
  },
  {
    id: "reports",
    label: "Reports",
    icon: icons.file,
    path: "/reports",
    count: 20,
  },
  {
    id: "settings",
    label: "Settings",
    icon: icons.settings,
    path: "/settings",
  },
];
