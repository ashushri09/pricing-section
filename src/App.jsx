import { useState } from "react";
import "./App.css";
import subscriptionData from "./data.json";
import BillingCard from "./components/BillingCard";

function App() {
  const [selectedButton, setSelectedButton] = useState("Monthly");

  const selectedStyle = `border-0.5 border-neutral-200 rounded-sm shadow-sm md:shadow-md lg:shadow-lg`;

  return (
    <div className="flex bg-gray-200 p-4 min-h-screen">
      <div className="flex-1 flex flex-col bg-white rounded-sm shadow-sm px-3 py-12 gap-12 md:shadow-md md:rounded-md md:px-4 md:py-16 md:gap-16 lg:p-[96px] lg:shadow-lg">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 md:px-8 lg:px-[160px]">
            <div className="flex flex-col gap-3 md:px-10">
              <p className="text-base font-semibold text-indigo-700 text-center">
                Pricing Tiers
              </p>
              <p className="text-3xl font-semibold text-neutral-900 md:text-5xl text-center">
                Fit for all your needs
              </p>
            </div>
            <p className="text-lg font-normal text-neutral-600 md:text-xl text-center">
              Pick the plan that suits you today and step up as your demands
              grow - our flexible options have your journey mapped out.
            </p>
          </div>
          <div className="flex gap-4 md:justify-center mg:gap-8">
            <button
              className={`px-4 py-2.5 w-full md:w-[140px] ${selectedButton === "Monthly" && selectedStyle}`}
              onClick={() => setSelectedButton("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2.5 w-full md:w-[140px] ${selectedButton === "Annualy" && selectedStyle}`}
              onClick={() => setSelectedButton("Annualy")}
            >
              Annualy
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {subscriptionData.map((data) => {
            console.log("data is", data);
            return <BillingCard data={data} billingType={selectedButton} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
