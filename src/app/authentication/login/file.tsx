'use client'
import "@/styles/globals.css";

export const LoginForm = () => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Logged In.')
    }
    return (
                <form>
                    <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
                    <input type="email" placeholder="Email" className="w-full p-3 mt-4 border rounded-md focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Password" className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-blue-500" />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-4">
                        Sign In
                    </button>
                    <p className="text-sm mt-3 text-gray-500 cursor-pointer hover:underline" onClick={() => (true)}>
                        Need an account? <span className="text-blue-500 font-semibold">Register</span>
                    </p>
                </form>
    )
}