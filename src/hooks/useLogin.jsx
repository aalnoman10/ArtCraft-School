
const useLogin = (name, email) => {

    const newUser = { name, email }
    console.log(newUser);

    fetch(`http://localhost:5000/users`, {
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


};

export default useLogin;


