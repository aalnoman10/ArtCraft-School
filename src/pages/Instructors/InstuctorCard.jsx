
const InstuctorCard = ({ instructor }) => {

    const { image, name, email } = instructor

    return (
        <div className="card shadow-md">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p><strong>Email :</strong> {email}</p>
            </div>
        </div>
    );
};

export default InstuctorCard;