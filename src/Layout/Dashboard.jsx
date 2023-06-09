import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

    const userType = false

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Page content here */}
                <div className="py-8">
                    <Outlet />
                </div>
                <label htmlFor="my-drawer-2" className="btn bg-black bg-opacity-10 normal-case absolute top-1 left-1 p-2 drawer-button lg:hidden">Menu</label>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h3 className="text-center text-3xl font-semibold py-4">ArtCartfn School</h3>
                    {/* student  */}
                    {userType === false && <>
                        <li><Link to="/dashboard/selected-classes">My Selected Classes</Link></li>
                        <li><Link to="/dashboard/enrolled-classes">My Enrolled Classes</Link></li>
                        <li><Link to='/dashboard/payment'>Payment</Link></li>
                        <li><Link to='/dashboard/payment-history'>Payment History</Link></li>
                    </>}

                    {/* Instructor dashboard */}
                    {userType === 'instructor' && <>
                        <li><Link to='/dashboard/instructor/add-a-class'>Add a Class</Link></li>
                        <li><Link to='/dashboard/instructor/my-class'>My Class</Link></li>
                    </>}

                    {/* admin */}
                    {userType === 'admin' && <>
                        <li><Link to='/dashboard/admin/manage-classes'>Manage Classes</Link></li>
                        <li><Link to='/dashboard/admin/manage-users'>Manage Users</Link></li>
                    </>}

                    <hr className="my-5" />
                    <li><Link to='/'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;