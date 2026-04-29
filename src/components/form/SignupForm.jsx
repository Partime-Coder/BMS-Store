import React, { useState } from 'react'
import { Input, Button } from '../index.js'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { login } from '../../features/user/authSlice.js'
import { registerUser } from '../../services/userServices/authService.js'
import { saveSession } from '../../services/utilityServices/localStorageService.js'

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const [apiError, setApiError] = useState("");

  const handleSignup = async (data) => {
    setApiError("");
    try {
      const { confirmPassword, ...cleanData } = data;
      const newUser = await registerUser(cleanData);
      const { password, ...userDetails } = newUser;
      saveSession(userDetails);
      dispatch(login(userDetails));
      navigate('/');
    } catch (error) {
      setApiError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <h1 className="text-xl font-bold text-slate-800 mb-1">Create account</h1>
        <p className="text-sm text-slate-500 mb-6">Fill in your details to get started.</p>
        {apiError && (
          <p className="text-red-500 text-sm text-center">
            {apiError}
          </p>
        )}

        <div className="space-y-4">

          <div className="grid grid-cols-2 gap-3">
            <div className='mb-1'>
              <Input
                label="First name"
                placeholder="John"
                rounded="rounded-lg"
                className="border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                {...register('firstName', {
                  required: 'First name is required',
                })}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div className='mb-1'>
              <Input
                label="Last name"
                placeholder="Doe"
                rounded="rounded-lg"
                className="border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                {...register('lastName', {
                  required: 'Last name is required',
                })}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          <Input
            label="Username"
            placeholder="johndoe99"
            rounded="rounded-lg"
            className="border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            {...register('username', {
              required: 'Username is required',
            })}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            rounded="rounded-lg"
            className="border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Email is invalid'
              }
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            rounded="rounded-lg"
            className="border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              },
              maxLength: {
                value: 15,
                message: 'Password must not exceed 15 characters'
              }
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            rounded="rounded-lg"
            className="border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === getValues('password') || 'Passwords do not match'
            })}
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
          <Button
            type="submit"
            bgColor="bg-amber-400"
            textColor="text-slate-900"
            hoverBgColor="hover:bg-amber-500"
            className="w-full py-2.5 font-semibold text-sm transition-all duration-200 shadow-sm"
          >
            Create account
          </Button>

        </div>

        <div className="mt-5 pt-5 border-t border-slate-100 text-center">
          <span className="text-sm text-slate-500">Already have an account? </span>
          <Link to="/login" className="text-sm font-semibold text-amber-600 hover:text-amber-700 hover:underline transition">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  )
}

export default SignupForm