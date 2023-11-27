import Ratings from "@/utils/Rating";
import { styles } from "@/utils/style";
import { Avatar, Card } from "@nextui-org/react";
import React from "react";

type Props = {};

const SellerCard = (props: Props) => {
  return (
    <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22] ">
      <Avatar
        src="https://images.pexels.com/photos/25733/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="w-[80px] h-[80px]"
      ></Avatar>
      <span className={`${styles.label} py-2 text-xl`}>@Sajjad</span>
      <div className="flex items-center ">
        <span className={`${styles.label} pr-2`}>4.5/5</span>
        <Ratings rating={4.5} />
      </div>

      <span className={`${styles.label} py-2`}>Total Sales: 1221</span>
    </Card>
  );
};

export default SellerCard;
