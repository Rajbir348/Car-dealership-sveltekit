

export const load = async (loadData) => {
    const { fetch } = loadData;
   
    const response = await fetch('https://car-dealership-management-api.onrender.com/api/users/vehicles');
    const vehicles = await response.json();
   
    return { data: vehicles};
}