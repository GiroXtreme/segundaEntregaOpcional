const opcionesInscribir={
	idCurso:{
		alias:'i',
		demand:true
	},
	nombreInteresado:{
		alias:'n',
		demand:true
	},
	numeroCedula:{
		alias:'c',
		demand:true
	}
}
const cursos=[
	{
		id:101,
		nombre:"NodeJs",
		descripcion:"NodeJs - Curso Educación continua TdeA",
		duracion:5,
		valor:0
	},
	{
		id:202,
		nombre:"Phyton",
		descripcion:"Phyton - Curso Educación continua TdeA",
		duracion:4,
		valor:100
	},
	{
		id:303,
		nombre:"Ruby",
		descripcion:"Ruby - Curso Educación continua TdeA",
		duracion:3,
		valor:200
	},
	{
		id:404,
		nombre:"Java",
		descripcion:"Java - Curso Educación continua TdeA",
		duracion:2,
		valor:300
	}];


let consultarOfertaCursos = (varCurso, consultaTotal, callback)=>{

	if (consultaTotal){
		if(varCurso<cursos.length){
			setTimeout(function(){			
				callback(cursos[varCurso].id,
						 cursos[varCurso].descripcion,
						 cursos[varCurso].nombre,
						 cursos[varCurso].duracion,
						 cursos[varCurso].valor);			
				consultarOfertaCursos(varCurso+1, true, callback);
			
			},0);
		}
	}else{
		let cursoCons = cursos.find(cursoParam=> cursoParam.id==varCurso);

		if(cursoCons){
			callback(cursoCons.id,
				 cursoCons.descripcion,
				 cursoCons.nombre,
				 cursoCons.duracion,
				 cursoCons.valor);
		}else{
			console.log('El identificador del curso ingresado '+ varCurso+' no fué encontrado. Por favor intente nuevamente con un id válido');
		}		
	}
}

const argv = require('yargs')
			 .command('consultar','Consulta la oferta de cursos disponibles.', {})
			 .command('inscribir','Inscribe al usuario al curso indicado.', opcionesInscribir)
			 .argv;

module.exports={
	argv,
	consultarOfertaCursos
};
