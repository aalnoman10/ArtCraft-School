import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const EnrolledClasses = () => {
    const { user } = useContext(AuthContext)

    const { refetch, isLoading, data: enrolled = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () =>
            await fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/selected?email=${user?.email}&enroll=enrolled`).then(
                (res) => res.json()
            ),
    })

    const handleDeleteItem = (_id) => {
        const sureConfim = confirm("Are you sure delete this class")

        if (sureConfim) {
            fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/selected/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("class delete successfull")
                        refetch()
                    }
                })
        }
    }

    console.log(enrolled);

    if (isLoading) {
        return <div className="grid place-items-center h-[80vh]">
            <p className="text-3xl">Loading...</p>
        </div>
    }

    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">My All enrolled</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                <table className="table bg-white rounded-2xl min-w-[48vw] mx-auto">
                    {/* head */}
                    <thead className="bg-slate-300 rounded-2xl text-center">
                        <tr className="rounded-2xl">
                            <th className="font-bold">#</th>
                            <th className="font-bold">Class</th>
                            <th className="font-bold">Pay</th>
                            <th className="font-bold">View</th>
                            <th className="font-bold">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {enrolled && enrolled.map((enrolledItem, index) => <tr key={enrolledItem._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex flex-col">
                                    <img src={enrolledItem.classImage} className="w-28" alt="" />
                                    <h3 className="font-bold pt-2">{enrolledItem.className}</h3>
                                </div>
                            </td>
                            <td className="text-center">
                                <p className="font-medium">Successfully</p>
                            </td>
                            <td className="text-center">
                                <Link className="btn btn-primary text-white">View</Link>
                            </td>
                            <td className="text-center">
                                <button onClick={() => handleDeleteItem(enrolledItem._id)} className="btn btn-error text-white"><BsFillTrash3Fill size={20} /></button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;