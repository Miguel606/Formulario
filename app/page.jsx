

const Home = () => {
  return (
    <div >
      
       <div className="flex flex-wrap justify-center p-5">
         <div>
         <h1 className="text-4xl font-bold text-white">Bienvenido a <a className="text-yellow-500">PraradiseGaming</a></h1>
          <p className="mt-2 text-lg text-white text-2xl ">¡Sumérgete en el paraíso del gaming!</p>
         </div>
       </div>

       <div className="flex flex-wrap justify-center ps-0 p-5 text-2xl text-white text-center">
         <div>
         <p><a className="text-yellow-500">En PraradiseGaming, ofrecemos una experiencia única para todos los amantes de los videojuegos </a>. Desde emocionantes torneos hasta comunidad activa, estamos aquí para llevarte al siguiente nivel de diversión y entretenimiento.</p>
    
         <p>¿Eres una marca buscando colaborar con nosotros? Ingresa tus detalles a continuación y nos pondremos en contacto contigo pronto.</p>
         <div className="justify-center my-2 p-2">
          <div>
          <img className="w-1/3  mx-auto"src="../../logo.svg" alt="" />
          </div>
         </div>
         </div>
         <div>
         <p className="text-center text-lg">En PraradiseGaming, ofrecemos una experiencia única para todos los amantes de los videojuegos. Desde emocionantes torneos hasta comunidad activa, estamos aquí para llevarte al siguiente nivel de diversión y entretenimiento.</p>
    
         <p className="mt-4 text-center"><a className="text-yellow-500">¿Eres una marca buscando colaborar con nosotros? Ingresa tus detalles a continuación y nos pondremos en contacto contigo pronto. </a></p>
         </div>

         <div>
         <a href="/form" className="block text-center mt-5 bg-yellow-500  p-3  hover:text-blue-700 index-500 rounded-md">Contáctanos</a>
         </div>
         

       </div>

           






       </div>
  )
}

export default Home