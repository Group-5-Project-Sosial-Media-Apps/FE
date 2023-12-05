import logo from "../../assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="bg-greenBg flex flex-col justify-center h-screen">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-end mb-5 md:mb-0 md:mr-16">
          <img src={logo} className=" hidden md:flex w-80 h-80" />
          <p className="text-greenPrimary text-center font-bold text-lg md:text-2x1 mt-3">Throw your feel all the way</p>
        </div>
        <div className="flex flex-col md:ml-16">
          <h1 className="text-greenPrimary md:text-left text-center font-bold text-[30px] md:text-[50px]">Welcome Thrower</h1>
          <p className="text-greenPrimary md:text-left text-center font-bold text-[25px] md:text-[36px] mt-9 mb-5">Join Now</p>
          <Dialog>
            <DialogTrigger className="bg-white text-greenPrimary font-bold h-12 w-80 rounded-full text-[20px] transition duration-300 ease-in-out transform hover:bg-greenPrimary hover:text-white hover:scale-105">
              Create Account
            </DialogTrigger>
            <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
              <DialogHeader>
                <DialogTitle className="mt-6 md:ml-10 font-bold text-center md:text-left text-lg md:text-2x1 lg:text-3xl text-greenPrimary">Create your account</DialogTitle>
                <DialogDescription className="mt-2 md:mt-6 md:ml-10 md:text-left text-center text-sm md:text-base lg:text-lg text-greenPrimary">Be a Thrower</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 md:gap-8 p-10">
                <Input id="fullname" placeholder="Full Name" className="placeholder:text-greenPrimary" />
                <Input id="email" placeholder="Email" className="placeholder:text-greenPrimary" />
                <Input id="username" placeholder="Username" className="placeholder:text-greenPrimary" />
                <Input id="password" placeholder="Password" className="placeholder:text-greenPrimary" />
              </div>
              <DialogFooter className="justify-center">
                <Button type="submit" className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <p className="text-greenPrimary md:text-left text-center font-bold md:text-[24px] text-[20px] mt-14 mb-7">Already have an account?</p>
          <Dialog>
            <DialogTrigger className="bg-white text-greenPrimary font-bold h-12 w-80 rounded-full text-[20px] transition duration-300 ease-in-out transform hover:bg-greenPrimary hover:text-white hover:scale-105">Sign In</DialogTrigger>
            <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
              <DialogHeader>
                <DialogTitle className="mt-6 md:ml-10 font-bold text-center md:text-left text-lg md:text-2x1 lg:text-3xl text-greenPrimary">Sign In to NYampah</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 md:gap-8 p-10">
                <Input id="username" placeholder="Username" className="placeholder:text-greenPrimary" />
                <Input id="password" placeholder="Password" className="placeholder:text-greenPrimary" />
              </div>
              <DialogFooter className="sm:justify-center">
                <Button type="submit" className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Login;
