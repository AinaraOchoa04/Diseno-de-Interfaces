/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Jonathan",
				Photo: "jonathan.png",
				Quote: "Si te rallas lo mejor es no rallarte.",
				Age: 25,
				Occupation: "Técnico Informático",
				Family: "Soltero",
				Location: "Granada (Guarchos)",
				Character: "Le gusta el deporte",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				], 
				Goals: ["Mantener la tranquilidad y evitar complicaciones o estrés inutil",
        "Disfrutar de su tiempo libre practicando deporte y saliendo con amigos"],
				Frustrations: ["Las situaciones de estrés excesivo o cuando la gente se 'raya' por cosas sencillas",
        "Falta de tiempo para compaginar el trabajo en el ayuntamiento con sus aficiones deportivas"],
				Bio: "Jonathan tiene 25 años y es natural de Gualchos. Actualmente reside en Granada y trabaja como Técnico Informático en el Ayuntamiento de Armilla, un puesto que le aporta estabilidad laboral. Se considera una persona tranquila, pragmática y con una filosofía de vida relajada. En su día a día le gusta mantenerse activo y practicar deporte.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos: "Busca mantener un equilibrio entre su trabajo técnico y sus momentos de desconexión, priorizando el deporte y planes tranquilos sin complicaciones.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Monica Naranjo",
				Photo: "monica-naranjo.png",
				Quote: "Si un proceso se puede automatizar o un sistema se puede optimizar, no hay tiempo que perder.",
				Age: 28,
				Occupation: "Ingeniera de Sistemas / Administradora de Infraestructura Cloud",				
				Family: "Vive con su pareja e independencia familiar desde temprana edad.",
				Location: "Madrid (Trabajo en remoto / Híbrido)",
				Character: "Metódica, resolutiva y comprometida bajo presión.",
				PersonalityTraits: [
				{ Name: "Introvertido/reservado Vs   Extrov/activo ", Value: 3 },
				{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
				{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
				{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: [
				"Garantizar un 99.9% de disponibilidad (uptime) en la infraestructura de la empresa.",
				"Implementar un nuevo pipeline de CI/CD que reduzca los tiempos de despliegue.",
				"Avanzar en su carrera técnica hacia el rol de Lead DevOps Engineer.",
				"Conseguir una certificación oficial en AWS/Kubernetes este trimestre."
				],
				Frustrations: [
				"Sistemas heredados (legacy) sin documentación clara ni mantenimiento.",
				"Caídas repentinas de servidor causadas por código no probado en entornos de producción.",
				"Herramientas de monitorización complejas que generan falsos positivos constantes.",
				"Falta de plataformas centralizadas para gestionar incidencias sin perder tiempo."
				],
				Bio: "Mónica estudió Ingeniería Informática y rápidamente se especializó en arquitectura de sistemas. Tras un par de años trabajando en soporte de TI de nivel 2, dio el salto a la gestión de infraestructura en la nube. Actualmente lidera la migración de servicios críticos en su compañía. Se enfrenta a diario al reto de mantener la seguridad y el rendimiento del sistema mientras adapta nuevas herramientas de software para el equipo de desarrollo, lo que la convierte en una perfil ideal para soluciones SaaS B2B de infraestructura y DevOps.",
				Tech: [
				{ Name: "TIC/Internet", Value: 5 },
				{ Name: "Mobile", Value: 3 },
				{ Name: "RRSS", Value: 2 },
				{ Name: "Software", Value: 5 }
				], 
				Contextos: "Optimizar flujos de trabajo en entornos cloud, resolver incidencias críticas de TI en tiempo récord y adoptar software que mejore la productividad del equipo técnico.",
				PreferredChannels: [
				{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
				{ Name: "Online & Social Media", Value: 4 },
				{ Name: "Recomendaciones & sugerencias", Value: 5 },
				{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
			]
		}
		];
		$scope.model = $scope.Personas[0];

	}])