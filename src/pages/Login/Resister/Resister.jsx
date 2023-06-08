import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleLogin from "../../Shared/Social/GoogleLogin";

const Resister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confrimPassword) {
            return alert('password not mash')
        }
        console.log(data);
    }

    return (
        <div className="grid place-items-center bg-slate-300 min-h-[100vh]">
            <div className="bg-white rounded-2xl shadow-xl p-4 w-4/5 md:w-2/4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder=" your name"
                            {...register("name", { required: true })}
                            name="name" className="input input-bordered w-full" />
                        {errors.name &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Name is required</span>
                            </label>
                        }
                    </div>
                    {/* email */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" placeholder="your email"
                            {...register("email", { required: true })}
                            name="email" className="input input-bordered w-full" />
                        {errors.name &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Email is required</span>
                            </label>
                        }
                    </div>
                    {/* password */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <input type="password" placeholder="your password"
                            {...register("password", { required: true })}
                            name="password" className="input input-bordered w-full" />
                        {errors.name &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Password is required</span>
                            </label>
                        }
                    </div>
                    {/* conframe password */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Confrim Password*</span>
                        </label>
                        <input type="password" placeholder="your Confrim password"
                            {...register("confrimPassword", { required: true })}
                            name="confrimPassword" className="input input-bordered w-full" />
                        {errors.name &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Confrim Password is required</span>
                            </label>
                        }
                    </div>
                    {/* Photo */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Photo*</span>
                        </label>
                        <input type="text" placeholder="your photo"
                            {...register("photo", { required: true })}
                            name="photo" className="input input-bordered w-full" />
                        {errors.name &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Photo is required</span>
                            </label>
                        }
                    </div>


                    <div className="form-control w-full my-4">
                        <input type="submit" className="btn btn-primary" value="Sing Up" />
                    </div>
                </form>
                <GoogleLogin></GoogleLogin>
                <p className="text-center">Already have an acount? <Link to='/login' className="text-blue-800 font-semibold">please Sing in</Link></p>
            </div>
        </div>
    );
};

export default Resister;