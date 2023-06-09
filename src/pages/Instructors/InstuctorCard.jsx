
const InstuctorCard = ({ instructor }) => {

    const { instructorName, classImage, instructorEmail } = instructor

    return (
        <div className="card shadow-md">
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{instructorName}</h2>
                <p><strong>Email :</strong> {instructorEmail}</p>
            </div>
        </div>
    );
};

export default InstuctorCard;