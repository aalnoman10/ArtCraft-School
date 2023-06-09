import { useQuery } from "@tanstack/react-query";
import ClasseCard from "./classeCard";

const Classes = () => {

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
            fetch('/classes.json').then(
                (res) => res.json()
            ),
    })

    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">All Class</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4 md:px-0">
                {classes.map(sigleclass => <ClasseCard key={sigleclass._id} sigleclass={sigleclass} />)}
            </div>
        </div>
    );
};

export default Classes;