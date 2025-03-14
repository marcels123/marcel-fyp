// import { LoginForm } from "./file";
import { LoginForm } from "@/authentication/login/login-form"

export default function LoginPage() {
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="shadow-xl p-4 bg-white rounded-xl">
                <LoginForm />
            </div>
        </div>
    )
}