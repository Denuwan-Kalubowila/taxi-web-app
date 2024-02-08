import { CarCard, CustomFillter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const cars=await fetchCars();
  const isDataEmpty= !Array.isArray(cars) || cars.length<1 || !cars
  return (
    <main className="">
      <Hero/>
      <div className="mt-12 padding-y padding-x max-width " id="dicover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like .</p>

          <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
              <SearchBar/>
              <div>
                  {/* <CustomFillter title="fuel"/>
                  <CustomFillter title="year"/> */}
              </div>
          </div>
          {!isDataEmpty?(
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car)=>(
                  <CarCard car={car}/>
                ))}
              </div>
            </section>
          ):(
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results </h2>
              <p>{cars?.message}</p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
