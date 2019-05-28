Para ejecutar:
	En la consola de comandos ubicar la ruta del proyecto y lanzar el comando "node index" con alguna de las siguientes opciones:

	consultar : Para obtener la información de los cursos disponibles. Ej: "node index consultar".
	 Para visualizar el listado de cursos ingrese a: http://localhost:3000/oferta


	inscribir : Para inscribirse a uno de los cursos disponibles. Los parámetros que recibe son:
		-i : Hace referencia al id del curso deseado
		-n : Hace referencia al nombre de la persona a inscribir
		-c : Hace referencia al número de cédula.
		Ej: "node index inscribir -i=101 -n=Giovanni Rodriguez -c=110022".

	Para visualizar el resultado, segun la información de inscripción, debe ingresar a la URL:
	http://localhost:3000/inscripciones/{número de cédula}_{id del curso}.html

	Para el ejemplo sería:
	http://localhost:3000/inscripciones/110022_101.html