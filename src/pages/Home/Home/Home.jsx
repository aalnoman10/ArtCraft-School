import Classes from "../../Classes/Classes";
import Instructors from "../../Instructors/Instructors";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Classes heading="Popular Classes" size={6} />
            <Instructors heading="Popular Instructors" size={3} />
            {/* Todo : more one section */}
        </div>
    );
};

export default Home;