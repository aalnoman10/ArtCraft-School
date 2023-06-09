import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';

const GoogleLogin = () => {
    const { googleLogin, setUser } = useContext(AuthContext);

    const handleLoogleLogin = () => {
        googleLogin()
            .then((res) => {
                setUser(res.user);

                // crete user
                const newUser = {
                    name: res.user.displayName,
                    email: res.user.email
                }

                fetch("http://localhost:5000/users", {
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

            }).catch((err) => {
                alert("Opps ", err.message);
            });
    }

    return <button onClick={handleLoogleLogin} className='btn w-full normal-case flex'><FcGoogle size={28} /> Contune with Google</button>
};

export default GoogleLogin;