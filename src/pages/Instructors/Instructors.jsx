import InstuctorCard from "./InstuctorCard";
import { useQuery } from '@tanstack/react-query'

const Instructors = ({ heading, size }) => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: () =>
            fetch('https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/users?instructors=true').then(
                (res) => res.json()
            ),
    })

    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">{heading ? heading : "All Instructor"}</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                {instructors.slice(0, size).map(instructor => <InstuctorCard key={instructor._id} instructor={instructor} />)}
            </div>
        </div>
    );
};

export default Instructors;