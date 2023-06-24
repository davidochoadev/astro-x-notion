
import { useState } from "react";

export function MenuComponent({ sandwiches, categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
   console.log(category);
    setActiveCategory(category);
  };

  const filtered = sandwiches.filter(
   (item) => item.category === activeCategory
 );

 console.log(filtered);

  return (
    <main className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-2 sm:px-6 min-h-[calc(100lvh-80px)]">
      <aside className="w-full align-middle sm:sticky pt-10 sm:h-1 sm:top-0 sm:mt-24 sm:pt-4 sm:w-full p-4">
        <div className="flex items-center mb-10">
          <div className="flex-1">
            <p className="text-3xl font-bold text-orange-200">Menu</p>
          </div>
        </div>
        <div
          className="flex flex-row gap-4 overflow-x-auto py-4 px-4 sm:overflow-y-auto sm:flex-col rounded-xl bg-gray-800 border border-gray-700 max-h-[calc(100dvh-250px)]"
          id="mobile-menu"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`rounded-xl p-3 ${
                activeCategory === category
                  ? "bg-orange-400"
                  : "bg-zinc-700 hover:bg-orange-400"
              } group min-w-max`}
              onClick={() => handleCategoryClick(category)}
            >
              <p
                className={`${
                  activeCategory === category
                    ? "text-slate-700"
                    : "text-white group-hover:text-slate-700"
                } `}
              >
                {category}
              </p>
            </button>
          ))}
          {/*           <button
            className={`rounded-xl p-3 ${
              sandwichIsView === true
                ? "bg-orange-400"
                : "bg-zinc-700 hover:bg-orange-400"
            } flex flex-row gap-2 group`}
            id="sandwich"
            onClick={() => {
              if (sandwichIsView === false) {
                setSandwichIsView(true);
                setDrinkIsView(false);
                setOtherIsView(false);
              }
            }}
          >
            <p className="text-xl">🥪</p>
            <p
              className={`${
                sandwichIsView
                  ? "text-slate-700"
                  : "text-white group-hover:text-slate-700"
              }`}
            >
              Sandwich
            </p>
          </button>
          <button
            className={`rounded-xl p-3 ${
              drinkIsView === true
                ? "bg-orange-400"
                : "bg-zinc-700 hover:bg-orange-400"
            }  flex flex-row gap-2 group`}
            onClick={() => {
              if (drinkIsView === false) {
                setSandwichIsView(false);
                setDrinkIsView(true);
                setOtherIsView(false);
              }
            }}
          >
            <p className="text-xl">🥤</p>
            <p
              className={`${
                drinkIsView
                  ? "text-slate-700"
                  : "text-white group-hover:text-slate-700"
              }`}
            >
              Drinks
            </p>
          </button>
          <button
            className={`rounded-xl p-3 ${
              otherIsView === true
                ? "bg-orange-400"
                : "bg-zinc-700 hover:bg-orange-400 group"
            }  flex flex-row gap-2`}
            onClick={() => {
              if (otherIsView === false) {
                setSandwichIsView(false);
                setDrinkIsView(false);
                setOtherIsView(true);
              }
            }}
          >
            <p className="text-xl">🍱</p>
            <p
              className={`${
                otherIsView
                  ? "text-slate-700"
                  : "text-white group-hover:text-slate-700"
              }`}
            >
              Others
            </p>
          </button> */}
        </div>
      </aside>
      <div className="flex flex-row flex-wrap gap-2 p-4 sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28 pb-28">
        {activeCategory && (
          <>
            <div className="flex items-center mb-8 w-full">
              <div className="flex-1">
                <p className="text-3xl font-bold text-orange-200">Sandwich</p>
              </div>
            </div>
            {filtered.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                isAvailable={item.isAvailable}
                price={item.price}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export function Card({ title, description, isAvailable, price }) {
  return (
    <div className="flex min-w-[18rem] flex-1 flex-col items-center justify-start gap-2 rounded-xl border border-gray-700 bg-gray-800 p-6">
      {/*                 <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
      {item.img !== "" ? (
        <img src={item?.img} alt="Food" width={200} height={200} />
      ) : (
        <img src="../assets/salad.webp" alt="" />
      )}
    </div> */}
      <div>
        <h4 className="my-2 flex text-2xl font-bold text-gray-100">
          {title !== "" ? title : "N/A"}
        </h4>
        {description !== "" && (
          <p className="text-md my-2 text-gray-400">{description}</p>
        )}
        <div>
          {isAvailable ? (
            <div className=" my-2 flex w-min flex-row items-center gap-2 rounded-xl bg-green-300 p-1 px-2 text-xs">
              <div className="h-[5px] w-[5px] rounded-full bg-green-500" />
              <p className="text-gray-800">Available</p>
            </div>
          ) : (
            <div className=" my-2 flex w-max flex-row items-center gap-2 rounded-xl bg-red-300 p-1 px-2 text-xs">
              <div className="h-[5px] w-[5px] rounded-full bg-red-500" />
              <p className="text-gray-800">Not Available</p>
            </div>
          )}
        </div>
        <p className="text-md text-amber-400">
          {price
            ? price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MenuComponent;
