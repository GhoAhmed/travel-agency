import { Outlet } from "react-router"

const Adminlayout = () => {
    return (
        <div className="admin-layout">
            <h1>SideBar</h1>
            <div className="children">
                <Outlet />
            </div>
        </div>
    )
}

export default Adminlayout