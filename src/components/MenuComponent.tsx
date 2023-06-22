import { useState } from "react";

export function MenuComponent({menu}) {
   const [sandwichIsView, setSandwichIsView] = useState(true);

   function sandwichFunc(e) {
      e.preventDefault();
      console.log("IS FUNC");
   }

   return (
      <main className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto max-w-screen-2xl px-4 sm:px-6 min-h-[calc(100lvh-80px)]">
         <aside className="w-full align-middle sm:sticky sm:h-1 sm:top-32 pt-24 sm:pt-0 md:w-2/6 p-4 border border-red-500">
         <div className="flex items-center mb-8">
            <div className="flex-1">
               <p className="text-3xl font-bold text-orange-200">Menu</p>
            </div>
         </div>
         <div className="overflow-y-auto hidden sm:flex flex-col py-4 px-3 rounded-xl bg-gray-800 border border-gray-700 max-h-[calc(100dvh-250px)]" id="desktop-menu">
            <p className="text-white">Desktop menu</p>
         </div>
         <div className="flex flex-row sm:hidden gap-2 overflow-x-auto" id="mobile-menu">
            <button className="rounded-xl p-3 bg-zinc-700 flex flex-row gap-2" id="sandwich" onClick={sandwichFunc}>
               <p className="text-xl">🥪</p>
               <p className="text-lg">Sandwich</p>
            </button>
            <button className="rounded-xl p-3 bg-zinc-700 flex flex-row gap-2" onClick={(e) => {console.log(e)}}>
               <p className="text-xl">🥤</p>
               <p className="text-lg">Drinks</p>
            </button>
            <button className="rounded-xl p-3 bg-zinc-700 flex flex-row gap-2">
               <p className="text-xl">🍱</p>
               <p className="text-lg">Others</p>
            </button>
         </div>
      </aside>
      <div className="flex flex-row flex-wrap gap-2 p-4 sm:col-span-2 lg:col-span-3 2xl:col-span-4 sm:pt-28">
      <div className="flex items-center mb-8 w-full">
         <div className="flex-1"><p className="text-3xl font-bold text-orange-200">Sandwich</p></div>
      </div>
      {
         menu.map((item, index) => (
            <div className="flex min-w-[18rem] flex-1 flex-col items-center justify-start gap-2 rounded-xl border border-zinc-700 bg-zinc-800 p-6" key={index}>
               <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
                  {item.img !== '' ? (
                     <img src={item?.img} alt="Food" width={200} height={200} />
                  ) : (
                     <img src="../assets/salda.webp" alt=""/>
                  )}
               </div>
               <div className="text-center">
                  <h4 className="my-2 flex text-2xl font-bold text-gray-100">
                     {item?.title !== '' ? item?.title : 'N/A'}
                  </h4>
                  {item?.description !== '' && (
                     <p className="text-md my-2 text-gray-400">{item?.description}</p>
                  )}
                  <div className="pt-2">
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
                        ? item?.price.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD'
                          })
                        : 'N/A'}
                  </p>
               </div>
            </div>
         ))
      }
      			<div className="flex items-center mb-8 w-full">
				<div className="flex-1"><p className="text-3xl font-bold text-orange-200">Other</p></div>
			</div>
{/* 			{
				other.map((item) => (
					<div className="flex min-w-[18rem] flex-1 flex-col items-center justify-start gap-2 rounded-xl border border-gray-700 bg-gray-800 p-6">
						<div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl bg-white">
							{item.img !== '' ? (
								<Image src={item?.img} alt="Food" width={200} height={200} format="avif" />
							) : (
								<Image src={saladImg} alt=""/>
							)}
						</div>
						<div>
							<h4 className="my-2 flex text-2xl font-bold text-gray-100">
								{item?.title !== '' ? item?.title : 'N/A'}
							</h4>
							{item?.description !== '' && (
								<p className="text-md my-2 text-gray-400">{item?.description}</p>
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
									? item?.price.toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD'
									  })
									: 'N/A'}
							</p>
						</div>
					</div>
				))
			} */}
      </div>
   </main>
   )
}

export default MenuComponent