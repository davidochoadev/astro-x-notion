
import { useState } from "react";

export function MenuComponent({ sandwiches, categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filtered = sandwiches.filter(
   (item) => item.category === activeCategory
 );

 function getFilteredItemsCount(items, activeCategory) {
   return items.filter((item) => item.category === activeCategory).length;
 }

 function getCategoryName(category : any) {
   if (typeof category === 'string') {
      return category.split(' ')[1];
    }
    return '';
 };

  return (
    <main className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-2 sm:px-6 min-h-[calc(100lvh-80px)]">
      <aside className="w-full align-middle sm:sticky pt-10 sm:h-1 sm:top-6 sm:mt-24 sm:pt-4 sm:w-full p-2">
        <div className="flex items-center mb-10">
          <div className="flex-1">
            <p className="text-3xl font-bold text-selected">Menu</p>
          </div>
        </div>
        <div
          className="flex flex-row gap-4 overflow-x-auto py-4 px-4 sm:overflow-y-auto sm:flex-col rounded-xl bg-secondary border border-border max-h-[calc(100dvh-250px)] shadow-md "
          id="mobile-menu"
        >
         {/* CHECK AVAILABLE ITEMS */}
          {categories.map((category, index) => (
            getFilteredItemsCount(sandwiches, category) !== 0 && (
               <button
               key={index}
               className={`rounded-xl p-3 ${
                 activeCategory === category
                   ? " bg-selected-area"
                   : " bg-non-selected-area hover:bg-selected-area"
               } group min-w-max`}
               onClick={() => handleCategoryClick(category)}
             >
               <p
                 className={`${
                   activeCategory === category
                     ? "text-selected"
                     : "text-non-selected group-hover:text-selected"
                 } `}
               >
                 {category}
               </p>
             </button>
            )
          ))}
        </div>
      </aside>
      <div className="flex flex-row flex-wrap gap-2 p-2 sm:p-4 sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28 pb-28">
        {activeCategory && (
          <>
            <div className="flex items-center mb-8 w-full">
              <div className="flex-1">
                <p className="text-3xl font-bold text-selected">{getCategoryName(activeCategory)}</p>
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
    <div className="flex min-w-[18rem] flex-1 flex-col items-start justify-start gap-2 rounded-xl border border-border bg-secondary p-6 shadow-md ">
      {/*                 <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
      {item.img !== "" ? (
        <img src={item?.img} alt="Food" width={200} height={200} />
      ) : (
        <img src="../assets/salad.webp" alt="" />
      )}
    </div> */}
      <div>
        <h4 className="my-2 flex text-2xl font-bold text-dark-text">
          {title !== "" ? title : "N/A"}
        </h4>
        <div>
          {isAvailable ? (
            <div className=" my-2 flex w-min flex-row items-center gap-2 rounded-xl bg-available-area p-1 px-2 text-xs">
              <div className="h-[5px] w-[5px] rounded-full bg-available" />
              <p className="text-available">Available</p>
            </div>
          ) : (
            <div className=" my-2 flex w-max flex-row items-center gap-2 rounded-xl bg-not-available-area p-1 px-2 text-xs">
              <div className="h-[5px] w-[5px] rounded-full bg-not-available" />
              <p className="text-gray-800">Not Available</p>
            </div>
          )}
        </div>
        <p className="text-md text-selected">
          {price
            ? price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : "N/A"}
        </p>
        {description !== "" && (
          <p className="text-md my-2 text-text">{description}</p>
        )}
      </div>
    </div>
  );
}

export default MenuComponent;
