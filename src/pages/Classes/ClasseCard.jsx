import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import useCheckRole from "../../hooks/useCheckRole";
import { Theme } from "../../Provider/ThemeProvider";

const ClasseCard = ({ sigleclass }) => {
    const { themeDark } = useContext(Theme)

    const { user, userLoding } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [isLoading, checkRole] = useCheckRole()
    const { classImage, className, instructorName, seats, price, _id } = sigleclass
    const check = seats === "0" || checkRole.role === "admin" || checkRole.role === "instructor"

    const handleSelect = () => {

        if (!user) {
            const sureConfirm = confirm("user to log in before selecting the course")
            if (sureConfirm) {
                return navigate('/login', { state: { from: location } })
            }
        } else {
            const select = {
                email: user.email,
                selectId: _id,
                classImage,
                className,
                price

            }

            fetch("https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/selected", {
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
                    }
                })
        }
    }

    if (user) {
        if (userLoding || isLoading) {
            return <div className="grid place-items-center h-[80vh]">
                <p className="text-3xl">Loading...</p>
            </div>
        }
    }

    return (
        <div className={`card shadow-md ${!themeDark && "bg-slate-800"} ${seats === "0" && "bg-red-400"}`}>
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