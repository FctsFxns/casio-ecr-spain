#Website de CASIO System Solutions

[![Build Status](https://travis-ci.org/FctsFxns/casio-ecr-spain.svg?branch=master)](https://travis-ci.org/FctsFxns/casio-ecr-spain)

	Julio de 2018
	url: http://www.casio-ecr.es/alpha/

## Información para desarrolladores

#### Dependencias

- Ruby & [Bundler](http://bundler.io/)
  - [jekyll-minimagick](https://github.com/zroger/jekyll-minimagick)
- [ImageMagick®](http://www.imagemagick.org/)
- [Bower](http://bower.io/)
- Node
- [Grunt](http://gruntjs.com/)



### Instalación

>	*Es necesario tener permisos de acceso al repositorio de código.*

1. Descargar repositorio	
	
	`$ mkdir casio-ecr.es  `  
	`$ cd casio-ecr.es  `  
	`$ git clone git@bitbucket.org:casioecr/casio-ecr.es.git .  `  
	
1. Ejecutar comando de instalación

	`$ ./bin/setup`
1. …


### Entorno de desarrollo

Antes de nada es necesario instalar [Grunt](http://gruntjs.com/). Desde el directorio de instalación:

`$ npm install`

Los comandos de theming son los siguientes:

`$ grunt --help`

`$ grunt build`

`$ grunt theming`

##### Variables de desarrollo

Empleamos variables de desarrollo para aprovechar el uso de livereload, por ejemplo.

> export JEKYLL_ENV=development

### Despliegue

El despliegue se realiza de manera automática mediante [Travis](https://travis-ci.org/).

Para ello se emplea un repositorio de código en github para que toda véz que haga un push se intenté desplegar el código en el servidor web.

- [https://github.com/FctsFxns/casio-ecr-spain](https://github.com/FctsFxns/casio-ecr-spain)

Para ello, es necesario añadir el repositorio de despliegue:

`$ cd casio-ecr.es  `  
`$ git remote add deploy git@github.com:FctsFxns/casio-ecr-spain.git  `  

De tal modo, basta con hacer push en este repositorio para que se publiquen los cambios al servidor de producción.

`$ git push remote master`  


**Notas:**

- Solo se realiza el despliegue si se valida correctamente el sitio web con 'html_proofer'

- El despliegue se realiza mediante 'glynn' tan solo para la rama 'master' en el repositorio de despliegue definido en Travis; en este caso, en GitHub.

- Es necesario indicar las credenciales FTP del servidor en forma de variables de entorno en Travis, y de este modo, no comprometer las credenciales del servidor en el código fuente del proyecto.


## Información para editores

	@todo


Este proyecto emplea [Jekyll](http://jekyllrb.com/) para la generación dinámica de las páginas del sitio web.

El contenido de la web se gestiona a través de este mismo repositorio de código.

### Configuración

En la carpeta '_data' encontrarás los ficheros de configuración en
formato YAML que te van a permitir gestionar los valores de:

- **global.yml**: textos comunes y valores del sitio web
- **sectores.yml**: textos, enlaces e imágenes para la sección 'Soluciones' de la homepage.
- **nav.yml**: la navegación principal del sitio web


### Navegación principal

	@todo

### Páginas

	@todo

