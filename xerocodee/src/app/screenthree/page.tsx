"use client";

import * as React from "react";

interface TemplateCardProps {
  title: string;
  description: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description }) => {
  return (
    <section className="grow py-6 pr-20 pl-6 w-full bg-white rounded-md border border-solid border-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto rounded-md border border-solid bg-white bg-opacity-0 border-neutral-400 h-[91px] w-[91px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto capitalize leading-[150%] max-md:mt-10 max-md:max-w-full">
            <h2 className="text-2xl font-medium text-slate-950 max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-6 text-lg font-light text-black max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const MyComponent: React.FC = () => {
  const templates = [
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
    {
      title: "Import existing app",
      description: "Import an existing app from your own repository",
    },
  ];

  // Splitting templates into two rows
  const firstRow = templates.slice(0, 4);
  const secondRow = templates.slice(4);

  return (
    <div className="flex flex-col pb-20 bg-white">
      <header className="flex flex-col px-20 py-11 w-full max-md:px-5 max-md:max-w-full">
        <button
          className="justify-center self-end px-12 py-4 text-sm font-bold leading-5 text-center capitalize rounded-md border border-solid bg-white bg-opacity-0 border-neutral-400 text-black text-opacity-50 max-md:px-5"
          tabIndex={0}
        >
          Log Out
        </button>
      </header>
      <main className="flex flex-col self-center mt-32 w-full max-w-[1510px] max-md:mt-10 max-md:max-w-full">
        <section className="justify-center items-center px-16 py-16 text-3xl font-bold leading-10 text-center text-black capitalize bg-white rounded-[35px] max-md:px-5 max-md:max-w-full">
          Choose a template to deploy an application 🚀 <br />
          <span className="text-xl font-light">
            Import your existing app or create a new one with our ready-made
            templates
          </span>
          .
        </section>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              {firstRow.map((template, index) => (
                <TemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                />
              ))}
            </div>
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              {secondRow.map((template, index) => (
                <TemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyComponent;
