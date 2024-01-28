import SignIn from "./SignIn";
import SignUp from "./SignUp";

type SignInProps = {
  type: "signin" | "signup";
};

export default function Layout({ type }: SignInProps) {
  return (
    <main className="container mx-auto my-32 flex items-center px-5 sm:my-0 sm:min-h-screen xl:px-40">
      <div className="grid w-full gap-y-16 md:grid-cols-2">
        <div className="flex flex-1 flex-col gap-[30px] md:gap-[50px]">
          <div>
            <h1 className="text-[26px] font-semibold leading-normal md:text-[50px]">
              Sign {type === "signin" ? "In" : "Up"} to
            </h1>
            <h2 className="text-[21px] font-medium leading-normal md:text-[35px]">
              Lorem Ipsum is simply
            </h2>
          </div>
          <div>
            <p className="text-[14px] leading-normal md:text-[16px]">
              If you don&apos;t have an account registered
            </p>
            <p className="text-[14px] leading-normal md:text-[16px]">
              You can
              <a
                href={type === "signin" ? "/signup" : "/"}
                className="m-1 font-semibold text-[#4D47C3] transition hover:underline"
              >
                {type === "signin" ? "Sign Up !" : "Sign In !"}
              </a>
            </p>
          </div>
        </div>
        <div className="">{type === "signin" ? <SignIn /> : <SignUp />}</div>
      </div>
    </main>
  );
}
