import CustomFormField from "@/components/custom-field";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import React from "react";

const EditProfile = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-white text-greenPrimary font-bold h-12 w-80 rounded-full text-[20px] transition duration-300 ease-in-out transform hover:bg-greenPrimary hover:text-white hover:scale-105">
        Edit Profile
      </DialogTrigger>
      <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
        <img
          src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          className="bg-green-500 aspect-square h-40 w-full mt-3"
        />
        <Avatar className="w-36 h-36 -mt-24 ml-4">
          <AvatarImage
            src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <form>
          <div className="flex flex-col gap-4 md:gap-8 p-10">
            <input
              placeholder="Full Name"
              className="placeholder:text-greenPrimary"
            />
            <input
              placeholder="Username"
              className="placeholder:text-greenPrimary"
            />
          </div>
          <DialogFooter className="justify-center">
            <Button
              type="submit"
              className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
