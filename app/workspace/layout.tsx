import WorkspaceNavbar from "@/src/components/WorkspaceNavbar/WorkspaceNavbar";

const layout = ({ children,}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="flex px-16 py-10 max-md:flex-col pr-24">
        <div className="">
            <WorkspaceNavbar />
        </div>
        <div className=" w-[100%]">{children}</div>
    </div>
  )
}

export default layout