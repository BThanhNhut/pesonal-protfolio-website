import React from "react";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="pt-32">
      <div className="flex">
        <h1 className="w-1/2 text-xl font-semibold bg-red-600 text-center">
          Đăng ký
        </h1>
        <h1 className="w-1/2 text-xl font-semibold bg-green-600 text-center">
          Đăng ký
        </h1>
      </div>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
