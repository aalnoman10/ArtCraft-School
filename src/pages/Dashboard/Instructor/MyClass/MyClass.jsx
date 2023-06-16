import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyClass = () => {
    const { user } = useContext(AuthContext)

    const { isLoading, data: classes = {} } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/classes?instructorEmail=${user?.email}`).then(
                (res) => res.json()
            ),
    })

    const handleUpdateStatus = () => { }

    if (isLoading) {
        <h1>Loading...</h1>
    }
    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">My All Classes</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                <table className="table bg-white rounded-2xl min-w-[48vw] mx-auto">
                    {/* head */}
                    <thead className="bg-slate-300 rounded-2xl text-center">
                        <tr className="rounded-2xl">
                            <th className="font-bold">#</th>
                            <th className="font-bold">Class</th>
                            <th className="font-bold">status</th>
                            <th className="font-bold">Enrolled</th>
                            <th className="font-bold">Feedback</th>
                            <th className="font-bold">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {classes.length > 0 && classes.map((singleClass, index) => <tr key={singleClass._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex flex-col">
                                    <img src={singleClass.classImage} className="w-28" alt="" />
                                    <h3 className="font-bold text-center">{singleClass.className}</h3>
                                </div>
                            </td>
                            <td>{singleClass.status}</td>
                            <td className="text-right">{singleClass.enroll ? singleClass.enroll : "0"}</td>
                            <td>
                                <button onClick={() => handleUpdateStatus()} className="btn btn-error normal-case">Feedback</button>
                            </td>
                            <td>
                                <Link to={`/dashboard/instructor/my-class/${singleClass._id}`} className="btn btn-error normal-case">Update</Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyClass;