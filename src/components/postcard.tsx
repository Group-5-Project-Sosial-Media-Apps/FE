import comment from "@/assets/comment.svg";

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
            <p className="text-lg text-greenPrimary">· 15h</p>
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
            <img src={comment} />
          </div>
        </div>
      </div>
    </div>
  );
}
