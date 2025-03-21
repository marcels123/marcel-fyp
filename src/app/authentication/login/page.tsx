// import { LoginForm } from "./file";
import { LoginForm } from "@/authentication/login/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <div className="w-full max-w-[440px] space-y-7 bg-white rounded-2xl shadow-lg p-9">
        <div className="space-y-2">
          <h1 className="text-[26px] font-semibold text-gray-900">Log In</h1>
        </div>
        
        <form className="space-y-6">
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
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-[13px] text-[#6b7280]">
                Password
              </label>
              <a href="/forgot-password" className="text-[13px] text-[#6b7280] hover:text-gray-900">
                Forgot password?
              </a>
            </div>
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
            Log In
          </button>
        </form>

        <div className="text-center">
          <p className="text-[13px] text-[#6b7280]">
            Don't have an account?{' '}
            <a href="/authentication/register" className="text-[#635bff] hover:text-[#635bff]/90">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}