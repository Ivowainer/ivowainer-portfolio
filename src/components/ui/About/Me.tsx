import Image from 'next/image'

const Me = () => {
  return (
    <div className='grid grid-cols-3 text-gray-400 mt-10 text-lg gap-5 items-center justify-items-start'>
        <div className='col-start-1 col-end-3 mr-10'>
          <p className='text-gray-500 text-3xl font-bold'>👋 Hola! Mi nombre es Iván pero puedes decirme Ivo :))</p>
          <p className='mt-10'>Me considero una persona sociable y responsable, alguien quien tiene mucho que compartir y recibir; Soy receptivo y completamente abierto a nuevas sugerencias y formas de trabajo.</p>
          <p>Todas mis habilidades y conocimientos adquiridos a lo largo de estos años fueron de manera autodidacta. Debido al mundo de las TI, conocí amigos que me ayudaron en este camino.</p>
        </div>

        <div className="flex relative mb-4">
          <Image src="/ImageProfile.jpg" width={280} height={260} alt="" className=' rounded-md z-10'/>
          <div className="absolute border-2 border-emerald-500 w-64 h-64 right-[-20px] bottom-[-20px] rounded-md"></div>
        </div>
        

        <p className="col-start-1 col-end-4 ">A parte de la programación, tengo otras aficiones también, como ser un apasionado por la música; toco la guitarra y mi instrumento principal, el piano. También me gusta salir con amigos y andar en patineta. Me encantan tanto los días soleados como los lluviosos, en ambos puedo aprovecharlos al máximo.</p>

        {/* <div className=" text-gray-400 mt-10 text-lg">
              <p>Me considero una persona sociable y responsable, alguien quien tiene mucho que compartir y recibir; Soy receptivo y completamente abierto a nuevas sugerencias y formas de trabajo.</p>
              <p>Todas mis habilidades y conocimientos adquiridos a lo largo de estos años fueron de manera autodidacta. Debido al mundo de las TI, conocí amigos que me ayudaron en este camino.</p>
            <p className="mt-10">A parte de la programación, tengo otras aficiones también, como ser un apasionado por la música; toco la guitarra y mi instrumento principal, el piano. También me gusta salir con amigos y andar en patineta. Me encantan tanto los días soleados como los lluviosos, en ambos puedo aprovecharlos al máximo.</p>
        </div> */}
    </div>
  )
}

export default Me