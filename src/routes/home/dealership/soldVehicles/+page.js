import { inventory } from '$lib/stores/inventory.js';

export const load = async (loadData) => {
    const { fetch } = loadData;
   
    const response = await fetch('https://car-dealership-management-api.onrender.com/api/dealerships/sold-vehicles');
    const vehicles = await response.json();
    inventory.set(vehicles);
    return { data: vehicles};
}