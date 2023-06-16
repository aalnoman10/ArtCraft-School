import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
    const id = useParams().id

    const { data: classItem = '' } = useQuery({
        queryKey: ['classItem', id],
        queryFn: () =>
            fetch(`http://localhost:5000/classes/${id}`).then(
                (res) => res.json()
            ),
    })

    const { className, classImage, instructorName, instructorEmail, seats, price } = classItem

    const handleUpdateClass = (e) => {
        e.preventDefault()

        const form = e.target
        const className = form.className.value
        const classImage = form.classImage.value
        const seats = form.seats.value
        const price = form.price.value

        const updateClass = {
            className, classImage, seats, price
        }

        fetch(`http://localhost:5000/classes/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
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
            <form onSubmit={handleUpdateClass} className="mt-10" >
                <div className="md:flex gap-4">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Name*</span>
                        </label>
                        <input type="text" name="className" placeholder="Class Name" className="input input-bordered w-full" defaultValue={className} required />
                    </div>
                    {/* img */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Image*</span>
                        </label>
                        <input type="text" name="classImage" placeholder="Class Image" className="input input-bordered w-full" defaultValue={classImage} required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    {/* instructor name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Instructor Name*</span>
                        </label>
                        <input type="text" name="instructorName" placeholder="Instructor Name" className="input input-bordered w-full" defaultValue={instructorName} disabled />
                    </div>
                    {/* instructor email */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Image*</span>
                        </label>
                        <input type="email" name="instructorEmail" placeholder="Instructor Email" className="input input-bordered w-full" defaultValue={instructorEmail} disabled />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    {/* seats */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Available Seats*</span>
                        </label>
                        <input type="number" name="seats" placeholder="Available seats" className="input input-bordered w-full" defaultValue={seats} required />
                    </div>
                    {/* price */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Price*</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} required />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary w-full my-4" value={"Update Class"} />
            </form>
        </div>
    );
};

export default UpdateItem;