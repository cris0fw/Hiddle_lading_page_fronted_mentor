import React from 'react'
import communities from '../images/icon-communities.svg'
import messages from '../images/icon-messages.svg'

const Number = ({imagen, titulo, parrafo}) => {
    return <section className='number'>
        <figure className='number__figure'>
           {
                imagen === 1 ? (
                    <img className='number__figure' src={communities} alt="iconos" />
                ) : (
                    <img className='number__figure' src={messages} alt="iconos" />
                )
           }
        </figure>

        <h1 className='number__title'>{titulo}</h1>
        <p className='number__paragraph'>{parrafo}</p>
    </section>
}

export default Number