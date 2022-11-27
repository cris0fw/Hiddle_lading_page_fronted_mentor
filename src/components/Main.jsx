import React from 'react'
import imageCommunity from "../images/screen-mockups.svg"

const Main = () => {
    return <main className='main'>
        <section className='main__section'>
            <article className='main__section'>
                <h1 className='main__title'>Build The Community Your Fans Will Love</h1>
                <p className='main__paragraph'> Huddle re-imagines the way we build communities. You have a voice, but so does 
                your audience. Create connections with your users as you engage in genuine discussion. </p>
                <button className='cta'>Get Started For Free</button>
            </article>
            <figure className='main__figure'>
                <img className='main__img' src={imageCommunity} alt="screen__mockups" />
            </figure>
        </section>

    </main>
}

export default Main