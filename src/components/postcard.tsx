import Comment from "@/assets/comment.svg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { EditSchema, Posting, editSchema } from "@/lib/utils/apis/posting/types";
import { deletePost, editPost } from "@/lib/utils/apis/posting/api";
import { toast } from "./ui/use-toast";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "./custom-field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Props {
  data: Posting;
}

export default function Postcard(props: Props) {
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
    <div className="flex flex-row justify-center bg-greenThird shadow-greenPrimary shadow-sm px-2">
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
                <Dialog>
                  <DialogTrigger className="text-start">Edit</DialogTrigger>
                  <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
                    <DialogHeader>
                      <DialogTitle className="mt-6 md:ml-10 font-bold text-center md:text-left text-lg md:text-2x1 lg:text-3xl text-greenPrimary">Edit Post</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 md:gap-8 p-10">
                      <Input placeholder="Caption" className="placeholder:text-greenPrimary" />

                      <Input placeholder="Foto" type="file" accept="image/*" className="placeholder:text-greenPrimary" />
                    </div>
                    <DialogFooter className="justify-center">
                      <Button type="submit" className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg">
                        Save changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <div onClick={handleDelete} className="cursor-pointer">
                  Delete
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="pt-1">{data.pesan}</p>
        <div className="flex justify-center mr-5 mt-5">
          <img src={data.image} className="aspect-square w-auto h-auto md:w-96 md:h-96 rounded-lg" />
        </div>
        <div className="flex justify-end mr-5 mt-1">
          <img src={Comment} />
        </div>
      </div>
    </div>
  );
}
