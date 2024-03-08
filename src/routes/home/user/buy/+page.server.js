import { redirect } from '@sveltejs/kit';
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const carId = formData.get('id');
       
        const res = await event.fetch(`https://car-dealership-management-api.onrender.com/api/users/buy/${carId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        const data = await res.json();
        if(res.ok){
            console.log("Car bought successfully");
            
            throw redirect(303, '/home/user')
        }
    }

}