import React from 'react'

const InfoTexts = ({titulo, parrafo,numParrafo}) => {
    return <div className='info__texts'>
        <h1 className='info__title'>{titulo}</h1>
        {
          numParrafo === 1 ? (
            <p className='info__paragraph'>{parrafo}</p> 
          ) : numParrafo === 2 ? (
            <p className='info__paragraphOne'>{parrafo}</p>
          ) : ""
        }

    </div>
}

export default InfoTexts