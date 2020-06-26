exports.createPages = async ({ actions , graphql , reporter }) => {
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion{
            nodes{
                slug
               }
            }
        }
    `);

    // console.log(resultado.data.allDatoCmsHabitacion.nodes); 
    if(resultado.errors){ //Gatsby te da la posibilidad de ver los errores en consola con este comando
        reporter.panic('No hubo resultados',resultado.errors);
    }

    //Si hay paginas , crear los archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    //iteramos en cada una de ellas, porque vamos a tener una respuesta con las paginas que encontro, y por cada una de ellas vamos a ir creando una pagina
    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    });
}