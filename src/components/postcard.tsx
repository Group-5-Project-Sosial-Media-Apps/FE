import Comment from "@/assets/comment.svg";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Posting } from "@/lib/utils/apis/posting/types";
import { deletePost } from "@/lib/utils/apis/posting/api";

interface Props {
  data: Posting;
}

export default function Postcard(props: Props) {
  const { data } = props;

  const handleDelete = async () => {
    try {
      const result = await deletePost(data.postID);

      console.log(result);
    } catch (error) {
      console.log(error);
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
          <img src={data.image} className="aspect-square w-auto h-auto md:w-96 md:h-96 rounded-lg" />
        </div>
        <div className="flex justify-end mr-5 mt-1">
          <img src={Comment} />
        </div>
      </div>
    </div>
  );
}
