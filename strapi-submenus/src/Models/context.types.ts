export interface ChildrenProp {
  children: React.ReactNode;
}

export interface ContextProp {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  submenuId: number | null;
  setSubmenuId: (val: any) => void;
}
