# Referencias

## Comandos importantes:

|Comando|REACT|Ubuntu|  GIT | PostgreSQL |  Descripción |
|---|:---:|:---:|:---:|:---:|---|
|npx create-react-app nombreDeLaApp|x|   |   |   | Nos crea un una app desde una base ya diseñada.|
|clip < texto.**extencion**|  | x |  x |   | Te hace un Crtl+C de algun archivo sin tener que abrir el archivo, selecionar y copiar, más fácil.   |
|echo "Algo que quieras" > archivo.**extencion**|   | x  |  x |   | Te crea un archivo con algo que quieras poner dentro.  |
|git config -e|||x||Te abre la configuracion de git para poder editarla. Ejemplo credentials.helper:store|
|sudo npm cache clean -f</br>sudo npm install -g n</br>sudo n stable</br>sudo n latest||x|||Comandos para actulizar npm y nodejs|
|git config credential.helper store||x|x||Nos guarda las credenciales en el disco para no tener que repetirlas en cada push|
|sudo ./filebeat -e -c /etc/filebeat/filebeat.yml -d "publish"||x|||Correr filebeat como en windows:</br>Situarse en la carpeta /usr/share/filebeat/bin y ejecutar</br>Si necesitamos correr de nuevo borrar la carpeta **data**|
|sudo -u logstash /usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/**filebeat.conf**||x|||Correr logstash como en windows pero solo un pipeline|
|[Instalar filebeat](https://kifarunix.com/install-and-configure-filebeat-7-on-ubuntu-18-04-debian-9-8/)||x||||
|[Instalar logstash](https://kifarunix.com/install-and-configure-logstash-7-on-ubuntu-18-debian-9-8/)||x||||
|[Configurar grok](https://kifarunix.com/how-to-debug-logstash-grok-filters/)||x||||
|||||||

## Links cursos:

React desde 0 canal midudev:
- https://www.youtube.com/watch?v=T_j60n1zgu0&feature=youtu.be

How to do a social media app with react canal <h>freeCodeCamp.org</h>:
- https://www.youtube.com/watch?v=n1mdAPFq2Os&feature=youtu.be

Reactjs curso canal fazt:
- https://www.youtube.com/watch?v=zIY87vU33aA&t=3s

## Información que puede ayudar
Sintaxis de Markdown:
- https://www.markdownguide.org/basic-syntax

Generador de tablas markdwon:
- https://www.tablesgenerator.com/markdown_tables#

## Conceptos importantes:
|Concepto|Descipción|
|---|---|
|MERN|MongoDB, Express, REACT, NodeJS| 
|GrahpQL|Digamos quien hara las consultas al servidor.|
|Ionic4|Framework para hacer aplicaciones en movil, ya es agnostico.|
|Agnostico|No está casdo con alguna tecnología o vendor.|
|Vendor|Compañia que suministra, ofrece software.|


## Links para el futuro:

Crear un app con React usando npx create-react-app canal midudev:
- https://www.youtube.com/watch?v=QBLbXgeXMU8

Nextjs curso canal fazt:
- https://www.youtube.com/watch?v=Tn6QYliFBcs&t=125s

Ionic4 & angular canal fazt:</br>
<h>Nota: Son varios videos.</h>
- https://www.youtube.com/watch?v=MMRqyQVQ980&t=187s


