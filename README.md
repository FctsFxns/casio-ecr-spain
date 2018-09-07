#Website de CASIO System Solutions

[![Build Status](https://travis-ci.org/FctsFxns/casio-ecr-spain.svg?branch=master)](https://travis-ci.org/FctsFxns/casio-ecr-spain)

	Septiembre de 2018
	url: http://www.casio-ecr.es/

## Información para desarrolladores

Este repositorio deja de ser el principal para el código fuente de este proyecto; también [el repositorio 'casio-ecr-spain' de despliegue en Github](https://github.com/FctsFxns/casio-ecr-spain), espejo de éste.

A partir de septiembre de 2018, el repositorio principal es [casioecr-site en BitBucket](https://bitbucket.org/casioecr/casioecr-site/src/master/), donde está configurado a partir de ahora la información de despliegue del sitio web.

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

Consulte el manual de usuario disponible como documento de  Google Docs, bajo el nombre [CASIO-ECR.es -- manual para editores](https://docs.google.com/document/d/19w3uc3sa8x2nmdNywEYWg28nKWMy8nHPC7FYzC6Ta0A/edit#).

En la siguiente dirección debería encontrarse el manual de usuario:

- https://www.casio-ecr.es/admin/manual-de-uso.pdf

### Navegación principal

Los enlaces de la navegación principal, en este caso, están puestos directamente en el HTML de la plantilla de código, ya que no son dinámicos.

> *Para añadir y/o modificar enlaces de la navegación editar el contenido del fichero 'static/_includes/navigation.html'.*

-----

## Información para desarrolladores

#### Dependencias

**1. Edición:**

- Git
- Cuenta en Bitbucket
- Cuenta en GitHub, (opcional)

**2. Desarrollo:**

- Ruby & [Bundler](http://bundler.io/)
  - [jekyll-minimagick](https://github.com/zroger/jekyll-minimagick)
- Sass & Sprockets
- Node
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/), no es imprescindible ya que los recursos descargados se añaden al repositorio

**3. Despliegue:**

Opción vía Github / Travis, emplea:

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

 - view demo: cat=click + action=demo - 15€
 - download pdf: cat=click + action=download - 5€
 - contact us: cat=click + action=ayuda ( + label=<where>): 10€
 - partner: <funnel>: 25€

## Licencia

