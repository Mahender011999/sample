import React from 'react'
import image1 from '../../Components/images/image1.svg'
import './page.css'
const page = () => {
  return (
    
    < div className='pagecontainer'>
        <div>
       
        <img className='image2' src={image1} alt=''/>
       
        </div>
        <div>
            <h2 className='heading2'>Focused on <br/> Time Saving</h2>
            <p className='paragraph2'>Lorem Ipsum is simply dummy text of the
                 pnting and typesetting industry. Lorem <br/>Ipsum 
                 has been the industry's standard dummy text ever 
                 since the 1500s, when an<br/> unknown printer took 
                 a galley of type and scrambled it to make a type 
                 specimen <br/>book. It has survived not only five centuries, 
                 but also the leap into electronic <br/> typesetting, remaining essentially unchanged. It was</p>
        <button className='button'>Download the mobile app</button>

      
        </div>
  
     
    
  
    </div>
    

   
    
  )
}

export default page
