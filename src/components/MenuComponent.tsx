import { useState } from "react";

export function MenuComponent({ sandwiches, drink, other }) {
  const [sandwichIsView, setSandwichIsView] = useState(true);
  const [drinkIsView, setDrinkIsView] = useState(false);
  const [otherIsView, setOtherIsView] = useState(false);

  return (
    <main className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-4 sm:px-6 min-h-[calc(100lvh-80px)]">
      <aside className="w-full align-middle sm:sticky sm:h-1 sm:top-32 pt-24 sm:pt-0 md:w-2/6 p-4 border border-red-500">
        <div className="flex items-center mb-8">
          <div className="flex-1">
            <p className="text-3xl font-bold text-orange-200">Menu</p>
          </div>
        </div>
        <div
          className="overflow-y-auto hidden sm:flex flex-col py-4 px-3 rounded-xl bg-gray-800 border border-gray-700 max-h-[calc(100dvh-250px)]"
          id="desktop-menu"
        >
          <p className="text-white">Desktop menu</p>
        </div>
        <div
          className="flex flex-row sm:hidden gap-2 overflow-x-auto py-4"
          id="mobile-menu"
        >
          <button
            className={`rounded-xl p-3 ${
              sandwichIsView === true ? "bg-orange-400" : "bg-zinc-700"
            } flex flex-row gap-2`}
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
              className={`${sandwichIsView ? "text-slate-700" : "text-white"}`}
            >
              Sandwich
            </p>
          </button>
          <button
            className={`rounded-xl p-3 ${
              drinkIsView === true ? "bg-orange-400" : "bg-zinc-700"
            }  flex flex-row gap-2`}
            onClick={() => {
              if (drinkIsView === false) {
                setSandwichIsView(false);
                setDrinkIsView(true);
                setOtherIsView(false);
              }
            }}
          >
            <p className="text-xl">🥤</p>
            <p className={`${drinkIsView ? "text-slate-700" : "text-white"}`}>
              Drinks
            </p>
          </button>
          <button
            className={`rounded-xl p-3 ${
              otherIsView === true ? "bg-orange-400" : "bg-zinc-700"
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
            <p className={`${otherIsView ? "text-slate-700" : "text-white"}`}>Others</p>
          </button>
        </div>
      </aside>
      <div className="flex flex-row flex-wrap gap-2 p-4 sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28">
        {sandwichIsView && (
          <>
            <div className="flex items-center mb-8 w-full">
              <div className="flex-1">
                <p className="text-3xl font-bold text-orange-200">Sandwich</p>
              </div>
            </div>
            {sandwiches.map((item, index) => (
              <div
                className="flex min-w-[18rem] flex-1 flex-col items-center justify-start gap-2 rounded-xl border border-gray-700 bg-gray-800 p-6"
                key={index}
              >
                <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
                  {item.img !== "" ? (
                    <img src={item?.img} alt="Food" width={200} height={200} />
                  ) : (
                    <img src="../assets/salad.webp" alt="" />
                  )}
                </div>
                <div>
                  <h4 className="my-2 flex text-2xl font-bold text-gray-100">
                    {item?.title !== "" ? item?.title : "N/A"}
                  </h4>
                  {item?.description !== "" && (
                    <p className="text-md my-2 text-gray-400">
                      {item?.description}
                    </p>
                  )}
                  <div>
                    {item?.isAvailable ? (
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
                    {item?.price
                      ? item?.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
        {drinkIsView && (
          <>
            <div className="flex items-center mb-8 w-full">
              <div className="flex-1">
                <p className="text-3xl font-bold text-orange-200">Drinks</p>
              </div>
            </div>
            {drink.map((item, index) => (
              <div
                className="flex min-w-[18rem] flex-1 flex-col items-center justify-start gap-2 rounded-xl border border-gray-700 bg-gray-800 p-6"
                key={index}
              >
                <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
                  {item.img !== "" ? (
                    <img src={item?.img} alt="Food" width={200} height={200} />
                  ) : (
                    <img src="../assets/salad.webp" alt="" />
                  )}
                </div>
                <div>
                  <h4 className="my-2 flex text-2xl font-bold text-gray-100">
                    {item?.title !== "" ? item?.title : "N/A"}
                  </h4>
                  {item?.description !== "" && (
                    <p className="text-md my-2 text-gray-400">
                      {item?.description}
                    </p>
                  )}
                  <div>
                    {item?.isAvailable ? (
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
                    {item?.price
                      ? item?.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
        {otherIsView && (
          <>
            <div className="flex items-center mb-8 w-full">
              <div className="flex-1">
                <p className="text-3xl font-bold text-orange-200">Other</p>
              </div>
            </div>
            {other.map((item, index) => (
              <div
                className="flex min-w-[18rem] flex-1 flex-col items-center justify-start gap-2 rounded-xl border border-gray-700 bg-gray-800 p-6"
                key={index}
              >
                <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
                  {item.img !== "" ? (
                    <img src={item?.img} alt="Food" width={200} height={200} />
                  ) : (
                    <img src="../assets/salad.webp" alt="" />
                  )}
                </div>
                <div>
                  <h4 className="my-2 flex text-2xl font-bold text-gray-100">
                    {item?.title !== "" ? item?.title : "N/A"}
                  </h4>
                  {item?.description !== "" && (
                    <p className="text-md my-2 text-gray-400">
                      {item?.description}
                    </p>
                  )}
                  <div>
                    {item?.isAvailable ? (
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
                    {item?.price
                      ? item?.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </main>
  );
}

export default MenuComponent;