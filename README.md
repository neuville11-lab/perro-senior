# Vida Perruna

Web estática en español con un catálogo de productos y una página independiente de comparación para perros adultos.

La portada reúne banner y catálogo. `comparador.html` permite seleccionar de dos a cuatro productos y ver sus detalles en columnas y tabla. Las tarjetas usan las fotos del catálogo actualizado y abren los enlaces de afiliado facilitados para cada producto. La selección se conserva al volver del catálogo.

La web ya está preparada para consultar los precios actuales mediante Amazon Creators API, tanto en las tarjetas como en el comparador. GitHub Actions refresca el feed una vez al día y publica fecha/hora junto al precio; la vista previa del banner interactivo está en `preview-perro-interactivo.html` y no forma parte de la publicación.

## Ejecutar

Abre `index.html` en el navegador. No necesita dependencias ni proceso de compilación.

## Antes de publicar ofertas reales

- Verificar que los enlaces de afiliado del catálogo abren los productos y atribuyen correctamente la cuenta.
- Para activar los precios, obtener credenciales aprobadas de Creators API y guardar en **Settings → Secrets and variables → Actions** los secretos `AMAZON_CREATOR_CLIENT_ID`, `AMAZON_CREATOR_CLIENT_SECRET` y `AMAZON_PARTNER_TAG`. Nunca guardar las credenciales en archivos públicos ni compartirlas por chat.
- La API entrega el precio vigente; no incluye un histórico. Cualquier histórico requerirá una fuente autorizada y cumplir las políticas de Amazon.
- Añadir avisos legales, privacidad y cookies adecuados antes de recoger datos o usar analítica.

El nombre **Vida Perruna** y el logotipo SVG son una propuesta inicial pendiente de comprobar disponibilidad de marca y dominio.


