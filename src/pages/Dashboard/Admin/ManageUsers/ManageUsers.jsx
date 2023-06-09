import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>
            await fetch('/user.json').then(
                (res) => res.json()
            ),
    })

    return (
        <div>
            {/* TODO : uncomplate */}
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
                            <td className="text-center"><button className="btn">Ins</button></td>
                            <td className="text-center"><button className="btn">Ad</button></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;