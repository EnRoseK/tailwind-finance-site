import Laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">
            Data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Managa Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id iusto
            architecto, delectus veritatis magnam rerum cupiditate ipsum nisi
            iste distinctio consectetur impedit, saepe rem porro nostrum dolorum
            explicabo. Accusantium, id!
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
