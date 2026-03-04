# OC Constructora - Sitio Web

Sitio web profesional para OC Constructora con diseño minimalista y moderno.

## 📁 Estructura de Archivos

```
/
├── index.html         # Página principal
├── nosotros.html      # Página Nosotros con carrusel de equipo
├── proyectos.html     # Página Proyectos con carrusel
├── clientes.html      # Página Clientes con logos
├── styles.css         # Estilos del sitio
├── script.js          # JavaScript para carruseles y navegación
├── logo.jpg           # Logo de OC Constructora
└── README.md          # Este archivo
```

## 🎨 Características

- ✅ Diseño minimalista y profesional
- ✅ Responsive (se adapta a móviles, tablets y escritorio)
- ✅ Navegación entre páginas separadas
- ✅ Carruseles automáticos con controles manuales
- ✅ Integración con WhatsApp para contacto
- ✅ Colores basados en el logo de OC Constructora

## 🔧 Personalización

### 1. Cambiar el Número de WhatsApp

Busca en todos los archivos HTML el siguiente enlace:
```
https://wa.me/5212345678900
```

Reemplázalo con tu número real (incluye código de país sin el +):
```
https://wa.me/52TUNUMERO
```

### 2. Agregar Imágenes Reales del Equipo (nosotros.html)

En `nosotros.html`, busca las URLs de Unsplash en la sección del carrusel:

```html
<div class="carousel-slide">
    <img src="https://images.unsplash.com/..." alt="Equipo de construcción">
    <div class="carousel-caption">
        <h3>Profesionales Comprometidos</h3>
    </div>
</div>
```

Reemplaza las URLs con tus propias imágenes:

```html
<div class="carousel-slide">
    <img src="imagenes/equipo-1.jpg" alt="Equipo de construcción">
    <div class="carousel-caption">
        <h3>Profesionales Comprometidos</h3>
    </div>
</div>
```

### 3. Agregar Imágenes Reales de Proyectos (proyectos.html)

Similar al paso anterior, en `proyectos.html` busca las imágenes del carrusel y reemplázalas con fotos de tus proyectos reales.

Puedes agregar o quitar slides según necesites. Copia y pega este bloque:

```html
<div class="carousel-slide">
    <img src="imagenes/proyecto-X.jpg" alt="Nombre del Proyecto">
    <div class="carousel-caption">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve</p>
    </div>
</div>
```

### 4. Agregar Logos de Clientes (clientes.html)

En `clientes.html`, encontrarás placeholders con este código:

```html
<div class="client-logo">
    <div class="logo-placeholder">
        <svg>...</svg>
        <span>Logo Cliente 1</span>
    </div>
</div>
```

Reemplázalo con la imagen real del logo:

```html
<div class="client-logo">
    <img src="logos/cliente-1.png" alt="Nombre Cliente 1">
</div>
```

Agrega este CSS para que los logos se vean bien:

```css
.client-logo img {
    max-width: 180px;
    max-height: 100px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: all 0.3s ease;
}

.client-logo:hover img {
    filter: grayscale(0%);
}
```

### 5. Organizar tus Imágenes

Crea carpetas para organizar tus imágenes:

```
/
├── imagenes/
│   ├── equipo-1.jpg
│   ├── equipo-2.jpg
│   ├── proyecto-1.jpg
│   ├── proyecto-2.jpg
│   └── ...
├── logos/
│   ├── cliente-1.png
│   ├── cliente-2.png
│   └── ...
└── ...
```

## 📱 Características Responsive

El sitio se adapta automáticamente a:
- 📱 Móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Escritorio (> 768px)

En móviles, la navegación se convierte en un menú hamburguesa.

## 🎯 Secciones del Sitio

### Página Principal (index.html)
- Hero section con imagen de fondo
- Valores de la empresa
- Call-to-action para contacto

### Nosotros (nosotros.html)
- Descripción de la empresa
- Valores destacados
- Carrusel de fotos del equipo trabajando

### Proyectos (proyectos.html)
- Tipos de proyectos (badges)
- Carrusel grande con proyectos realizados

### Clientes (clientes.html)
- Grid de logos de clientes
- Efecto hover en cada logo

## 🚀 Cómo Usar

1. Descarga todos los archivos
2. Coloca el logo (logo.jpg) en la misma carpeta
3. Abre `index.html` en tu navegador
4. Personaliza el contenido según las instrucciones arriba

## 📞 Contacto

El botón de contacto en todas las páginas abre WhatsApp con un mensaje predefinido:
> "Quiero información sobre sus servicios, busco a alguien de su equipo que me contacte para más detalles."

## 🎨 Colores del Sitio

Los colores están basados en el logo de OC Constructora:

- **Primary Color**: #467c8f (Azul/Teal del logo)
- **Primary Dark**: #36626f (Azul oscuro)
- **Secondary**: #e8eef0 (Gris claro)
- **Text Dark**: #1a1a1a (Negro para texto)
- **Text Light**: #6b7280 (Gris para texto secundario)

Puedes modificar estos colores en `styles.css` en la sección `:root`.

## 💡 Consejos para Mejores Resultados

1. **Imágenes del equipo**: Usa fotos de buena calidad (mínimo 1200x800px)
2. **Imágenes de proyectos**: Fotos horizontales funcionan mejor en el carrusel
3. **Logos de clientes**: Formatos PNG con fondo transparente se ven mejor
4. **Optimiza las imágenes**: Comprime las fotos para que el sitio cargue rápido
5. **Nombres descriptivos**: Nombra tus archivos de forma clara (ej: "proyecto-residencial-1.jpg")

## 🌐 Para Subir a Internet

Para que tu sitio esté en línea, necesitas:

1. Un servicio de hosting (ejemplos: HostGator, GoDaddy, Hostinger)
2. Subir todos los archivos por FTP
3. Configurar un dominio (ejemplo: www.occonstructora.com)

¡Tu sitio está listo para personalizarse y publicarse! 🏗️
