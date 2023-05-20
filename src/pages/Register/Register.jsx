import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name,email,password, photo);
    }
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="card md:w-1/2  shadow-2xl bg-pink-200">
                <h1 className="text-3xl font-bold text-center py-2">Create Account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="url" name="photo" placeholder="photo url" className="input input-bordered "  />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center mb-4'>Alrady have an accout? <Link className='font-bold text-info'to='/login'>Login</Link></p>

            </div>

        </div>
    );
};

export default Register;