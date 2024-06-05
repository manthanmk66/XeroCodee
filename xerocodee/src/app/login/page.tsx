"use client";
import * as React from "react";
import design from "../../assets/design.svg";
import Link from "next/link";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

interface InputProps {
  id: string;
  name: string;
  type: string;
  className: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  className,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {name}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        aria-label={name}
      />
    </>
  );
};

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

const MyComponent: React.FC = () => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
    router.replace("/profile");
    return null;
  }

  const handleLogin = () => {
    // Add any authentication logic here
    // If login is successful, navigate to the landing page
    router.push("/landingpage");
  };

  return (
    <main className="flex flex-col justify-center bg-white">
      <section className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="pt-20 pr-1 pb-1 pl-14 mt-24 mb-3.5 max-w-full bg-white rounded-none border border-black border-solid w-[1122px] max-md:pl-5 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <section className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <header className="flex flex-col mt-6 text-sm font-bold leading-5 text-slate-950 text-opacity-50 max-md:mt-10 max-md:max-w-full">
                <h1 className="text-3xl text-center text-black capitalize max-md:max-w-full">
                  Welcome Arya Soni!
                </h1>
                <div className="flex gap-1 px-px mt-5 text-center capitalize max-md:flex-wrap">
                  <div className="shrink-0 border border-solid border-slate-400 border-opacity-50 h-[13px] w-[148px]" />
                  <div className="flex-auto">Login to your Account</div>
                  <div className="shrink-0 border border-solid border-slate-400 border-opacity-50 h-[13px] w-[148px]" />
                </div>
                <form className="flex flex-col mt-6 text-sm font-bold leading-5 text-slate-950 text-opacity-50 max-md:mt-10 max-md:max-w-full">
                  <Input
                    id="email"
                    name="Email-Id"
                    type="email"
                    className="px-8 py-5 mt-32 font-semibold capitalize whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                    placeholder="Enter your email"
                  />
                  <Input
                    id="password"
                    name="Password"
                    type="password"
                    className="px-8 py-5 mt-6 font-semibold capitalize whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 max-md:px-5 max-md:max-w-full"
                    placeholder="Enter your password"
                  />
                  <Button
                    className="justify-center items-center px-16 py-4 mt-6 text-base text-center text-white capitalize whitespace-nowrap bg-blue-600 rounded-md border border-solid border-stone-300 max-md:px-5 max-md:max-w-full"
                    onClick={handleLogin}
                  >
                    LOGIN
                  </Button>
                </form>
                <div className="self-center mt-7 font-extrabold text-center capitalize">
                  OR
                </div>
                <div className="flex gap-5 mt-7 font-semibold capitalize max-md:flex-wrap">
                  <div className="flex overflow-hidden relative flex-col flex-1 gap-5 px-3.5 py-2 border border-solid aspect-[4.56] border-stone-300 fill-white stroke-[1px] stroke-stone-300">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/87021b23093b5211bf734d93c856e2c0a9f4cd080b9d15c99b99ec59b50d5022?apiKey=4f5e8168750948a38cec95fbef7182ac&"
                      alt="Google Logo"
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative flex-auto my-auto">
                      Login With Google
                    </div>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b216d55d2846ccf5ed4d8fa3a01fbe8f405f6f67035e9d5ac923267f131aac8d?apiKey=4f5e8168750948a38cec95fbef7182ac&"
                      alt="Google Icon"
                      className="shrink-0 w-8 aspect-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 gap-5 px-3.5 py-1 bg-white rounded-md border border-solid border-stone-300">
                    <div className="flex-auto my-auto">Login With Github</div>
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f7accb471e9bb1de878d222ed943f80a89561705db1080473b02494c79017f7?apiKey=4f5e8168750948a38cec95fbef7182ac&"
                      alt="Github Icon"
                      className="shrink-0 w-10 aspect-[1.08]"
                    />
                  </div>
                </div>
                <div className="self-center mt-8 text-blue-600">
                  Don’t have an Account?{" "}
                  <Link href="/signup" passHref>
                    <span className="font-semibold text-blue-600">SIGN UP</span>
                  </Link>
                </div>
              </header>
            </section>
            <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-1.5 items-start mt-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="shrink-0 self-start w-px border border-solid bg-slate-400 bg-opacity-50 border-slate-400 border-opacity-50 h-[603px]" />
                <Image
                  src={design}
                  alt="Decorative Image"
                  className="grow shrink-0 self-end aspect-[3.7] basis-0 fill-blue-600 mt-[560px] w-fit max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyComponent;
