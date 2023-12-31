import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';

const GoogleLogin = () => {
    const { googleLogin, setUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleLoogleLogin = () => {
        googleLogin()
            .then((res) => {
                setUser(res.user);

                // crete user
                const newUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL
                }

                fetch("https://b7a12-summer-camp-server-side-aalnoman10.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                navigate('/login', { state: { from: location } })

            }).catch((err) => {
                alert("Opps ", err.message);
            });
    }

    return <button onClick={handleLoogleLogin} className='btn w-full normal-case flex'><FcGoogle size={28} /> Contune with Google</button>
};

export default GoogleLogin;