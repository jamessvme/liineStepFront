import RegisterForm from "@/components/register-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="min-w-[40rem] rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark  xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">無料で始める</span>
              <h2 className="mb-9 text-2xl text-black dark:text-white sm:text-title-xl2">
                <span className="font-bold text-[green] text-3xl">ラインステップ</span>に登録する
              </h2>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
