import { useQuery } from "@tanstack/react-query";
import { MdIntegrationInstructions } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

const ManageUsers = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>
            await fetch('https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/users').then(
                (res) => res.json()
            ),
    })

    const handleUserrole = (_id, role) => {
        const makeSure = confirm(`are you sure this user will be ${role}`)

        if (makeSure) {
            fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/users/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ role })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert(`user has ${role} successfull`)
                        refetch()
                    } else {
                        alert("user role is not update")
                    }
                })
        }
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mb-4">Manage Users</h3>
            <div className="overflow-x-auto py-5">
                <table className="table bg-white rounded-2xl">
                    {/* head */}
                    <thead className="bg-slate-300 rounded-2xl">
                        <tr className="rounded-2xl">
                            <th className="font-bold">#</th>
                            <th className="font-bold">Name</th>
                            <th className="font-bold">Email</th>
                            <th className="font-bold">Make Instructor</th>
                            <th className="font-bold">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {users.map((user, index) => <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="text-center">{user.role === "instructor" ? "instructor" : <button onClick={() => handleUserrole(user._id, "instructor")} className="btn"><MdIntegrationInstructions size={30} /></button>}</td>
                            <td className="text-center">{user.role === "admin" ? "admin" : <button onClick={() => handleUserrole(user._id, "admin")} className="btn"><GrUserAdmin size={30} /></button>}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;