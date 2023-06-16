{/* TODO : link external */ }

const Feedback = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center mb-4">Send a Feedback</h3>

            <form>
                <div className="md:flex gap-4">
                    {/* name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Name*</span>
                        </label>
                        <input type="text" name="className" placeholder="Class Name" className="input input-bordered w-full" required />
                    </div>
                    {/* img */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>instructor Email*</span>
                        </label>
                        <input type="email" name="email" placeholder="instructor email" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    {/* textaria*/}
                    <div className="form-control w-full">
                        <label className="label">
                            <span>Class Name*</span>
                        </label>
                        <textarea type="text" name="text" placeholder="Write any Massage.." rows={10} className="p-4 input-bordered rounded-xl border w-full" required />
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