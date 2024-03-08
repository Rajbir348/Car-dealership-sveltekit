import { redirect } from '@sveltejs/kit';
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        
        const  carId  = formData.get('id');
        
        const res = await event.fetch(`https://car-dealership-management-api.onrender.com/api/dealerships/car/delete/${carId}`);
        
        const data = await res.json();
        if(data.deletedCount>0){
           return redirect(303, '/home/dealership')
        }

    }

}