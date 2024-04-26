import WorkspaceNavbar from "@/src/components/WorkspaceNavbar/WorkspaceNavbar";

const layout = ({ children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
        <div>{children}</div>
  )
}

export default layout