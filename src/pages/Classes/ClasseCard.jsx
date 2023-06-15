import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ClasseCard = ({ sigleclass }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation()

    const { classImage, className, instructorName, seats, price } = sigleclass
    const check = !seats

    const handleSelect = () => {

        if (!user) {
            const sureConfirm = confirm("user to log in before selecting the course")
            if (sureConfirm) {
                return <Navigate to='/login' state={{ from: location }} replace={true} ></Navigate>
            }
        } else {
            // todo : add patch function
        }

    }

    return (
        <div className={`card shadow-md ${seats === 0 && "bg-red-400"}`}>
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{className}</h2>
                <p><strong>Instructor :</strong> {instructorName}</p>
                <p><strong>Price :</strong> {price}</p>
                <p><strong>Seats :</strong> {seats}</p>
                <button onClick={handleSelect} className={`btn btn-primary normal-case w-full`} disabled={check && true}>Select</button>
            </div>
        </div>
    );
};

export default ClasseCard;