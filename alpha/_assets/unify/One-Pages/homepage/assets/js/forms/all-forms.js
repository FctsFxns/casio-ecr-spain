var ContactForm = function () {
    return {
        //All Forms from the website
        initContactForm: function () {
	        // Validation for subscription form
	        $("#sky-form1").validate({
	            // Rules for form validation
	            rules:
	            {
	            		// E-mail
	                'cm-ddurtit-ddurtit':
	                {
	                    required: true,
	                    email: true
	                },
	            },
	            // Messages for form validation
	            messages:
	            {
	            		// E-mail
	                'cm-ddurtit-ddurtit':
	                {
	                    required: 'Debes indicar tu dirección de email',
	                    email: 'Por favor, introduce un dirección de email válida'
	                },
	            },
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });


	        // Validation for become a partner form
	        $("#sky-form2").validate({
	          	rules:
	          	{

	          	},
	          	messages: 
	          	{
	                'cm-name':
	                {
	                    required: 'Indique su nombre, por favor',
	                },
	                // Teléfono
	                'cm-f-dylidtkt':
	                {
	                    required: 'Indique su nº de teléfono, por favor',
	                },
	                // Email
	                'cm-uylhwu-uylhwu':
	                {
	                    required: 'Por favor, indique su dirección de correo electrónico',
	                    email: 'Por favor, indique su dirección de correo electrónico'
	                },
	                // Posicion laboral
	                'cm-f-dylidtki':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Nombre de la empresa
	                'cm-f-dylidtkd':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Ciudad
	                'cm-f-dylidtkk':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Asunto
	                'cm-f-dylidtur':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Provincia
	                'cm-f-dylidtku':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Nº de empleados
	                'cm-fo-dylidtkh':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Soluciones , intereses.
	                'cm-f-dylidtuy':
	                {
	                    required: 'Es preciso informar este campo',
	                },

	          	}, 
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }	        	
	        });

	        // Validation for CONTACT form
	        $("#sky-form5").validate({
	            // Rules for form validation
	            rules:
	            {
	                'cm-name':
	                {
	                    required: true
	                },
	                'cm-f-dyolhdk':
	                {	                	
	                    required: true,
	                },
	                // Email
	                'cm-uytulri-uytulri':
	                {
	                    required: true,
	                    email: true
	                },
	                // message
	                'cm-f-dyolhhl':
	                {
	                    required: true,
	                    minlength: 10
	                },
	            },

	            // Messages for form validation
	            messages:
	            {
	                'cm-name':
	                {
	                    required: 'Indique su nombre, por favor',
	                },
	                // Phone
	                'cm-f-dyolhdk':
	                {
	                    required: 'Indique su nº de teléfono, por favor',
	                },
	                // Email
	                'cm-uytulri-uytulri':
	                {
	                    required: 'Por favor, indique su dirección de correo electrónico',
	                    email: 'Por favor, indique su dirección de correo electrónico'
	                },
	                // Asunto
	                'cm-f-dyolhdu':
	                {
	                		required: 'Por favor, indique el motivo de su consulta'
	                },
	                // message
	                'cm-f-dyolhhl':
	                {
	                    required: 'Por favor, introduzca su mensaje',
	                    minlength: 'El mensaje debe ser más largo de 10 carácteres'

	                },
	            },

	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });

        }
    };
}();
