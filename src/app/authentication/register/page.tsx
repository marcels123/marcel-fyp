import { RegisterForm } from "./register-form";

export default function RegisterPage() {
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="shadow-xl p-4 bg-white rounded-xl">
                <RegisterForm />
            </div>
        </div>
    )
}