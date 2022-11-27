import React from 'react'
import logo from '../images/logoblanco.png'
import telefono from '../images/icon-phone.svg'
import message from '../images/icon-email.svg'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return <footer className='footer'>
       <section className='footer__content'>
       <article className='footerArticle__one'>
          <div className='image__texts'>
            <figure className='footer__figure'>
                <img className='footer__img' src={logo} alt="logo" />
            </figure>
            <p className='footer__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
            vestibulum a, ultrices quis sem.</p>
          </div>   
          <div className='content__icons'>
            <div className='icons__content'>
                <figure className='figure__icons'>
                    <img className='img__icons' src={telefono} alt="telefono" />
                </figure>
                <p className='footer__paragrapsh'>Phone: +1-543-123-4567</p>
            </div>
                
            <div className='icons__content'>
                <figure className='figure__icons'>
                    <img className='img__icons' src={message} alt="telefono" />
                </figure>
                <p className='footer__paragrapsh'>example@huddle.com</p>
            </div>
          </div>      
       </article>
       <article className='footerArticle__two'>
            <h1 className='article__title'>Newsletter</h1>

            <p className='article__paragraph'>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
             send you spam or pass on your email address</p>
            
            <form className='form'>
                <input type="text" className='text' />
                <button className='form__button'>Subscribe</button>
            </form> 
        </article>   
       </section>
       
       <div className='icons'>
            <AiFillFacebook size={"35px"} color="white" style={{cursor: "pointer"}} />
            <BsInstagram size={"30px"} color="white" style={{marginLeft: "20px", cursor: "pointer"}} />
            <AiFillTwitterSquare size={"30px"} color="white" style={{marginLeft: "20px", cursor: "pointer"}} />
       </div>
  </footer>
}

export default Footer