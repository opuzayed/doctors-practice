import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center my-6">Login Here</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text ">Email</span>
            </label>
            <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs"/>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span></label>
            <input type="text" {...register("password")} className="input input-bordered w-full max-w-xs"/>
            <label className="label"> <span className="label-text">Forget Password?</span></label>
          </div>
          <input className="btn btn-accent w-full" value='Login' type="submit" />
        </form>
        <p>New to doctors portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full font-bold">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
