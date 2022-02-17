import React from 'react'
import Author from './Author'
import Avatar from './Avatar'
import './index.css'
import Message from './Message'
import Options from './Option'
import Time from './Time'

const Tweet = ({data}) => {
    console.log(data);
    return(
       <div className='tweet'>
           <Avatar hash={data.gravator}/>
      
       <div className="content">
           <Author autor={data.author}/>  <Time time={data.timestamp}/>          
            <Message msg={data.message}/>
       
       <div className='buttons'>
       <Options />  
     </div>
     </div>
     </div> 
    )
}
export default Tweet