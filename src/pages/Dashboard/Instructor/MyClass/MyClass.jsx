import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyClass = () => {
    const { user, userLoding } = useContext(AuthContext)
    const [feedbackItem, setFeedbackItem] = useState('')

    const { isLoading, data: classes = {} } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: () =>
            fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/classes?instructorEmail=${user?.email}`).then(
                (res) => res.json()
            ),
    })

    if (userLoding || isLoading) {
        return <div className="grid place-items-center h-[80vh]">
            <p className="text-3xl">Loading...</p>
        </div>
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
                                <span onClick={() => setFeedbackItem(singleClass)}><button className="btn" onClick={() => window.my_modal_1.showModal()}>Feedback</button></span>
                            </td>
                            <td>
                                <Link to={`/dashboard/instructor/my-class/${singleClass._id}`} className="btn btn-error normal-case">Update</Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Feedback of {feedbackItem.className}</h3>
                    <p className="py-4">{feedbackItem.feedback ? feedbackItem.feedback : 'not a feedback'}</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

        </div>

    );
};

export default MyClass;