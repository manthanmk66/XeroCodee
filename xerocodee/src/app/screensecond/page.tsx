"use client";
import * as React from "react";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="justify-center self-end px-12 py-4 text-sm font-bold rounded-md border border-solid bg-white bg-opacity-0 border-neutral-400 text-black text-opacity-50 max-md:px-5">
      {text}
    </button>
  );
};

type CardProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ title, isActive, onClick }) => {
  return (
    <div
      className={`items-center px-16 pt-6 pb-4 bg-white rounded-md border border-solid border-stone-300 max-md:px-5 max-md:max-w-full ${
        isActive ? "bg-blue-500 text-white" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const MyComponent: React.FC = () => {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setActiveCard(activeCard === title ? null : title); // Toggle active state
  };

  return (
    <div className="flex flex-col justify-center text-center capitalize bg-white leading-[150%]">
      <div className="flex flex-col px-20 pt-12 pb-20 w-full max-md:px-5 max-md:max-w-full">
        <Button text="Log Out" />
        <main className="flex justify-center items-center self-center px-16 py-20 mt-36 mb-28 w-full bg-white max-w-[1492px] rounded-[35px] max-md:px-5 max-md:my-10 max-md:max-w-full">
          <section className="flex flex-col mt-14 mb-36 max-w-full w-[1038px] max-md:my-10">
            <h1 className="self-center text-3xl font-bold text-black">
              Welcome Arya Soni !
            </h1>
            <div className="flex gap-5 justify-between mt-32 text-xl font-semibold text-slate-950 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <Card
                title="Self Hosting"
                isActive={activeCard === "Self Hosting"}
                onClick={() => handleCardClick("Self Hosting")}
              />
              <Card
                title="XeroCodee Hosting"
                isActive={activeCard === "XeroCodee Hosting"}
                onClick={() => handleCardClick("XeroCodee Hosting")}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyComponent;
