"use client";
import * as React from "react";

const MyComponent: React.FC = () => {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);
  const [organizationName, setOrganizationName] = React.useState("");

  const handleCardClick = (text: string) => {
    setActiveCard(text);
    if (text === "Company") setOrganizationName("Company Name");
    else if (text === "Organisation") setOrganizationName("Organisation Name");
  };

  const LabelInput: React.FC<{
    label: string;
    inputId: string;
    className?: string;
    inputType: string;
    inputPlaceholder: string;
  }> = ({ label, inputId, className, inputType, inputPlaceholder }) => (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={inputId} className="mb-2 font-medium text-gray-700">
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        className="px-3 py-2 border border-gray-300 rounded-md h-[38px]" 
      />
    </div>
  );

  const Button: React.FC<{
    className?: string;
    children: React.ReactNode;
  }> = ({ className, children }) => (
    <button
      className={`px-4 py-2 font-bold text-white rounded-md ${className} h-[38px]`} 
    >
      {children}
    </button>
  );

  const Card: React.FC<{
    text: string;
    isActive: boolean;
    onClick: () => void;
  }> = ({ text, isActive, onClick }) => (
    <div
      className={`grow items-center px-16 pt-6 pb-4 mt-10 w-full text-xl font-semibold leading-8 text-center capitalize whitespace-nowrap rounded-md border border-solid ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-white text-slate-950 border-stone-300"
      } max-md:px-5 cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </div>
  );

  const WelcomeSection: React.FC = () => (
    <div className="flex flex-col grow text-center capitalize leading-[150%] max-md:mt-10">
      <h2 className="text-3xl font-bold text-black">Welcome Arya Soni!</h2>
    </div>
  );

  return (
    <div className="flex flex-col px-20 pt-12 pb-20 bg-white w-full max-md:px-5 max-md:max-w-full">
      <button className="justify-center self-end px-12 py-4 text-sm font-bold leading-5 text-center capitalize rounded-md border border-solid bg-white bg-opacity-0 border-neutral-400 text-black text-opacity-50 max-md:px-5">
        Log Out
      </button>
      <section className="flex justify-center items-center self-center px-16 py-20 mt-36 mb-28 w-full bg-white max-w-[1508px] rounded-[35px] max-md:px-5 max-md:my-10 max-md:max-w-full">
        <div className="mt-14 mb-36 w-full max-w-[1202px] max-md:pr-5 max-md:my-10 max-md:max-w-full">
          <WelcomeSection />
          <div className="flex gap-5 mt-10 max-md:flex-col max-md:gap-0">
            <Card
              text="Developer"
              isActive={activeCard === "Developer"}
              onClick={() => handleCardClick("Developer")}
            />
            <Card
              text="Organisation"
              isActive={activeCard === "Organisation"}
              onClick={() => handleCardClick("Organisation")}
            />
            <Card
              text="Company"
              isActive={activeCard === "Company"}
              onClick={() => handleCardClick("Company")}
            />
          </div>
          {activeCard && (
            <form className="px-5 py-20 mt-14 max-w-full bg-white rounded-md border border-solid border-white w-[660px] max-md:mt-10 mx-auto flex flex-col max-md:flex-row max-md:items-center">
              <div className="flex gap-5 max-md:gap-0 items-center w-full">
                <LabelInput
                  label={organizationName}
                  inputId="organizationName"
                  className="w-full max-md:w-full max-md:mt-10"
                  inputType="text"
                  inputPlaceholder={organizationName}
                />
                <Button className="text-sm mt-7 font-bold bg-blue-600 text-white">
                  SUBMIT
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
