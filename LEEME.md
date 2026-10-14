# Lechuga Estudios

Abrí `index.html` en el navegador. Las fichas individuales se abren desde cada juego y funcionan también localmente, sin servidor.

## Contenido para completar

- `index.html`: textos de presentación, secciones y contacto.
- `games.js`: descripción, historia/mecánicas y estado de cada juego. `videoUrl` admite una ruta a un archivo MP4/WebM; `demoUrl`, un enlace o ruta a la demo. Mientras sean `null`, se muestra el espacio pendiente.
- `content.js`: email y enlaces de redes. Reemplazá los valores `null` cuando quieras activarlos. También contiene las muestras de personajes.
- `app.js`: textos de las tarjetas de videos y novedades. Las novedades son espacios de ejemplo para completar, sin fechas ni anuncios inventados.
- `game.html`: textos comunes de las fichas.

Podés guardar videos y demos en `assets` y usar rutas como `assets/gameplay.mp4` o `assets/demo.zip`. Los videos usan el reproductor del navegador. Los enlaces de redes se activan al completar su URL. No hay formularios ni envíos de contacto mientras no se agregue el email.

Las capturas y las muestras de personajes son archivos reales de los proyectos. El espacio para bocetos todavía queda pendiente de contenido. Las fuentes de Google requieren conexión; la página usa fuentes alternativas cuando no están disponibles.

## Organización

La portada contiene presentación, juegos y equipo, con contacto y redes en el pie. Las capturas, gameplay, demos y proceso están en `game.html`. Las novedades se editan en `news.js` y se muestran en `novedades.html`. Las muestras de proceso de `content.js` se filtran por el nombre del juego.
