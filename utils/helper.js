export function generateEmployeeName(){
    const suffix=Date.now().toString().slice(-4);
    return{
        firstName: `John${suffix}`,
        middleName: `K`,
        lastName: `Doe${suffix}`
    };
}