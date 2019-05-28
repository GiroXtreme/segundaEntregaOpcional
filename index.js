const {argv,consultarOfertaCursos} = require('./datos');
const fs = require('fs');

const express = require("express");
const app = express();

let texto="";

if(argv._[0]=='consultar'){

	consultarOfertaCursos(0, true, function(id,descripcion, nombre,duracion,valor){
		texto+=("<b>Información básica del curso: "+descripcion+"</b>");
		texto+=("		-id: "+id+".");
		texto+=("		-nombre: "+nombre+".");
		texto+=("		-duracion: "+duracion +" semanas.");
		texto+=("		-valor: $ "+valor+".");
		texto+=("		-valor: $ "+valor+".");
		texto+=("<br>");
	});

	app.get('/oferta', function (req, res) {
	  res.send(texto);
	});

	app.listen(3000, function() {
	  console.log('Reporte generado!. Para visualizar el listado de cursos ingrese a: http://localhost:3000/oferta');
	  console.log('Para retornar, presione Ctrl+C en esta ventana.');
	});

}
else if(argv._[0]=='inscribir'){

	consultarOfertaCursos(argv.i, false, function(id,descripcion, nombre,duracion,valor){

		nombreArchivo= "inscripciones/"+argv.c+"_"+id+".html";


		cabeceraArchivo= '<!DOCTYPE html> <html lang="en"> <head><meta charset="utf-8"><title>Inscripción '+argv.c+'_'+id+'</title></head>';
		infoArchivo="<b>Información básica del curso: "+descripcion+"</b><br>"
				+"		-id: "+id+"."+"<br>"
				+"		-nombre: "+nombre+"."+"<br>"
				+"		-duracion: "+duracion +" semanas."+"<br>"
				+"		-valor: $ "+valor+".<br>"
				+"<b>Información de la persona inscrita:</b><br>"
				+"		-Nombre: "+argv.n+"."+"<br>"
				+"		-Cedula: "+argv.c+".";

		infoArchivo = cabeceraArchivo + infoArchivo + "</body></html>"

		fs.writeFile("./public/"+nombreArchivo, infoArchivo, (err)=>{
			if(err) throw (err);
			console.log('La inscripcion ha sido exitosa!');

			});
		app.use(express.static(__dirname+'/public'));

		app.listen(3000, function() {
		  console.log('Reporte generado!. Para visualizar el resultado de la inscripción ingrese a: http://localhost:3000/'+nombreArchivo);
		  console.log('Para retornar, presione Ctrl+C en esta ventana.');
		});
	});
}
else{
	console.log('Por favor seleccione alguna de las siguientes opciones:');
	console.log(' consultar: para consultar la oferta de cursos disponibles.');
	console.log(' inscribir: para inscribirse a un curso.');
}

