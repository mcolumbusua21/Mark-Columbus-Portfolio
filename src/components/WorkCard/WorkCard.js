import React from 'react';
import "./WorkCard.css"


const WorkCard =({title, link,imgUrl})=> {

    return (
        <div className='card' onClick={()=>window.open(link, '_blank')}
        style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
        }} >
            <div className='card-title-container'>
                <h2 className='card-title'>{title}</h2>
            </div>
        
    </div>
    )
}


export default WorkCard