#Website de CASIO System Solutions

[![Build Status](https://travis-ci.org/FctsFxns/casio-ecr-spain.svg?branch=master)](https://travis-ci.org/FctsFxns/casio-ecr-spain)

	Julio de 2018
	url: http://www.casio-ecr.es/

## Información para desarrolladores

### Instalación

>	*Es necesario tener permisos de acceso al repositorio de código.*

1. Descargar repositorio	
	
	`$ git clone git@bitbucket.org:casioecr/casio-ecr.es.git `  

	_Se descargará el proyecto en una nueva carpeta llamada 'casio-ecr.es'._
	
1. Ejecutar comando de instalación

	`$ ./static/bin/setup`

1. Cruzar los dedos :D

> _No, en serio. Si lo que deseas es editar el contenido del website, sigue leyendo. Basta con editar un par de ficheros y ya. No necesitas instalarte cosas raras. Ésto es más para diseñadores o programadores._


## Información para editores

	@todo

Este sitio web permite cambiar contenidos de manera cómoda y sin tener qué saber programar, como cualquier otra plataforma conocida como WordPress, Drupal, …

La particularidad de este proyecto, es que no empleamos ninguna base de datos, y el contenido que cambia del sitio web está escrito en ficheros de texto.

Esto facilita mucho las cosas y hace que el sitio web sea excepcionalmente seguro y funcione con una rapidez extraordinaria. 


### ¿Dónde se guarda la información del sitio web? 

El contenido y configuración de la web se encuentra en la carpeta **static**.

Basta con editar los ficheros adecuados para añadir o borrar nuevos casos de éxito, cambiar el orden de los productos, editar el texto de las páginas legales, añadir más manuales, …

> Este proyecto emplea [Jekyll](http://jekyllrb.com/) para la generación dinámica de las páginas del sitio web.


### Carpeta para imágenes y documentos

Todos los ficheros e imágenes del contenido del sitio web se encuentra en la carpeta **/static/media**.

De esta manera, si queremos añadir un documento PDF, una imagen, … basta con pegarlo en '/static/media', y en el directorio que creamos oportuno: 'pdf', 'manuales', …

> El nombre de estas carpetas es arbitrario y por convención. Se han creado según el criterio que no has parecido más conveniente para tener ordenados los materiales de este proyecto.

Contiene las siguientes carpetas:

- **/static/media/casos**

En esta carpeta se encuentran las imágenes y PDF's de los casos de éxito.

- **/static//media/pdf**

Documentos PDF como manuales de usuario, fichas técnicas, …

- **/static//media/products**

Imagenes de los productos.

- **/static//media/assets**

Carpeta con los elementos gráficos del proyecto web. Se recomienda no editar, ni borrar los elementos de esta carpeta, a riesgo de afectar la funcionalidad global del sitio web.


### Textos literales y variables del sitio web

En la carpeta '/static/_data' encontrarás los ficheros de configuración en
formato YAML que te van a permitir gestionar los valores de:

- **global.yml**: textos comunes y valores del sitio web
- **casos.yml**: entradas de los casos de éxito con textos, enlaces e imágenes.
- **manuales.yml**: productos y descargas de la sección manuales

#### GLOBAL.YML

````
* title:            CASIO System Solutions España
* slogan:           '…'
* description:      '…'
* url_distribuidor: 'ser-distribuidor'
* url_historia:     'nuestra-historia'
* url_contacto:     'http://bit.ly/casioayuda'

* author:           CASIO España
* email:            info@casio-ecr.es

* horario:          de lunes a jueves de 9:00 a 19:00h y los viernes de 9:00 a 14:00h

* footer_contact:   > # dirección postal
* footer_text:      © 2018 CASIO System Solutions es un sitio propiedad de CASIO España, S.L, Todos los derechos reservados.
````

#### CASOS.YML

Ejemplo:

````
- title:   'Restaurante Banna'
- media:    'media/casos/default.jpg' 
- headline: ''El restaurante Banna …'
- text: '…'
- pdf: '/media/casos/pdf/Banna.pdf'
- 
````

#### MANUALES.YML


### Páginas

	@todo

### Navegación principal

Los enlaces de la navegación principal, en este caso, están puestos directamente en el HTML de la plantilla de código, ya que no son dinámicos.

> *Para añadir y/o modificar enlaces de la navegación editar el contenido del fichero 'static/_includes/navigation.html'.*

-----

## Información para desarrolladores

#### Dependencias

**1. Edición:**

- Git
- Cuenta en Bitbucket
- Cuenta en GitHub

**2. Desarrollo:**

- Ruby & [Bundler](http://bundler.io/)
  - [jekyll-minimagick](https://github.com/zroger/jekyll-minimagick)
- Sass & Sprockets
- Node
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/), no es imprescindible


**3. Despliegue:**

- Glynn
- HTML proofer

### Entorno de desarrollo

Antes de nada es necesario tener instalado [Grunt](http://gruntjs.com/).

Desde el directorio de instalación:

`cd static`  
`$ npm install`

A partir de aqui, y si todo se instala correctamente, basta ejectuar grunt para poder editar el código y ver los cambios en local en la url 'http://localhost:8004'.

`$ grunt `

Los comandos de theming son los siguientes:

`$ grunt --help`

`$ grunt build`

`$ grunt theming`

Se recomienda instalar [Bower](http://bower.io/) si se van a emplear nuevas librerías javascript para modificar la programación de la web.   

> Esto no es necesario, si lo que se desea es editar el contenido.  
> Además, el directorio de descarga de bower, está incluido en el repositorio de código.   

`cd static`  
`$ bower --version > /dev/null || npm install -g bower`  


##### Variables de desarrollo

Empleamos variables de desarrollo para aprovechar el uso de livereload, por ejemplo.

> export JEKYLL_ENV=development

### Despliegue

El despliegue se realiza de manera automática mediante [Travis](https://travis-ci.org/).

Para ello se emplea un repositorio de código en GitHub para que toda véz que haga un push se intenté desplegar el código en el servidor web.

- [https://github.com/FctsFxns/casio-ecr-spain](https://github.com/FctsFxns/casio-ecr-spain)

Para ello, es necesario añadir el repositorio de despliegue:

`$ cd casio-ecr.es  `  
`$ git remote add deploy git@github.com:FctsFxns/casio-ecr-spain.git  `  

De tal modo, basta con hacer push en este repositorio para que se publiquen los cambios al servidor de producción.

`$ git push remote master`  

**Notas:**

- Solo se realiza el despliegue si se valida correctamente el sitio web con 'html_proofer'*.

- El despliegue se realiza mediante 'glynn' tan solo para la rama 'master' en el repositorio de despliegue definido en Travis; en este caso, en GitHub.

- Es necesario indicar las credenciales FTP del servidor en forma de variables de entorno en Travis, y de este modo, no comprometer las credenciales del servidor en el código fuente del proyecto.


## Events

 -view demo: cat=click + action=demo - 15€
 -download pdf: cat=click + action=download - 5€
 -contact us: cat=click + action=ayuda ( + label=<where>) - 10€
 -partner: <funnel> - 25€

## Licencia

