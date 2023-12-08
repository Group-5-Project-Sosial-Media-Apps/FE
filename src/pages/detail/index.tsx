import Layout from "@/components/layout";
import Comment from "@/assets/comment.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Posting } from "@/lib/utils/apis/posting/types";
import { deletePost } from "@/lib/utils/apis/posting/api";
import { toast } from "@/components/ui/use-toast";

interface Props {
  data: Posting;
}

const Detail = (props: Props) => {
  const { data } = props;

  const handleDelete = async () => {
    try {
      const result = await deletePost(data.postID);
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
    <Layout>
      <div className="flex flex-col w-full justify-center items-center md:px-10">
        <div className=" bg-greenThird shadow-greenPrimary shadow-sm mb-2 xl:w-2/3">
          <div className="flex gap-3 px-5 py-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#9BBD7E" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9BBD7E" className="w-5 h-5 mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <p className="font-bold text-xl text-greenPrimary">Post</p>
          </div>
          <div className="flex flex-row shadow-sm px-2 ">
            <img src={data.user.image} className="w-16 h-16 rounded-full" />
            <div className="flex flex-col gap-2 ml-5 pt-1">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <p className="font-semibold text-xl">{data.user.name}</p>
                  <p className="text-xl text-greenPrimary">@{data.user.username}</p>
                  <p className="text-xl text-greenPrimary">15h</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-greenPrimary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <div className="flex flex-col ml-2 gap-2">
                      <p>Edit</p>
                      <div onClick={handleDelete} className="cursor-pointer">
                        Delete
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="pt-1">{data.pesan}</p>
              <div className="flex justify-center mr-5 mt-5">
                <img src={data.image} className="w-96 h-96 rounded-lg" />
              </div>
              <div className="flex justify-between mr-5 mt-1">
                <p className="text-xl text-greenPrimary">15h</p>
                <img src={Comment} />
              </div>
            </div>
          </div>
          <div className="mt-3 bg-greenThird shadow-greenPrimary shadow-md">
            <div className="flex py-3 px-3 border-t-2 border-greenPrimary">
              <img
                src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                className="w-16 h-16 rounded-full"
              />

              <div className="flex flex-col justify-center grow mr-3">
                <Input className="mx-3"></Input>
              </div>
              <div className="flex flex-col justify-center">
                <Button className="bg-greenPrimary w-24 rounded-full ml-2">Comment</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row bg-greenThird shadow-greenPrimary shadow-sm px-2">
            <img
              src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col gap-2 ml-5 pt-1">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <p className="font-semibold text-xl">Nama</p>
                  <p className="text-xl text-greenPrimary">@username</p>
                  <p className="text-xl text-greenPrimary">15h</p>
                </div>
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
              <p className="pt-1 pb-4">
                Lorem ipsum door sit amet consectetur adipisicing elit. Neque deserunt eos ratione quaerat saepe fugit voluptatibus porro aperiam ex culpa nostrum corporis accusamus, vitae nam commodi debitis harum placeat voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
