
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Login = () => {
    const [error, setError] = useState('')
    const { loginWithEmail } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginWithEmail(email, password)
            .then(result => {
                const logedUser = result.user;
                form.reset()
                setError('')
                console.log(logedUser);
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Login Successfull...',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card md:w-1/2  shadow-2xl bg-pink-200">
                <h1 className="text-3xl font-bold text-center py-2">Login now</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered " required />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {error && <p className="text-center text-error font-bold">{error}</p>
                }
                <p className='text-center mb-4'>Don not have an accout? <Link className='font-bold text-info' to='/register'>Create Account</Link></p>

                <div className="divider">OR</div>

                <button className="btn mb-4 btn-outline w-4/5 mx-auto ">Login with Google</button>

            </div>

        </div>
    );
};

export default Login;