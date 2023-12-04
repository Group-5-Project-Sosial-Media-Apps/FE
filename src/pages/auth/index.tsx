import React from "react";
import logo from "../../assets/Logo.svg";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="bg-greenBg flex flex-col justify-center h-screen">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-end mb-5 mr-16">
          <img src={logo} className="w-80 h-80" />
          <p className="text-greenPrimary text-center font-bold text-[28px] mt-3">Throw your feel all the way</p>
        </div>
        <div className="flex flex-col ml-16">
          <h1 className="text-greenPrimary text-center font-bold text-[64px]">Welcome Thrower</h1>
          <p className="text-greenPrimary text-left font-bold text-[40px] mt-9 mb-5">Join Now</p>
          <Button className="bg-white text-greenPrimary font-bold h-14 w-96 rounded-full text-[24px]">Create Account</Button>
          <p className="text-greenPrimary text-left font-bold text-[24px] mt-14 mb-7">Already have an account?</p>
          <Button className="bg-white text-greenPrimary font-bold h-14 w-96 rounded-full text-[24px]">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
