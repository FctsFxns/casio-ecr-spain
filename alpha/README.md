# Desenvolupament del nou website de CASIO ECR

	Març de 2017

[![Build Status](https://travis-ci.org/casioecr/casio-ecr.es.png)](https://travis-ci.org/casioecr/casio-ecr.es)

	url: http://www.casio-ecr.es/alpha/


## Parámetres técnics i credencials

### FTP

- servidor: "casio-ecr.es"
- port: "21"
- username: "casioo"
- password: "75p7278l"
- path: "public_html/alpha"

### Base de dades

Credencials de la base de des

- servidor: "casio-ecr.es" o "localhost"
- database: "casioo_db1"
- username: "casioo_1"
- password: "nrGy2QGTtYiuwCvi"

### Campaign monitor

Hemos creado un usuario en campaign monitor que emplearemos para notificar los registros en los formularios de la web.

- user: emarketing@casio-ecr.es
- pwd: 11casioecr22

> @todo: activar en KONSOLEH la redirección al email de casio.es cuando la web esté en marcha.

## Información para editores

El contenido de la web se gestiona a través de este repositorio de código.

### Configuración

En la carpeta '_data' encontrarás los ficheros de configuración en
formato YAML que te van a permitir gestionar los valores de:

- **global.yml**: textos comunes y valores del sitio web
- **sectores.yml**: textos, enlaces e imágenes para la sección 'Soluciones' de la homepage.
- **nav.yml**: la navegación principal del sitio web

## Información para desarrolladores

### Instalación

1. Descargar repositorio
1. Ejecutar comando de instalación

	./bin/setup

#### Dependencias

- Ruby & [Bundler](http://bundler.io/)
  - [jekyll-minimagick](https://github.com/zroger/jekyll-minimagick)
- [ImageMagick®](http://www.imagemagick.org/)
- [Bower](http://bower.io/)

### Desarrollo

- [Grunt](http://gruntjs.com/)

Antes de nada es necesario instalar grunt

> npm install

Los comandosde theming son los siguientes:

> grunt --help
> 
> grunt build
> 
> grunt theming

## Variables de desarrollo

Empleamos variables de desarrollo para aprovechar el uso de livereload, por ejemplo.

> export JEKYLL_ENV=development

### Despliegue

El despliegue se realiza de manera automática mediante travis.

**Notas:**

- Solo se realiza el despliegue si se valida correctamente el sitio web con 'html_proofer'

- El despliegue se realiza mediante 'glynn' tan solo para la rama 'deploy'.

- Debe indicar las credenciales FTP del servidor como variables de entorno en Travis.


### Imágenes

Fondo bueno  
- https://es.123rf.com/search.php?word=camarero+mesas&start=300&t_word=Waiter%20tables&t_lang=es&imgtype=&searchopts=&itemsperpage=100&sti=m5nsj79ldh0m5887b5|&mediapopup=40819427

Imagen perfecta para un place-it del app  
- https://es.123rf.com/search.php?word=retrato+restaurante&start=600&t_word=Restaurant%20portrait&t_lang=es&imgtype=&oriSearch=retrato%20camarero&searchopts=&itemsperpage=100&sti=n5lfbcold47p8qgspx|&mediapopup=54066155


