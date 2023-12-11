import Comment from "@/assets/comment.svg";
import { Posting } from "@/lib/utils/apis/posting/types";

import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

interface Props {
  data: Posting;
  action?: {
    fetchData: () => {};
  };
}

export default function Postcard(props: Props) {
  const navigate = useNavigate();
  const { data, action } = props;

  const handleClick = () => {
    navigate(`/detail/${data.postID}`);
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
          <Dropdown data={data} action={action} />
        </div>
        <p className="pt-1">{data.pesan}</p>
        <div className="flex justify-center mr-5 mt-5">
          <img onClick={handleClick} src={data.image} className="aspect-square w-auto h-auto md:w-96 md:h-96 rounded-lg" />
        </div>
        <div className="flex justify-end mr-5 mt-1">
          <img src={Comment} />
        </div>
      </div>
    </div>
  );
}
