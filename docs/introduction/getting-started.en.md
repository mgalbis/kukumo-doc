---
title: Getting started
date: 2022-09-20
slug: /en/introduction/getting-started
---



### 1. Install Kukumo

Pull Kukumo docker image with:
```shell
docker pull kukumo/kukumo
```

[//]: # (Consulta [otras opciones de instalación]&#40;setup/installation&#41;)

### 2. Launch tests

Go to directory containing the Kukumo tests and run it:
```shell
cd ~/test
docker run --rm -it -v "$(pwd):/kukumo" kukumo/kukumo
```

[//]: # (Consulta las [instrucciones de uso]&#40;setup/usage&#41; para conocer todos los comandos y opciones.)

