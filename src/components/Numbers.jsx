import React from 'react'
import Number from '../components/Number'

const Numbers = () => {
    return <section className='numbers'>
       <div className='numbers__content'>
        <Number imagen={1} titulo="1.4k+" parrafo="Communities Formed" />
        <Number imagen={2} titulo="2.7m+" parrafo="Messages Sent" />
       </div>

        <div className='wave wave__top'></div>
    </section>
}

export default Numbers