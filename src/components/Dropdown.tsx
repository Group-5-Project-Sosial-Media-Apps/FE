import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BodyData, Posting } from "@/lib/utils/apis/posting/types";
import { toast } from "./ui/use-toast";
import { deletePost, editPost } from "@/lib/utils/apis/posting/api";
interface Props {
  data: Posting;
  action?: {
    fetchData: () => {};
  };
}

const Dropdown = (props: Props) => {
  const { data, action } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [bodyData, setBodyData] = useState<BodyData>({
    pesan: data.pesan || "",
    image: null,
  });
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

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await editPost(bodyData, data.postID);
      if (result) {
        setOpen(false);
        action?.fetchData();
        setBodyData({
          ...bodyData,
          image: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-greenPrimary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col ml-2 gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="text-start">Edit</DialogTrigger>
            <DialogContent className="w-full md:w-[80%] lg:w-[60%] h-auto md:h-[80%] lg:h-[85%]">
              <DialogHeader>
                <DialogTitle className="mt-6 md:ml-10 font-bold text-center md:text-left text-lg md:text-2x1 lg:text-3xl text-greenPrimary">Edit Post</DialogTitle>
              </DialogHeader>
              <Input placeholder="Caption" type="text" className="px-3 py-2" value={bodyData.pesan} onChange={(e) => setBodyData({ ...bodyData, pesan: e.target.value })} />
              <Input
                type="file"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  setBodyData({ ...bodyData, image: selectedFile });
                }}
              />

              {bodyData.image && <img src={URL.createObjectURL(bodyData.image)} alt="Selected Image" />}
              <DialogFooter className="justify-center">
                <Button onClick={handleEdit} className="bg-greenPrimary text-white w-full md:w-40 h-12 rounded-full text-[15px] md:text-base lg:text-lg">
                  Save Post
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
  );
};

export default Dropdown;
