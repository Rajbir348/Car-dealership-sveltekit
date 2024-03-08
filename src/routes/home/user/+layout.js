export const load = async (event) => {
 
    const res=await event.fetch('https://car-dealership-management-api.onrender.com/api/alldealerships');
    const data=await res.json();
   
    
    return {data:data};
}