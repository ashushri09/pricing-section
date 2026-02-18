const BillingCard = ({ data, billingType }) => {
  return (
    <div className="flex flex-col shadow-sm border border-neutral-200 p-4 gap-8 rounded-lg w-full md:p-8">
      {data.isHighlighted && (
        <div className="-mx-4 -mt-4 md:-mx-8 md:-mt-8 py-4 text-center text-xl font-bold text-indigo-700 bg-indigo-50 rounded-t-lg">
          Most Popular
        </div>
      )}
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold text-neutral-900">{data.title}</p>
        <p className="text-base font-normal text-neutral-600">
          {data.description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-end">
          <p
            className={`text-5xl font-semibold ${data.isHighlighted ? "text-indigo-700" : "text-neutral-900"}`}
          >
            ${data.pricing[billingType].price}
          </p>
          <p
            className={`text-base font-normal ${data.isHighlighted ? "text-indigo-700" : "text-neutral-600"}`}
          >
            /month
          </p>
        </div>
        <p className="text-base font-normal text-neutral-600">
          {data.pricing[billingType].billingText}
        </p>
      </div>
      <div className="flex flex-col gap-5 mb-auto">
        {data.features.map((feature) => {
          return (
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="h-6 w-6 bg-indigo-50 rounded-full text-indigo-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 8 27 L 20 39 L 42 10" />
              </svg>
              <p className="font-normal text-lg text-neutral-600">{feature}</p>
            </div>
          );
        })}
      </div>
      {data.isHighlighted ? (
        <button className="w-full rounded-sm shadow-sm bg-indigo-700 text-base text-white font-medium text-center p-3">
          Buy Now
        </button>
      ) : (
        <button className="w-full rounded-sm shadow-sm border border-neutral-200 text-base text-neutral-900 font-normal text-center p-3">
          Buy Now
        </button>
      )}
    </div>
  );
};

export default BillingCard;
