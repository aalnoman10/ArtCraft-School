import { useForm } from "react-hook-form";
import GoogleLogin from "../../Shared/Social/GoogleLogin";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {

    const { login, setUser } = useContext(AuthContext)

    const [passwordHide, setPasswordHide] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        login(data.email, data.password)
            .then(res => {
                console.log(res.user);
                setUser(res.user)
            }).catch((err) => {
                alert("Opps ", err.message)
            });
    }

    return (
        <div className="grid place-items-center bg-slate-300 min-h-[100vh]">
            <div className="bg-white rounded-2xl shadow-xl p-4 w-4/5 md:w-2/4">
                <form onSubmit={handleSubmit(onSubmit)}>

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
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <div className="relative">
                            <input type={passwordHide ? "password" : "text"} placeholder="your password"
                                {...register("password", { required: true })}
                                name="password" className="input input-bordered w-full" />
                            <button onClick={() => setPasswordHide(!passwordHide)} className="absolute right-2 top-2">
                                {passwordHide ? <AiOutlineEye className="hover:text-white hover:bg-black p-1 rounded-full" size={32} />
                                    : <AiOutlineEyeInvisible className="hover:text-white hover:bg-black p-1 rounded-full" size={32} />}
                            </button>
                        </div>
                        {errors.name &&
                            <label className="label">
                                <span className="label-text-alt text-red-700">Password is required</span>
                            </label>
                        }
                    </div>

                    <div className="form-control w-full my-4">
                        <input type="submit" className="btn btn-primary" value="Sing in" />
                    </div>
                </form>
                <GoogleLogin />
                <p className="text-center mt-2">Already have an acount? <Link to='/resister' className="text-blue-800 font-semibold">please Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;