import BookMark from "./BookMark"

const Education = () => {
  return (
    <section className=" lg:px-10 pt-10 mt-24" id="education">
        <p className="px-4 lg:px-10 text-3xl dark:text-gray-300 text-gray-600 font-bold">🎓 Educación</p>
        <div className="flex flex-col px-10 lg:w-7/12 lg:pl-20 mt-10" >
            <BookMark text="Lic. Ciencias de la Computación" date="2022" description="Licenciatura en Ciencias de la Computación en la FCEIA (Ciencias Exactas, Ingeniería y Agrimensura), UNR (Universidad Nacional de Rosario) "/>
            <BookMark text="Curso NextJS" date="2022" description="Next.js: El framework de React para producción | del profesor Fernando Herrera en Udemy" height="h-32 lg:h-24" />
            <BookMark text="Curso ReactJS" date="2021" description="React - La Guía Completa: Hooks Context Redux MERN +15 Apps | del profesor Juan Pablo de la Torre Valdez en Udemy" />
            <BookMark text="Curso Git" date="2021" description="Curso gratuito de RocketCode" height="h-24" />
            <BookMark text="Curso PHP & MySql" date="2019" description="Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL | del profesor Juan Pablo de la Torre Valdez en Udemy" />
            <BookMark text="Instituto Belgrano 2060" date="2018 - 2022" description="Secundaria situada en Rosario, Santa Fe; titulo en 'Bachiller en comunicación'. Con orientación en comunicación, artes, diseño y programación" lastItem={true}/>
        </div>
    </section>
  )
}

export default Education
