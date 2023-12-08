import logo from "../../assets/Logo.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  LoginSchema,
  RegisterSchema,
  loginSchema,
  registerSchema,
} from "@/lib/utils/apis/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/custom-field";
import { postLogin, postRegister } from "@/lib/utils/apis/auth/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const formRegist = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nama: "",
      username: "",
      password: "",
      email: "",
    },
  });

  const handleLogin = async (data: LoginSchema) => {
    try {
      const result = await postLogin(data);
      console.log(result.data.token);
      const token = result.data.token;
      if (token) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegist = async (data: RegisterSchema) => {
    try {
      const result = await postRegister(data);
      console.log(result.message);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  };
  return (
    <div className="bg-greenBg flex flex-col justify-center h-screen">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-end mb-5 md:mb-0 md:mr-16">
          <img src={logo} className=" hidden md:flex w-80 h-80" />
          <p className="text-greenPrimary text-center font-bold xl:text-3xl lg:text-2xl text-xl mt-3">
            Throw your feel all the way
          </p>
        </div>
        <div className="flex flex-col md:ml-16">
          <h1 className="text-greenPrimary md:text-left text-center font-bold text-4xl lg:text-5xl xl:text-6xl">
            Welcome Thrower
          </h1>
          <p className="text-greenPrimary md:text-left text-center font-bold text-3xl lg:text-5xl mt-9 mb-5">
            Join Now
          </p>
          <Dialog>
            <DialogTrigger className="bg-white text-greenPrimary font-bold h-12 w-80 rounded-full text-[20px] transition duration-300 ease-in-out transform hover:bg-greenPrimary hover:text-white hover:scale-105">
              Create Account
            </DialogTrigger>
            <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
              <DialogHeader>
                <DialogTitle className="mt-6 md:ml-10 font-bold text-center md:text-left text-lg md:text-2x1 lg:text-3xl text-greenPrimary">
                  Create your account
                </DialogTitle>
                <DialogDescription className="mt-2 md:mt-6 md:ml-10 md:text-left text-center text-sm md:text-base lg:text-lg text-greenPrimary">
                  Be a Thrower
                </DialogDescription>
              </DialogHeader>
              <Form {...formRegist}>
                <form onSubmit={formRegist.handleSubmit(handleRegist)}>
                  <div className="flex flex-col gap-4 md:gap-8 p-10">
                    <CustomFormField control={formRegist.control} name="nama">
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Full Name"
                          className="placeholder:text-greenPrimary"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={formRegist.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                    <CustomFormField control={formRegist.control} name="email">
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Email"
                          className="placeholder:text-greenPrimary"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={formRegist.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                    <CustomFormField
                      control={formRegist.control}
                      name="username"
                    >
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Username"
                          className="placeholder:text-greenPrimary"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={formRegist.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                    <CustomFormField
                      control={formRegist.control}
                      name="password"
                    >
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Password"
                          className="placeholder:text-greenPrimary"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={formRegist.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <DialogFooter className="justify-center">
                    <Button
                      type="submit"
                      className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          <p className="text-greenPrimary md:text-left text-center font-bold md:text-[24px] text-[20px] mt-14 mb-7">
            Already have an account?
          </p>
          <Dialog>
            <DialogTrigger className="bg-white text-greenPrimary font-bold h-12 w-80 rounded-full text-[20px] transition duration-300 ease-in-out transform hover:bg-greenPrimary hover:text-white hover:scale-105">
              Sign In
            </DialogTrigger>
            <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
              <DialogHeader>
                <DialogTitle className="mt-6 md:ml-10 font-bold text-center md:text-left text-lg md:text-2x1 lg:text-3xl text-greenPrimary">
                  Sign In to NYampah
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleLogin)}>
                  <div className="flex flex-col gap-4 md:gap-8 p-10">
                    <CustomFormField control={form.control} name="username">
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Username"
                          type="text"
                          className="placeholder:text-greenPrimary"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                    <CustomFormField control={form.control} name="password">
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Password"
                          type="password"
                          className="placeholder:text-greenPrimary"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <DialogFooter className="sm:justify-center">
                    <Button
                      type="submit"
                      className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Login;
