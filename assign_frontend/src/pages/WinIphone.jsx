import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WinIphone() {
    const [confetti, setConfetti] = useState(false);

    useEffect(() => {
        setTimeout(() => setConfetti(true), 1000);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = "https://www.instagram.com"
        }, 5000);

        // return clearTimeout(timeout)
    }, [])

    function goToIg() {
        window.location.href = "https://www.instagram.com"
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            {confetti && <ConfettiEffect />}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md relative">

                <h1 className="text-3xl font-bold text-gray-800">🎉 You Have a 98% Chance to Win!</h1>
                <p className="mt-4 text-gray-600">This could be your lucky day! Don't miss out on winning an iPhone 15.</p>

                <div className="mt-6">
                    <img
                        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
                        alt="iPhone 15"
                        className="w-48 mx-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* ✅ Replaced custom Button component with Tailwind-styled button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition"
                    onClick={goToIg}
                >
                    Claim Your Entry
                </motion.button>

                <div className="mt-4 flex items-center justify-center text-green-600 font-semibold">
                    <CheckCircle className="w-6 h-6 mr-2" /> 98% Chance of Winning!
                </div>
            </motion.div>
        </div>
    );
}

function ConfettiEffect() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            🎊 🎊 🎊
        </div>
    );
}
