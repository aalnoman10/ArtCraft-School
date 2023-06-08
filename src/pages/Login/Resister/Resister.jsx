import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleLogin from "../../Shared/Social/GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Resister = () => {
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confrimPassword) {
            return alert('password not mash')
        }

        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                setUser(res.user)
                updateUserProfile(res.user, data.name, data.photo)
                    .then(() => {
                    })
                    .catch((err) => {
                        alert("Opps fall update Profile : ", err.message)
                    });
            })
            .catch((err) => {
                alert("Opps ", err.message)
            });

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
                        {errors.email &&
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
                            {...register("password", { minLength: 6, maxLength: 15, required: true })}
                            name="password" className="input input-bordered w-full" />
                        {errors.password?.type === "required" &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Password is required</span>
                            </label>
                        }
                        {errors.password?.type === "minLength" &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Password is must be 6 characters</span>
                            </label>
                        }
                        {errors.password?.type === "maxLength" &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Password is less than 15 characters</span>
                            </label>
                        }
                    </div>
                    {/* conframe password */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Confrim Password*</span>
                        </label>
                        <input type="password" placeholder="your Confrim password"
                            {...register("confrimPassword", { minLength: 6, maxLength: 15, required: true })}
                            name="confrimPassword" className="input input-bordered w-full" />
                        {errors.confrimPassword?.type === "required" &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Confrim Password is required</span>
                            </label>
                        }
                        {errors.confrimPassword?.type === "minLength" &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Confrim Password must be 6 characters</span>
                            </label>
                        }
                        {errors.confrimPassword?.type === "maxLength" &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Confrim Password is less than 15 characters</span>
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
                        {errors.photo &&
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