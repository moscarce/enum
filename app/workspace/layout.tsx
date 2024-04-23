import WorkspaceNavbar from "@/src/components/WorkspaceNavbar/WorkspaceNavbar";

const layout = ({ children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="flex px-16 py-10">
        <div className="">
            <WorkspaceNavbar />
        </div>
        <div>{children}</div>
    </div>
  )
}

export default layout