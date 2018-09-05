# Manual de usuario

Sitio web de CASIO System Solutions (www.casio-ecr.es).


## Indice

- Portada +
- Presentación *
	- Mapa del sitio *
	- Galería de imágenes *
- Gestión de contenidos del sitio web *
	- Configuración del sitio web *
	- Documentos e imágenes *	
	- Casos de éxito *
	- Area de descargas *
	- Páginas del sitio web *
- Gestión de datos recogidos a través de formularios *
	- Programa para partners *
- Administración del sitio a través del navegador
	- Acceso al panel de control *
	- Documentos e imágenes *
	- Casos de éxito *
	- Area de descargas *
	- Páginas *
	- Configuración *
- Administración del sitio web a través del código fuente *
- Créditos *
 

## Contenido del manual

### Portada

Manual de Usuario

Sitio web de CASIO System Solutions España

www.casio-ecr.es

Creado: Julio de 2018.  
Última revisión: Septiembre de 2018.

### Presentación

En verano de 2.018 se publica la versión más reciente del portal en internet de CASIO System Solutions España en la dirección www.casio-ecr.es.

Este documento está dirigido a editores/as y describe el gestor de contenidos (CMS) que permite gestionar los contenidos que son administrables a través del CMS que compone el sitio web.

#### Descripción del portal

El portal en internet sirve como carta de presentación de la compañía, destacando la linea de soluciones que ofrece CASIO, casos de éxito y secciones como la historia de la compañía.

Además, se emplea para la recogida de datos de contacto de compañías interesadas en formar parte de la red de distribuidores oficiales de la marca en España. 

Los contenidos del sitio web se ofrecen en un solo idioma.

#### Contenidos no modificables

Por supuesto, no todos los contenidos del sitio web, así como estilos y comportamiento del portal, pueden ser modificados sin tener conocimientos previos de programación web.

Este sitio web ha sudo desarrollado empleando tecnología JAMstack que ofrece un rendimiento excepcional de cara al usuario, así como un altísimo nivel de seguridad informática. 

En este documento no se describe cómo modificar el código fuente, *source code*, que emplea este sitio web para funcionar.

> Contacte con los autores si desea más información sobre cómo gestionar el codigo HTML/CSS y la programación del portal web.   

#### Mapa del sitio

A fecha de publicación del sitio web, éste es el listado de todas las páginas, y sus respectivas URL's, que componen el mapa completo del sitio web:

- Página de bienvenida (/)
- Nuestra historia (/nuestra-historia)
- Manuales y fichas técnicas (/manuales)
- Programa para partners (/ser-distribuidor)
- Aviso legal (/aviso-legal)
- Política de protección de datos (/proteccion-de-datos)
- Política de cookies (/politica-de-cookies)

> Los/as editores/as pueden modificar y despublicar cualquiera de estas páginas según convenga.


### Gestión de contenidos del sitio web

Que no todos los contenidos del sitio web son editables por el usuario y que en este documento, vamos a tratar de aquellos que sí pueden ser administrados por usuarios que no requieran de conocimientos para editar el código fuente del sitio web.

Que para editar el contenido no indicado en este manual, la estructura interna y o el funcionamiento de la plataforma que conformar el sitio web, deberá contactar con el departamento de IT de CASIO España para acceder al código fuente de este proyecto. 



#### Configuración del sitio web

Existen textos y configuraciones que son comunes a todas las páginas que conforman el mapa del sitio web, y de las nuevas que puedan crearse.

Nos referimos a textos o literales como el nombre del sitio web, la dirección de e-mail de contacto, … que aparecen en determinados apartados del sitio web.

A continuación, describimos los diferentes valores de configuración del sitio web disponibles para ser editados, una explicación y sus valores por defecto. 

**Valores de sistema**

URL principal del sitio web  
*site.data.global.url*

Correo electrónico de contacto
email

Título del sitio web
title

Texto de descripción del sitio web
description

Nombre del propietario del sitio web
author

**Información para usuarios**

Texto para el horario de contacto
*site.data.global.horario*

Url interno de página con formulario para distribuidores
url_distribuidor

URL interno de página con sección 'Nuestra Historia' 
url_historia

URL externo de página de contacto
url_contacto

#### Documentos e imágenes 

Como es habitual a la hora de gestionar el contenido de un sitio web, resulta necesario administrar las imágenes que los usuarios pueden visualizar en el sitio web. También, para los documentos que pueden ser descargados, como archivos PDF, etc…

Hemos escogido una carpeta denominada 'media' para almacenar todos los documentos e imágenes subidos por los editores del sitio web.

> Los documentos e imágenes que subas al sitio web estarán disponibles a través de la dirección https://www.casio-ecr.s/media/.

Es importante mantener esta carpeta ordenada y emplear un criterio de denominación de carpetas que sea práctico y sencillo.

Las carpetas creadas actualmente en el directorio 'media/' son las siguientes

**casos/**

Imágenes empleadas para acompañar los casos de éxito publicados en el sitio web. Para una correcta visualización de la información se requiere que las imagenes empleadas tengan exáctamente las dimensiones 800x496px.

**products/**

Imágenes de productos clasificadas por familia. Las imágenes son en formato PNG con transparencia.

**pdf/**

**assets/**

> La carpeta 'assets/' contiene imágenes que son empleadas por la plantilla HTML del sistema. Se recomienda no modificar los contenidos de esta carpeta.

Por último, a la hora de crear nuevas imágenes se recomienda emplear una herramienta de optimización que asegure que el tamaño es el mínimo posible y más adecuado para el entorno web.


#### Casos de éxito

Los editores de sitio web pueden administrar completamente los casos de éxito que aparecen en el sitio web, así como la información asociada a cada uno de ellos.

> Los casos de éxito aparecen en la página de bienvenida del sitio web.

También, pueden controlar el orden en el que aparecen en la página.

Esta es la información que es necesario indicar para cada uno de los casos de éxito:

- Título
- Imagen (800x496px)
- Texto del titular
- Texto para la descripción
- Documento PDF o enlace URL 


#### Area de descargas

El sitio web ofrece una página propia donde es posible consultar los manuales y fichas técnicas disponibles para cada producto de la gama de soluciones CASIO.

Los diferentes manuales aparecen en el area de descargas del sitio web agrupados por apartados, que suelen corresponder con un producto o grupo de productos.

Para cada apartado se deberá indicar:

- Título del apartado o producto
- Imagen 

De esta manera serà posible, indicar tantos ficheros descargables como haya disponibles. Para cada descarga, es necesario indicar los siguientes valores:

- Nombre de la descarga
- Descripción
- Documento PDF o enlace URL
- Texto para el botón de descarga


#### Páginas del sitio web

- Título de la página
- Texto de descripción para buscadores
- Dirección URL interna
 

