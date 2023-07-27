import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCarData } from "@/utils";

export default async function Home({ searchParams }) {
  const allCars = await fetchCarData({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Catálogo de Carros</h1>
          <p>
            Explore nosso catálogo de carros e encontre o carro ideal para você.
          </p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1 font-bold">
              Opa! parece que não achamos nenhum carro com essas especificações!
            </h2>
            {allCars?.message}
          </div>
        )}
      </div>
    </main>
  );
}
