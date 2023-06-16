import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useCheckRole from "../../hooks/useCheckRole";

const ClasseCard = ({ sigleclass }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation()
    const [isLoading, checkRole] = useCheckRole()
    const { classImage, className, instructorName, seats, price, _id } = sigleclass
    const check = seats === "0" || checkRole.role === "admin" || checkRole.role === "instructor"

    const handleSelect = () => {

        if (!user) {
            const sureConfirm = confirm("user to log in before selecting the course")
            if (sureConfirm) {
                return <Navigate to='/login' state={{ from: location }} replace={true} ></Navigate>
            }
        } else {
            const select = {
                email: user.email,
                selectId: _id,
                classImage,
                className,
                price

            }

            fetch("http://localhost:5000/selected", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(select)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("item selected successfull")
                        console.log(data);
                    }
                })
        }
    }

    if (user) {
        if (isLoading) {
            return <div className="grid place-items-center h-[80vh]">
                <p className="text-3xl">Loading...</p>
            </div>
        }
    }

    return (
        <div className={`card shadow-md ${seats === "0" && "bg-red-400"}`}>
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{className}</h2>
                <p><strong>Instructor :</strong> {instructorName}</p>
                <p><strong>Price :</strong> {price}</p>
                <p><strong>Seats :</strong> {seats}</p>
                {''
                    ?
                    <button className={`btn btn-primary normal-case w-full`} >Already Selected</button>
                    :
                    <button onClick={handleSelect} className={`btn btn-primary normal-case w-full`} disabled={check}>Select</button>
                }
            </div>
        </div>
    );
};

export default ClasseCard;

// todo