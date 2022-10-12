---
title: Core
date: 2022-09-20
slug: /en/kukumo/architecture
---


## Global configuration

Kukumo's configuration is defined via `yaml` file located in the test directory. By default, Kukumo will look for the 
file named `kukumo.yaml`.

- [`kukumo.resourceTypes`](#kukumoresourcetypes)
- [`kukumo.resourcePath`](#kukumoresourcepath)
- [`kukumo.outputFilePath`](#kukumooutputfilepath)
- [`kukumo.tagFilter`](#kukumotagfilter)
- [`kukumo.idTagPattern`](#kukumoidtagpattern)
- [`kukumo.launcher.modules`](#kukumolaunchermodules)
- [`kukumo.report.generation`](#kukumoreportgeneration)
- [`kukumo.redefinition.definitionTag`](#kukumoredefinitiondefinitiontag)
- [`kukumo.redefinition.implementationTag`](#kukumoredefinitionimplementationtag)
- [`mavenFetcher.remoteRepositories`](#mavenfetcherremoterepositories)
- [`mavenFetcher.localRepository`](#mavenfetcherlocalrepository)

### Environment variables

- [`KUKUMO_LOG_PATH`](#kukumo_log_path)
- [`KUKUMO_LOG_LEVEL`](#kukumo_log_level)

---
### `kukumo.resourceTypes`

Sets the language for test scenarios. Only `gherkin` is available for now.

Example:

```yaml
kukumo:
  resourceTypes: gherkin
```
&nbsp;


### `kukumo.resourcePath`

Sets the path where the test files are located.

Default value is `.` (path where the configuration file is located).

Example:

```yaml
kukumo:
  resourcePath: /other/path
```
&nbsp;


### `kukumo.outputFilePath`

Sets the results file directory.

Default value is `kukumo.json` (in the current directory).

Example:

```yaml
kukumo:
  outputFilePath: result/kukumo.json
```
&nbsp;



### `kukumo.tagFilter`

Filter scenarios tagged with the indicated [expression](https://cucumber.io/docs/cucumber/api/#tag-expressions).

Example:

```yaml
kukumo:
  tagFilter: not Ignore
```
&nbsp;


### `kukumo.idTagPattern`

Sets the indicated scenario id tag pattern. It must contains a valid regular expression.

Default value is `ID-(\w*)`.

Example:

```yaml
kukumo:
  idTagPattern: ([0-9]+)
```
&nbsp;


### `kukumo.launcher.modules`

Sets 
Establece los módulos que serán utilizados durante las pruebas. Estos módulos son artefactos maven ubicados en un 
[repositorio indicado en la configuración](#mavenfetcher-remoterepositories). Se debe indicar con el patrón 
`<groupId>:<artifactId>:<version>`.

Example:

```yaml
kukumo:
  launcher:
    modules:
      - iti.kukumo:kukumo-rest:1.0.0
      - iti.kukumo:kukumo-db:1.0.0
      - mysql:mysql-connector-java:8.0.28
```
&nbsp;


### `kukumo.report.generation`

Indica si se debe generar el informe con el resultados de las pruebas al terminar la ejecución o no.

Default value is `true`.

Example:

```yaml
kukumo:
  report: 
    generation: "false"
```
&nbsp;


### `kukumo.htmlReport.output`

Example:

```yaml
kukumo:
  htmlReport:
    output: result/kukumo.html
```
&nbsp;


### `kukumo.redefinition.definitionTag`

Establece la etiqueta para indicar que la **caracteristica** es una [definición]().

Default value is `definition`.

Example:

```yaml
kukumo:
  redefinition:
    definitionTag: def
```
&nbsp;


### `kukumo.redefinition.implementationTag`

Establece la etiqueta para indicar que la **caracteristica** es una [implementación]().

Default value is `implementation`.

Example:

```yaml
kukumo:
  redefinition:
    implementationTag: impl
```
&nbsp;


### `mavenFetcher.remoteRepositories`

Establece repositorios remotos.

Example:

```yaml
mavenFetcher:
  remoteRepositories: https://repo.maven.apache.org/maven2;file:///home/user/.m2/repository
```
&nbsp;

### `mavenFetcher.localRepository`

Establece la ubicación del repositorio local.

Example:

```yaml
mavenFetcher:
  localRepository: /usr/mvn-repo
```
&nbsp;


### `KUKUMO_LOG_PATH`

Establece la ruta donde se generará el log de ejecución.

Default value is `/var/log`.

```
KUKUMO_LOG_PATH=/kukumo/result
```
&nbsp;

### `KUKUMO_LOG_LEVEL`

Establece el nivel de los logs de kukumo. Dependiendo del nivel indicado se mostrará u omitirá más o menos información.
Los posibles valores son: `info`, `error`, `fatal`, `warning`, `debug`, `trace`.
[Leer más](https://unpocodejava.com/2011/01/17/niveles-log4j/)

Default value is `info`.

```
KUKUMO_LOG_LEVEL=trace
```
&nbsp;




## Tipos de datos

### `text`
Cualquier texto entrecomillado con `''`. Example: `'texto de ejemplo'`.

### `word`
Cualquier palabra (admite guiones). Example: `AB_C-1D`.

### `file`
Una ruta local (relativa o absoluta). Example: `'dir/file.yaml'`.

### `url`
Una dirección URL. Example: `'https://localhost/test'`.

### `integer`
Un número entero. Example: `14`.

### `decimal`
Un número con decimales. Example: `14.5`.

### `date`
Una fecha con formato `yyyy-MM-dd`. Example: `'2022-02-22'`.

### `time`
Una hora con formato `hh:mm`, `hh:mm:ss` o `hh:mm:ss.SSS`. Example: `'12:05:06.468'`.

### `datetime`
Una fecha y hora con formato `yyyy-MM-ddThh:mm`, `yyyy-MM-ddThh:mm:ss` o `yyyy-MM-ddThh:mm:ss.SSS`. Example: 
`'2022-02-22T12:05:06.468'`.

### `text-assertion`
Comparador de textos. [Ver más](#comparadores). Example: `es igual a 'algo'`.

### `long-assertion`
Comparador de números enteros. [Ver más](#comparadores). Example: `es igual o mayor que 13`.

### `float-assertion`
Comparador de números decimales. [Ver más](#comparadores). Example: `es igual o menor que 10.02`.

### `document`
Bloque de texto ubicado en la siguiente línea de la descripción del paso. 
[Ver más](https://cucumber.io/docs/gherkin/reference/#doc-strings). 

Example:
```gherkin
"""
Un texto 
multilínea
"""
```

### `table`
Tabla de datos ubicada en la siguiente línea de la descipción del paso.
[Ver más](https://cucumber.io/docs/gherkin/reference/#data-tables).

Example:
```gherkin
| USER  | STATE | BLOCKING_DATE |
| user1 | 2     | <null>        |
```


## Comparadores

Fragmentos de texto que se traducen en comparadores para distintos tipos de datos, reutilizables en cualquier paso.


---
### `(no) es (igual a) ~x~` 
Tipo: numérico y texto. También admite las variantes `es (igual a) ~x~ \(sin distinguir mayúsculas\)` y 
`es (igual a) ~x~ \(ignorando espacios\)` para las comparaciones de tipo texto, y la versión en negativo.

Ejemplos:
```
es 14
```
```
es igual a 22
```
```
es igual a 'algo'
```
```
es 'algo'
```
```
es igual a 'aLgo' (sin distinguir mayúsculas)
```
```
es igual a 'al go' (ignorando espacios)
```
```
no es igual a 14
```

---
### `(no) es (mayor|menor) que ~x~`
Tipo: numérico. También admite decimales y la versión en negativo.

Ejemplos:
```
es mayor que 14
```
```
es mayor que 14.3
```
```
es menor que 14
```
```
es menor que 14.3
```
```
no es mayor que 14
```

---
### `(no) es (mayor|menor) o igual que ~x~`
Tipo: numérico. También admite decimales y la versión en negativo.

Ejemplos:
```
es mayor o igual que 14
```
```
es mayor o igual que 14.3
```
```
es menor o igual que 14
```
```
es menor o igual que 14.3
```
```
no es mayor o igual que 14
```

---
### `(no) empieza por ~x~`
Tipo: texto. También admite la variante `empieza por ~x~ \(sin distinguir mayúsculas\)`, y la versión en negativo.

Ejemplos:
```
empieza por 'algo'
```
```
empieza por 'aLgo' (sin distinguir mayúsculas)
```
```
no empieza por 'algo'
```

---
### `(no) acaba en ~x~`
Tipo: texto. También admite la variante `acaba en ~x~ \(sin distinguir mayúsculas\)`, y la versión en negativo.

Ejemplos:
```
acaba en 'algo'
```
```
acaba en 'aLgo' (sin distinguir mayúsculas)
```
```
no acaba en 'algo'
```

---
### `(no) contiene ~x~`
Tipo: texto. También admite la variante `contiene ~x~ \(sin distinguir mayúsculas\)`, y la versión en negativo.

Ejemplos:
```
contiene 'algo'
```
```
contiene 'aLgo' (sin distinguir mayúsculas)
```

---
### `(no) es nulo`
Tipo: numérico y texto. También admite la versión en negativo.

Ejemplos:
```
es nulo
```
```
no es nulo
```

---
### `(no) está vacío`
Tipo: numérico y texto. También admite la versión en negativo.

Ejemplos:
```
está vacío
```
```
no está vacío
```

---
### `(no) es nulo o está vacío`
Tipo: numérico y texto. También admite la versión en negativo.

Ejemplos:
```
es nulo o está vacío
```
```
no es nulo o está vacío
```

