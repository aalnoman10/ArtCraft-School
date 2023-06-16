import { useParams } from "react-router-dom";
import useSingleLoad from "../../../../hooks/useSingleLoad";

const Feedback = () => {
    const id = useParams().id
    const [isLoading, classItem] = useSingleLoad({ id })

    const handleFeedback = (e) => {
        e.preventDefault()

        const feedback = e.target.feedback.value
        const status = classItem.status

        const updateFeedback = {
            feedback,
            status
        }

        fetch(`https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/classes/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    alert("feedback send successfull")
                }
            })
    }

    if (isLoading) {
        return <div className="grid place-items-center h-[80vh]">
            <p className="text-3xl">Loading...</p>
        </div>
    }

    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mb-4">Send a Feedback</h3>
            <form onSubmit={handleFeedback}>
                <div className="md:flex gap-4">
                    {/* textaria*/}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>feedback Massage *</span>
                        </label>
                        <textarea type="text" name="feedback" placeholder="Write any Massage.." rows={10} className="p-4 input-bordered rounded-xl border w-full" defaultValue={classItem?.feedback} required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <input type="submit" value="Send Now" className="btn btn-primary my-4" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Feedback;