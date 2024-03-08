import { allCars } from '../../../lib/stores/allCars.js';


export const load = async (loadData) => {
    const {fetch}=loadData;
    const res=await fetch('https://car-dealership-management-api.onrender.com/api/cars');
    const data=await res.json();
    allCars.set(data);
   
    return {data:data};
}