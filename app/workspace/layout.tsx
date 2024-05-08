import Message from "@/src/components/Message/Message";
import WorkspaceNavbar from "@/src/components/WorkspaceNavbar/WorkspaceNavbar";


const layout = ({ children,}: Readonly<{children: React.ReactNode;}>) => {


  return (
    <div>
      <div>
        <Message />
      </div>
      <div className="flex px-10 py-10 max-md:flex-col max-md:px-4">
          <div>
              <p className="hidden max-md:block font-normal mb-0">Switch between tabs</p>
              <WorkspaceNavbar />
          </div>
          <div className=" w-[100%]">{children}</div>
      </div>
    </div>
  )
}

export default layout