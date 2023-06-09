import { Link } from "react-router-dom";

const MyClass = () => {
    {/* TODO : uncomplate */ }

    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mb-4">My Classes</h3>
            <div className="mt-10" >
                <div className="flex justify-end">
                    <Link to="/dashboard/instructor/add-a-class" className="btn btn-primary normal-case">Add A Class</Link>
                </div>
            </div>
        </div>
    );
};

export default MyClass;