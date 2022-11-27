import React from 'react'
import InfoTexts from './InfoTexts'
import growTogether from '../images/illustration-grow-together.svg'
import flowingConversations from '../images/illustration-flowing-conversation.svg'
import yourUser from '../images/illustration-your-users.svg'

const Articles = () => {
    return <section className='articulos'>
        <section className='articulos__one'>
            <article className='info'>
                <InfoTexts 
                    titulo="Grow Together" 
                    parrafo="Generate meaningful discussions with your audience and build a strong, loyal community. 
                    Think of the insightful conversations you miss out on with a feedback form."
                    numParrafo={1}
                />

                <figure className='info__figure'>
                    <img className='info__img' src={growTogether} alt="grow together" />
                </figure>
            </article>
        </section>
        <section className='articulos__two'>
            <div className='wave wave__bottom'></div>
            <article className='info__one'>
                <InfoTexts 
                    titulo="Flowing Conversations"
                    parrafo="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                    just-in-time loading for a more natural flow."
                    numParrafo={2}
                /> 

                <figure className='info__figure'>
                    <img className='info__img' src={flowingConversations} alt="flowing conversations" />
                </figure>
            </article>
            <div className='wave__top2'></div>
        </section>
        <section className='articulos__three'>
             <article className='info'>
                <InfoTexts 
                        titulo="Your Users" 
                        parrafo="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                        once signed in to your app, your users can start chatting immediately."
                        numParrafo={2}
                    />

                    <figure className='info__figure'>
                        <img className='info__img' src={yourUser} alt="your user" />
                    </figure>    
             </article>   
        </section>
        
    </section>
}

export default Articles