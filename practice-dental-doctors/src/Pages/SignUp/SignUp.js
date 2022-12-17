import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from './../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser,updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          toast.success('user created successfully');
          const userInfo = {
            displayName : data.name
          }
          updateUser(userInfo)
          .then(()=> {})
          .catch(err => console.error(err));
        })
        .catch(error => {
          console.error(error);
          setSignUpError(error.message);
        });
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center my-6">Signup Here</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text ">Name</span></label>
            <input type="text" {...register("name",{required:'Name field is required'})} className="input input-bordered w-full max-w-xs"/>
            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text ">Email</span></label>
            <input type="email" {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-xs"/>
            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span></label>
            <input type="password" {...register("password",{ required: 'Password is required',
            minLength: { value: 6, message: "Password must be six character or long" },
            pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'password must be strong'}
            })} className="input input-bordered w-full max-w-xs"/>
            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full mt-4" value='Sign Up' type="submit" />
          {signUpError && <p className='text-red-500'>{signUpError}</p>}
        </form>
        <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full font-bold">Continue With Google</button>
      </div>
    </div>
    );
};

export default SignUp;