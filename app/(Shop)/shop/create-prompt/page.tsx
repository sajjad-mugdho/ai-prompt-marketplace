import UploadPrompt from "@/components/Prompts/UploadPrompt";
import ShopSidebar from "@/components/Shop/ShopSidebar";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex w-full">
      <div className="h-screen p-2 sticky top-0 left-0 z-20 bg-[#111c42] md:w-[20%] xl:w-[17%]">
        <ShopSidebar active={1} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        <UploadPrompt />
      </div>
    </div>
  );
};

export default Page;
