import Layout from "@/components/layout";
import Postcard from "@/components/postcard";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <img
          src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          className="bg-green-500 aspect-square h-72 w-full"
        />

        <div className="flex flex-row justify-between mt-3 px-8">
          <div className="flex flex-col items-center">
            <Avatar className="w-40 h-40 -mt-24">
              <AvatarImage
                src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col mt-2">
              <p className="text-greenPrimary">The Super MAN</p>
              <p className="text-greenPrimary">@user1234</p>
            </div>
          </div>
          <Button className="bg-greenPrimary hover:bg-greenPrimary rounded-full">Edit Profile</Button>
        </div>
        <div className="flex border-2 border-greenPrimary justify-center py-2 my-4">
          <p>Posts</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col w-full xl:w-2/3 md:px-10">
            <Postcard />
            <Postcard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
