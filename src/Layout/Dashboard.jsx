import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

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
                    <li><Link to="/selected-classes">My Selected Classes</Link></li>
                    <li><Link to="/enrolled-classes">My Enrolled Classes</Link></li>
                    <li><Link to='/payment'>Payment</Link></li>
                    <li><Link to='/payment-history'>Payment History</Link></li>

                    {/* <li><Link to='/add-a-class'>Add a Class</Link></li>
                    <li><Link to='/my-class'>My Class</Link></li> */}

                    <hr className="my-5" />
                    <li><Link to='//'>Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;