import LoginForm from "./LoginForm";

const Page = () => {
  return (
    <div className=" w-[400px]">
      {/* header */}
      <h1 className="text-md font-bold text-primary">ورود | ثبت‌نام</h1>
      <p className="text-xs text-gray-400 mt-2">
        لطفا شماره تماس خودتون رو وارد کنید
      </p>

      {/* form */}
      <LoginForm/>
    </div>
  );
};

export default Page;
