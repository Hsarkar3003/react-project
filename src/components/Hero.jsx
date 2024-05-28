import './Hero.css';
const Hero = ()=>{
    return (
    <main>
    <div className="hero-content">
        <h1 >
            YOUR FEET DESERVE THE BEST
        </h1>
        <p>YOUR FEET DESERVE THE BEST AND WE ARE HEAR TO HELP YOUR WITH OUR CONSULT CHOSE WHAT YOU WANT FROM HEAR.SEE SOME LATEST AND BRAND NEW DESINE WITH ME LETS GO</p>
        <div className="buttons">
            <button  className='button1'>shop now</button>
            <button className='button2'>category</button>
            
        </div>
        <p>Also Available On</p>
        <div className="logo"> 
        <img href="https://www.amazon.in/b?node=14605651031" className="amezone" src="amz.jpg" alt="amezon-logo"/>
        <img className="flipcart" src="fct.jpg" alt="flipcart-logo"/>

       

        </div>
        
    </div>
    <div className="hero-pic">
    <img src="shooo.jpg" alt="shoose-logo"/>
    </div>

</main>);

}
export default Hero;