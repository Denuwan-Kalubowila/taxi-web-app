export async function fetchCars(){
    const headers={
        'X-RapidAPI-Key': '23bad6cbc2msh0ca13e93ce44705p1ece50jsn56019c67a445',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
            headers:headers,
        }
        )
        const result= await response.json()
        return result
}
export const calculateRent=(city_mpg:number,year:number,)=>{
    const pricePerDay=50 //Base rental per Day
    const mileFactor=0.1 // Additional rate per mile
    const ageFactor=0.05 // Additional rate per vehicle age

    //calculate all adding rates

    const mileageRate=mileFactor*city_mpg;
    const ageRate=(new Date().getFullYear()-year)*ageFactor

    const rentPerDate=pricePerDay+mileageRate+ageRate

    return rentPerDate.toFixed(0)
}