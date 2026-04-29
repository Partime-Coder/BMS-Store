import React, { useState } from 'react'
import { Input, Button } from '../index.js'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { login } from '../../features/user/authSlice.js'
import { loginUser } from '../../services/userServices/authService.js'


function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [apiError, setApiError] = useState("");

    const handleLogin = async (data) => {
        try {
            setApiError("");
            const user = await loginUser(data);
            dispatch(login(user));
            navigate('/');
        } catch (error) {
            setApiError(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(handleLogin)} >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h1 className="text-xl font-bold text-slate-800 mb-1">Sign in</h1>
                <p className="text-sm text-slate-500 mb-6">Welcome back! Enter your details below.</p>
                {apiError && (
                    <p className="text-red-500 text-sm text-center">
                        {apiError}
                    </p>
                )}
                <div className="space-y-4">
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
                                message: 'Invalid email address'
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

                    <Button
                        type="submit"
                        bgColor="bg-amber-400"
                        textColor="text-slate-900"
                        hoverBgColor="hover:bg-amber-500"
                        className="w-full py-2.5 font-semibold text-sm transition-all duration-200 shadow-sm"
                    >
                        Continue
                    </Button>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-100 text-center">
                    <span className="text-sm text-slate-500">New to BMS? </span>
                    <Link to="/signup" className="text-sm font-semibold text-amber-600 hover:text-amber-700 hover:underline transition">
                        Create account
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm