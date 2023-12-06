import Comment from "@/assets/comment.svg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Postcard() {
  return (
    <div className=" bg-greenThird shadow-greenPrimary shadow-sm my-2">
      <div className="flex py-5 px-5">
        <img
          src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col justify-between gap-2 ml-5 pt-1">
          <div className="flex gap-2">
            <p className="font-semibold text-xl">Nama</p>
            <p className="text-xl text-greenPrimary">@username</p>
            <div className="flex gap-72">
              <p className="text-xl text-greenPrimary">15h</p>
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-greenPrimary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="flex flex-col ml-2 gap-2">
                    <p>Edit</p>
                    <p>Delete</p>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt eos ratione quaerat saepe fugit voluptatibus porro aperiam ex culpa nostrum corporis accusamus, vitae nam commodi debitis harum placeat voluptas.
          </p>
          <div className="flex justify-center mr-5 mt-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              className="w-[512px] h-[512px] rounded-lg"
            />
          </div>
          <div className="flex justify-end mr-5 mt-1">
            <img src={Comment} />
          </div>
        </div>
      </div>
    </div>
  );
}
