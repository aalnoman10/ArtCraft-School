import { useQuery } from "@tanstack/react-query";
import ClasseCard from "./ClasseCard";

const Classes = ({ heading, size }) => {

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
            fetch("http://localhost:5000/classes").then(
                (res) => res.json()
            ),
    })

    return (
        <div className="py-4 bg-slate-50">
            <h3 className="text-center text-3xl font-bold py-3">{heading ? heading :"All Class"}</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                {classes.slice(0, size).map(sigleclass => <ClasseCard key={sigleclass._id} sigleclass={sigleclass} />)}
            </div>
        </div>
    );
};

export default Classes;