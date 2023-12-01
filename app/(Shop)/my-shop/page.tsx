import ShopSidebar from "@/components/Shop/ShopSidebar";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full">
      <div className="h-screen p-2 bg-[#111c42] md:w-[20%] xl:w-[17%]">
        <ShopSidebar active={0} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]"></div>
    </div>
  );
};

export default Page;