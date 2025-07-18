// Información centralizada de descarga de AutoCoop
// Este archivo mantiene toda la información sincronizada entre componentes

export const downloadInfo = {
  version: "1.0.0",
  filename: "AutoCoop.Setup.1.0.0.exe",
  size: "~265 MB",
  downloadUrl: "https://github.com/axensz/autocoop-website/releases/download/setup/AutoCoop.Setup.1.0.0.exe",
  
  // Release notes
  releaseNotes: {
    newFeatures: [
      " Primera versión oficial de AutoCoop disponible para el público",
      " Gestiona múltiples empresas con sistemas de nómina mensual y quincenal",
      " Importa archivos Excel de forma automática con validación inteligente",
      " Filtra y busca información por mes, año y estado de envío",
      " Genera reportes profesionales exportables a Excel",
      " Lista de verificación para seguimiento completo de procesos",
      " Panel de configuración personalizable según tus necesidades",
      " Validaciones automáticas para evitar errores en los datos",
      " Almacenamiento seguro de toda tu información localmente"
    ],
    improvements: [
      " Interfaz moderna y fácil de usar",
      " Rendimiento optimizado para archivos grandes",
      " Navegación intuitiva entre diferentes secciones",
      " Diseño responsivo que se adapta a tu pantalla",
      " Notificaciones claras sobre el estado de tus procesos"
    ],
    bugFixes: [
      " Primera versión estable - sin errores conocidos",
      " Validación mejorada durante la importación de archivos",
      " Mayor estabilidad en el procesamiento de datos",
      " Optimización de velocidad para operaciones complejas"
    ]
  },
  
  // System requirements
  systemRequirements: {
    minimum: [
      "Windows 10 o superior",
      "4 GB RAM",
      "500 MB espacio libre", 
      ".NET Framework 4.7.2+"
    ],
    recommended: [
      "Windows 11",
      "8 GB RAM o más",
      "SSD para mejor rendimiento",
      "Microsoft Excel instalado"
    ]
  },
  
  // Documentation links
  documentation: {
    userManual: {
      title: "Manual de Usuario",
      filename: "Manual de Usuario - Autocoop.pdf",
      path: "https://github.com/axensz/autocoop-website/raw/2fec50ca07bc23ba8dec161d0067b1b45e14682c/public/docs/Manual%20de%20Usuario%20-%20Autocoop.pdf"
    },
    technicalManual: {
      title: "Manual Técnico", 
      filename: "Manual de Usuario - Autocoop.pdf",
      path: "https://github.com/axensz/autocoop-website/raw/2fec50ca07bc23ba8dec161d0067b1b45e14682c/public/docs/Manual%20T%C3%A9cnico%20-%20AutoCoop.pdf"
    }
  }
};
