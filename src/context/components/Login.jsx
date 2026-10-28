import React, { useState, useContext } from "react";
import UserContext from "../UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Login
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Welcome back! Please login to your account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                       focus:outline-none focus:ring-2 focus:ring-blue-500
                                       focus:border-blue-500 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                       focus:outline-none focus:ring-2 focus:ring-blue-500
                                       focus:border-blue-500 transition"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg
                                   font-semibold hover:bg-blue-700
                                   active:scale-[0.98] transition duration-200
                                   shadow-md"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;