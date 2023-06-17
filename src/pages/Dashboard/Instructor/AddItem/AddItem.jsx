import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const AddItem = () => {
    const { user } = useContext(AuthContext)

    const handleAddClass = (e) => {
        e.preventDefault()

        const form = e.target
        const className = form.className.value
        const classImage = form.classImage.value
        const instructorName = form.instructorName.value
        const instructorEmail = form.instructorEmail.value
        const seats = form.seats.value
        const price = form.price.value

        const newClass = {
            className, classImage, instructorName, instructorEmail, seats, price, status: "pending", enroll: "0"
        }

        fetch("https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/classes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Class update successfull")
                }
            })
            .catch((err) => {
                alert("Opps is not update : ", err)
            });
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mb-4">Add a Class</h3>
            <form onSubmit={handleAddClass} className="mt-10" >
                <div className="md:flex gap-4">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Name*</span>
                        </label>
                        <input type="text" name="className" placeholder="Class Name" className="input input-bordered w-full" required />
                    </div>
                    {/* img */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Image*</span>
                        </label>
                        <input type="text" name="classImage" placeholder="Class Image" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    {/* instructor name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Instructor Name*</span>
                        </label>
                        <input type="text" name="instructorName" placeholder="Instructor Name" className="input input-bordered w-full" defaultValue={user.displayName} disabled />
                    </div>
                    {/* instructor email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Image*</span>
                        </label>
                        <input type="email" name="instructorEmail" placeholder="Instructor Email" className="input input-bordered w-full" defaultValue={user.email} disabled />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    {/* seats */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Available Seats*</span>
                        </label>
                        <input type="number" name="seats" placeholder="Available seats" className="input input-bordered w-full" required />
                    </div>
                    {/* price */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Price*</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary w-full my-4" value={"Add Class"} />
            </form>
        </div>
    );
};

export default AddItem;