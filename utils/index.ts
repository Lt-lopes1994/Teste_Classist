import { CarProps, FilterProps } from "@/types"

export async function fetchCarData(filters: FilterProps) {
  const {fuel,limit,manufacturer,model,year} = filters

  const headers =  {
      'X-RapidAPI-Key': '45c1076b18msha73ba0fcc96bb63p113955jsn89e3aeb13ab1',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers })

    const data = await response.json()

    return data
}

export const generateCarImageUrl = (car: CarProps, angle? : string) => {
  const url = new URL(`https://cdn.imagin.studio/getimage`)

  const {make, year, model} = car

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('xoomType', 'fullscreen');
  url.searchParams.append('year', year.toString());
  url.searchParams.append('angle', `${angle}`);

  return `${url}`
}

export const calculatedRentals = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;

  const kilometersFactor = 1.5;

  const ageFactor = 0.5;

  const kilometersRate = mpgToKpl(city_mpg) * kilometersFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + kilometersRate + ageRate;

  return Math.floor(Number(rentalRatePerDay.toFixed(2)))
}

export function mpgToKpl(mpg: number): number {
  const milesToKilometers = 1.60934;
  const gallonsToLiters = 3.78541;


  const kilometers = mpg * milesToKilometers;


  const liters = 1 / gallonsToLiters;


  const kpl = kilometers * liters;


  return Number(kpl.toFixed(2));
}

export function convertDriveType(drive: string): string {
  switch (drive.toLowerCase()) {
    case "awd":
      return "4X4";
    case "fwd":
      return "Dianteira";
    case "rwd":
      return "Traseira";
    default:
      return "Desconhecido";
  }
}

