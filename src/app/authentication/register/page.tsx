import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-[440px] space-y-7 bg-white rounded-2xl shadow-lg p-9">
        <div className="space-y-2">
          <h1 className="text-[26px] font-semibold text-gray-900">Get started</h1>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-[13px] text-[#6b7280]">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#635bff] text-gray-900 placeholder-gray-400 text-[15px]"
            />
          </div>
          
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-[13px] text-[#6b7280]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#635bff] text-gray-900 placeholder-gray-400 text-[15px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-[13px] text-[#6b7280]">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#635bff] text-gray-900 text-[15px]"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#635bff] text-white py-3 rounded-md hover:bg-[#635bff]/90 transition-colors mt-7 font-medium text-[15px]"
          >
            Register
          </button>
        </form>

        <div className="text-center">
          <p className="text-[13px] text-[#6b7280]">
            Already have an account?{' '}
            <a href="/authentication/login" className="text-[#635bff] hover:text-[#635bff]/90">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}