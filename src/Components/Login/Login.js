import { registerVersion } from 'firebase/app';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
      let signInError
      useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
        }
      },[user, from , navigate])
      if(loading){
        // return <Loading></Loading>
        return <p>Loading...</p>
    }
    if(error || signInError){
        signInError = <small><p className='text-red-500'>{error?.message }</p></small>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex justify-center items-center h-screen'>
        <div class="card w-96 bg-base-300 shadow-xl">
            <div class="card-body">
            <h2 className="text-xl font bold text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <input type="email" 
                    placeholder="Your Email" 
                    className="input input-primary input-bordered w-full max-w-xs" 
                    {...register("email",{
                        required :{
                            value: true,
                            message : 'Email is required.'
                        },
                        pattern: {
                            //[A-Za-z]{3}
                          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Enter a valid email.'
                        }
                      })}
                    />
                    <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
            </div>

            <div className="form-control w-full max-w-xs">
                    <input type="password" 
                    placeholder="Password" 
                    className="input input-primary input-bordered w-full max-w-xs" 
                    {...register("password",{
                        required :{
                            value: true,
                            message : 'Password required.'
                        },
                        minLength: {
                          value: 6,
                          message: 'Password should be minimum 6 character or greater.' 
                        }
                      })}
                    />
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {signInError}
                    <input className="btn w-full input-primary max-w-xs" type="submit" value='Login' />
        </form>
                <p>
                <small>New to Carpent Shop ? 
                    <Link to='/signup' className='text-primary'>Create New Account</Link>
                </small>
                </p>
                
            </div>
    </div>
    </div>
    );
};

export default Login;