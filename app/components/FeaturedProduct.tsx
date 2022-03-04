export default function FeaturedProduct() {
  return (
    <div className="relative w-full h-[300px] bg-white p-8 rounded shadow overflow-hidden">
      <div className="h-full flex flex-col justify-center items-start z-40 relative">
        <p className="font-bold text-lg text-sky-800">New Arrival!</p>
        <h1 className="text-5xl mb-3  max-w-lg">
          Reusable Silicone Drinking Straws
        </h1>
        <a
          href="https://www.amazon.com/Reusable-Silicone-Drinking-Cleaning-Eco-Friendly/dp/B09PRPYLGG/ref=sr_1_6?m=A1EEYPEVF7DX6F&qid=1646346663&s=merchant-items&sr=1-6&tag=amannhomego04-20"
          target="_blank"
          className="text-white bg-sky-800 px-3 py-1 rounded shadow font-bold text-xl"
        >
          Buy Now
        </a>
      </div>
      <img
        src="/images/straws.jpg"
        className="absolute right-12 -bottom-2 rotate-2 w-64 z-10"
      />
      <div className="absolute z-10 inset-0 w-full h-full bg-white opacity-50 sm:hidden" />
    </div>
  );
}
