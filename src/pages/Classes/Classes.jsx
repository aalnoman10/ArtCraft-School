import { useQuery } from "@tanstack/react-query";
import ClasseCard from "./ClasseCard";
import { useContext } from "react";
import { Theme } from "../../Provider/ThemeProvider";

const Classes = ({ heading, size }) => {
    const { themeDark } = useContext(Theme)

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
            fetch("https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/classes").then(
                (res) => res.json()
            ),
    })

    return (
        <div className={`${!themeDark && 'bg-dark text-white'} py-8`}>
            <h3 className="text-center text-3xl font-bold py-3">{heading ? heading : "All Class"}</h3>
            <div className="grid md:grid-cols-3 gap-4 p-4">
                {classes.slice(0, size).map(sigleclass => <ClasseCard key={sigleclass._id} sigleclass={sigleclass} />)}
            </div>
        </div>
    );
};

export default Classes;