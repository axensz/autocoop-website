# AutoCoop Website

Sitio web oficial de AutoCoop - Aplicación de gestión y conciliación de pagos cooperativos.

## 🌟 Sobre AutoCoop

AutoCoop es una aplicación de escritorio diseñada para simplificar la gestión y conciliación de pagos y obligaciones financieras en cooperativas, ahorrando tiempo y reduciendo errores mediante automatización inteligente.

## 🚀 Características del Sitio Web

- **Astro + Tailwind CSS**: Framework moderno para máximo rendimiento
- **Diseño Responsive**: Adaptado para todos los dispositivos
- **Componentes Modulares**: Arquitectura escalable y mantenible  
- **SEO Optimizado**: Meta tags y estructura semántica
- **Animaciones Suaves**: Experiencia de usuario atractiva
- **Documentación Integrada**: Manuales de usuario y técnico

## 🎨 Colores de Marca

- **Azul Principal**: `#36317b` (autocoop-blue)
- **Amarillo**: `#f9c01a` (autocoop-yellow)  
- **Blanco**: `#f7fafc` (autocoop-white)
- **Gris Claro**: `#edf2f7` (autocoop-gray)

## 📁 Estructura del Proyecto

```
/
├── public/             # Archivos estáticos
├── src/
│   ├── components/     # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Downloads.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts base
│   │   └── Layout.astro
│   └── pages/          # Páginas del sitio
│       ├── index.astro
│       └── docs/       # Documentación
│           ├── manual-usuario.astro
│           └── manual-tecnico.astro
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)**: Framework web moderno y rápido
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitario
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático
- **[Font Awesome](https://fontawesome.com/)**: Iconografía
- **[Google Fonts (Inter)](https://fonts.google.com/)**: Tipografía

## 🧞 Comandos de Desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                | Acción                                         |
| :--------------------- | :--------------------------------------------- |
| `npm install`          | Instala las dependencias                      |
| `npm run dev`          | Inicia el servidor de desarrollo              |
| `npm run build`        | Construye el sitio para producción            |
| `npm run preview`      | Vista previa del build local                  |
| `npm run astro ...`    | Ejecuta comandos CLI de Astro                 |

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/axensz/autocoop-website.git
   cd autocoop-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+) 
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔗 Enlaces Importantes

- **Aplicación AutoCoop**: [GitHub Repository](https://github.com/Kolark/Autocoop)
- **Releases**: [Descargas](https://github.com/Kolark/Autocoop/releases)
- **Documentación**: Disponible en `/docs/` del sitio web

## 📈 Deployment

El sitio está preparado para desplegarse en:

- **Netlify** (recomendado)
- **Vercel** 
- **GitHub Pages**
- **Cloudflare Pages**

### Configuración para Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📧 Contacto

- **Email**: soporte@autocoop.com
- **GitHub**: [@axensz](https://github.com/axensz)
- **Proyecto**: [autocoop-website](https://github.com/axensz/autocoop-website)

---

**Desarrollado con ❤️ para cooperativas** 🚀
