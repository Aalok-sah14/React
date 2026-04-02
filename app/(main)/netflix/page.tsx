import React from "react";

const Netflix = () => {
    return (
        <div className = 'bg-black'>
            <img src ="https://iconlogovector.com/uploads/images/2024/02/lg-65d562aa7bff8-Netflix-black.webp" 
            width ={200}
            height = {200}
            />
            
        <div className = 'text-white front-extrablood fornt-mono'
        />
        
        <h1 className='text-4xl font-extrabold'> Unlimited movies, TV<br/>
        shows, and more </h1>

        <div className = 'text-white text-2xl font-extrabold font-mono'/>  
        Starts at USD 2.99. Cancel anytime.<br/>
        Ready to watch? Enter your email to create or restart your membership<br/><br/>
        <input placeholder="Email Address" className = 'md:w-85 p-1.5 bg-black/50 text-current border border-white > *  me-4  '/>  
        <input placeholder="Get Started" className = ' md:w-85 p-1.5 bg-red-700 text-white border border-white > *' />
        
        </div>

            

    
        
    )
}
export default Netflix