import InstuctorCard from "./InstuctorCard";
import { useQuery } from '@tanstack/react-query'

const Instructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: () =>
            fetch('/instructors.json').then(
                (res) => res.json()
            ),
    })

    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">All Instructor</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4 md:px-0">
                {instructors.map(instructor => <InstuctorCard key={instructor._id} instructor={instructor} />)}
            </div>
        </div>
    );
};

export default Instructors;