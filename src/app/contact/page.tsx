// Contact Form for sending emails to devs.. whatever

const contactForm = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800">Contact Form</h2>
            <input type="text" placeholder="Name" className="w-full p-3 mt-4 border rounded-md focus:ring-2 focus:ring-indigo-500" />
            <input type="email" placeholder="Email" className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-indigo-500" />
            <input type="password" placeholder="Query" className="w-full p-3 mt-3 border rounded-md focus:ring-2 focus:ring-indigo-500" />
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md mt-4">
                Contact Form
            </button>
            <p className="text-sm mt-3 text-gray-500 cursor-pointer hover:underline" onClick={() => (false)}>
                Already have an account? <span className="text-indigo-500 font-semibold">Sign In</span>
            </p>
        </div>
    );
}

export default contactForm;