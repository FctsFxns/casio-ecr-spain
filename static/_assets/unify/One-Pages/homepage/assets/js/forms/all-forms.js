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
	                'email_1':
	                {
	                    required: true,
	                    email: true
	                },
	            },
	            // Messages for form validation
	            messages:
	            {
	            		// E-mail
	                'email_1':
	                {
	                    required: 'Debes indicar tu dirección de email',
	                    email: 'Por favor, introduce un dirección de email válida'
	                },
	                'legal-1':
	                {
	                    required: 'Es necesario aceptar las condiciones legales antes de continuar',
	                },
	                'legal-2':
	                {
	                    required: 'Es necesario aceptar las condiciones legales antes de continuar',
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
	                'char_01':
	                {
	                    required: 'Indique su nombre, por favor',
	                },
	                // Teléfono
	                'char_03':
	                {
	                    required: 'Indique su nº de teléfono, por favor',
	                },
	                // Email
	                'email_1':
	                {
	                    required: 'Por favor, indique su dirección de correo electrónico',
	                    email: 'Por favor, indique su dirección de correo electrónico'
	                },
	                // Posicion laboral
	                'char_04':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                'char_11a':
	                {
	                    required: 'Es preciso aceptar las condiciones legales',
	                },
	                'char_11':
	                {
	                    required: 'Es preciso aceptar las condiciones legales',
	                },
	                // Nombre de la empresa
	                'char_05':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Ciudad
	                'char_07':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Asunto
	                'text_1':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Provincia
	                'char_08':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Nº de empleados
	                'char_06':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                // Soluciones , intereses.
	                'char_10':
	                {
	                    required: 'Es preciso informar este campo',
	                },
	                'subscription':
	                {
	                    required: 'Es necesario aceptar las condiciones legales antes de continuar',

	                }

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
	                'char_01':
	                {
	                    required: true
	                },
	                // Phone
	                'char_03':
	                {	                	
	                    required: true,
	                },
	                // Motivo
	                'char_04':
	                {	                	
	                    required: true,
	                },
	                // Email
	                'email_1':
	                {
	                    required: true,
	                    email: true
	                },
	                // message
	                'text_1':
	                {
	                    required: true,
	                    minlength: 10
	                },
	                'subscription':
	                {
	                    required: true,
	                }
	            },

	            // Messages for form validation
	            messages:
	            {
	                'char_01':
	                {
	                    required: 'Indique su nombre, por favor',
	                },
	                // Phone
	                'char_03':
	                {
	                    required: 'Indique su nº de teléfono, por favor',
	                },
	                // Email
	                'email_1':
	                {
	                    required: 'Por favor, indique su dirección de correo electrónico',
	                    email: 'Por favor, indique su dirección de correo electrónico'
	                },
	                // Asunto
	                'char_04':
	                {
	                		required: 'Por favor, indique el motivo de su consulta'
	                },
	                // message
	                'text_1':
	                {
	                    required: 'Por favor, introduzca su mensaje',
	                    minlength: 'El mensaje debe ser más largo de 10 carácteres'

	                },
	                'subscription':
	                {
	                    required: 'Es necesario aceptar las condiciones legales antes de continuar',

	                }
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
