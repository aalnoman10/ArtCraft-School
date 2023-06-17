import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { BsFillTrash3Fill } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';

const MyClass = () => {
    const { user, userLoding } = useContext(AuthContext)

    const { refetch, isLoading, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: () =>
            fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/selected?email=${user?.email}`).then(
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
                    }
                    refetch()
                })
        }
    }

    // 
    const handlePayment = (_id) => {

        fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/selected/${_id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert(`Enrolled successfull`)
                }
            })
    }

    if (userLoding || isLoading) {
        return <div className="grid place-items-center h-[80vh]">
            <p className="text-3xl">Loading...</p>
        </div>
    }
    
    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">My All selected</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                <table className="table bg-white rounded-2xl min-w-[48vw] mx-auto">
                    {/* head */}
                    <thead className="bg-slate-300 rounded-2xl text-center">
                        <tr className="rounded-2xl">
                            <th className="font-bold">#</th>
                            <th className="font-bold">Class</th>
                            <th className="font-bold">Price</th>
                            <th className="font-bold">Pay</th>
                            <th className="font-bold">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {selected && selected.map((selectedItem, index) => <tr key={selectedItem._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex flex-col">
                                    <img src={selectedItem.classImage} className="w-28" alt="" />
                                    <h3 className="font-bold pt-2">{selectedItem.className}</h3>
                                </div>
                            </td>
                            <td className="text-right">$ {selectedItem.price}</td>
                            <td className="text-center">
                                {/* <Link to={`/dashboard/payment/${selectedItem._id}`} className="btn btn-primary text-white"><MdPayment size={20} /></Link> */}
                                {selectedItem.enroll ?
                                    <p className="font-medium">{selectedItem.enroll}</p> :
                                    <button onClick={() => handlePayment(selectedItem._id)} className="btn btn-primary text-white"><MdPayment size={20} /></button>}
                            </td>
                            <td className="text-center"><button onClick={() => handleDeleteItem(selectedItem._id)} className="btn btn-error text-white"><BsFillTrash3Fill size={20} /></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyClass;