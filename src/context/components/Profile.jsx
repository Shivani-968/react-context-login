import React, { useContext } from "react";
import UserContext from "../UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
                    <div className="text-5xl mb-4">
                        🔒
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Please Login
                    </h2>

                    <p className="text-gray-500">
                        You need to login to view your profile.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">

                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-blue-100
                                flex items-center justify-center text-3xl">
                    👤
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome!
                </h2>

                <p className="text-lg text-gray-600">
                    Hello,{" "}
                    <span className="font-semibold text-blue-600">
                        {user.username}
                    </span>
                </p>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">
                        You are successfully logged in.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Profile;