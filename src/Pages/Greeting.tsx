import React from 'react'

interface GreetingProps{
    name : string;
    age? : number;
}

 const Greeting: React.FC<GreetingProps> =({ name ,age})=>{

return(
<div> hello , {name}</div>


);

}
export default Greeting;