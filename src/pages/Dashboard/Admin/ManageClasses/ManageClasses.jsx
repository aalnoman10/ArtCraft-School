import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageClasses = () => {

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
            fetch("http://localhost:5000/classes").then(
                (res) => res.json()
            ),
    })

    const handleUpdateStatus = (id, status) => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert(`This class status Updated: ${status}`)
                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mb-4">Manage Users</h3>
            <div className="overflow-x-auto py-5">
                <table className="table bg-white rounded-2xl">
                    {/* head */}
                    <thead className="bg-slate-300 rounded-2xl text-center">
                        <tr className="rounded-2xl">
                            <th className="font-bold">Class</th>
                            <th className="font-bold">Instructor</th>
                            <th className="font-bold">seats</th>
                            <th className="font-bold">Price</th>
                            <th className="font-bold">status</th>
                            <th className="font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {classes.map((singleClass) => <tr key={singleClass._id}>
                            <td>
                                <div className="flex flex-col justify-center items-center">
                                    <img src={singleClass.classImage} className="w-24" alt="" />
                                    <h3 className="font-semibold">{singleClass.className}</h3>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <h3 className="font-bold">{singleClass.instructorName}</h3>
                                    <p>{singleClass.instructorEmail}</p>
                                </div>
                            </td>
                            <td>{singleClass.seats}</td>
                            <td style={{ textAlign: "right" }}>$ {singleClass.price}</td>
                            <td>{singleClass.status}</td>
                            <td className="grid place-items-center">
                                <div className="space-y-1 w-[91px]">
                                    <button onClick={() => handleUpdateStatus(singleClass._id, 'approve')} disabled={singleClass.status !== "pending"} className="btn btn-primary normal-case w-[91px]">Approve</button>
                                    <button onClick={() => handleUpdateStatus(singleClass._id, 'dany')} disabled={singleClass.status !== "pending"} className="btn btn-error normal-case w-[91px]">Deny</button>
                                    {/* TODO : link external */}
                                    <Link to='/dashboard/admin/feedback' className="btn btn-primary normal-case w-[91px]">feedback</Link>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default ManageClasses;