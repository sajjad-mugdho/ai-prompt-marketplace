import Ratings from "@/utils/Rating";
import { styles } from "@/utils/style";
import { Avatar, Button, Card, Divider, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Props = {};

const PromptCard = (props: Props) => {
  return (
    <Card
      radius="lg"
      className="w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f2c] m-3"
    >
      <div className="relative ">
        <Image
          alt=""
          src="https://pixner.net/aikeu/assets/images/banner/large-slider/one.png"
          className="w-full"
          width={300}
          height={300}
        />
        <div className="absolute bottom-2 left-2">
          <div className="w-max bg-black hover:bg-[#16252] duration-300 hover:text-black text-white transition-opacity p-[10px] flex items-center rounded-xl">
            <Image
              src="https://pixner.net/aikeu/assets/images/category/chat.png"
              width={25}
              height={25}
              alt=""
            />

            <span className={`${styles.label} pl-2 text-white`}>ChatGPT</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between py-2 ">
        <h3 className={`${styles.label} text-[18px] text-white`}>
          Animal Prompts
        </h3>
        <p className={`${styles.paragraph}`}>$25.00</p>
      </div>
      <Divider className="bg-[#ffffff18]" />
      <div className="flex items-center my-2">
        <Avatar
          className=""
          src="https://images.pexels.com/photos/25733/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <span className={`${styles.label} pl-3`}> @Sajjad</span>
        <Ratings rating={5} />
      </div>
      <br />
      <Link href={"/shop/123"} className="w-full">
        <Button
          className="mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity
         font-Inter font-[600]"
        >
          Get Prompts
        </Button>
      </Link>
    </Card>
  );
};

export default PromptCard;
