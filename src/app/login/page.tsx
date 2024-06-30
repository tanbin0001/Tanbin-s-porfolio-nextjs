'use client';
import * as React from 'react';
import { Envelope, Lock } from 'phosphor-react';
import { Button, InputIcon, Input, Label } from 'keep-react';
import { useUserLoginMutation } from '@/redux/api/baseApi';
import { userLogin } from '../../../services/actions/userLogin';

const LoginPage = () => {
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userInfo = {
                username: username,
                password: password,
            };
            console.log(userInfo);
            const res = await userLogin(userInfo);

            console.log(res);

            // if(res?.data?.success === true){
            //    toast.success(res?.data?.message, {
            //       id: toastId,
            //       duration: 2000,
            //     });
            //     const token = res?.data?.data?.token;

            //     const user = verifyToken(token) as TUser;
            //     dispatch(setUser({ user: user, token }));

            //     navigate(`/${user?.role}/dashboard`);
            // } else {
            //   toast.error(res?.error?.data?.errorMessage, { id: toastId, duration: 2000 });
            // }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <form className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-md" onSubmit={handleSubmit}>

                <fieldset className="space-y-2">
                    <Label htmlFor="username" className="text-gray-300">Username</Label>
                    <div className="relative">
                        <Input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            className="ps-11 bg-gray-700 text-gray-300 border-gray-600"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <InputIcon className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Envelope size={19} color="#AFBACA" />
                        </InputIcon>
                    </div>
                </fieldset>
                <fieldset className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            className="ps-11 bg-gray-700 text-gray-300 border-gray-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputIcon className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Lock size={19} color="#AFBACA" />
                        </InputIcon>
                    </div>
                </fieldset>
                <Button size="sm" color="secondary" type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
