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
      "Sistema completo de gestión de conciliaciones para procesamiento de nóminas y pagos",
      "Interfaz de usuario moderna construida con React y TypeScript",
      "Gestión de múltiples empresas con diferentes frecuencias de nómina (mensual/quincenal)",
      "Importación automática de archivos Excel con validación de datos en tiempo real",
      "Sistema de filtros avanzado por mes, año y estado de envío",
      "Generación de reportes con exportación a Excel y resúmenes detallados",
      "Lista de verificación (CheckList) para seguimiento del estado de conciliaciones",
      "Panel de configuración flexible para rutas de exportación y gestión de prioridades",
      "Validación automática para cambios de frecuencia de nómina",
      "Gestión del estado activo/inactivo de empresas"
    ],
    improvements: [
      "Sistema de fuentes unificado con Inter para consistencia visual",
      "Arquitectura modular con componentes React reutilizables",
      "Gestión de estado optimizada con React Hooks y contextos",
      "Validaciones en tiempo real con retroalimentación inmediata",
      "Sistema de notificaciones toast no intrusivas",
      "Navegación por pestañas con sidebar organizado",
      "Aplicación Electron multiplataforma con acceso completo al sistema",
      "Backend robusto con manejo de errores y validaciones exhaustivas",
      "Almacenamiento local con respaldos automáticos",
      "Sistema de logging detallado para debugging y auditoría"
    ],
    bugFixes: [
      "Mejorada la estabilidad del procesamiento de archivos Excel",
      "Optimizado el rendimiento en la importación de archivos grandes",
      "Corregida la validación de integridad de datos durante importación",
      "Solucionados problemas de persistencia de filtros entre sesiones",
      "Mejorada la detección automática de períodos en archivos de nómina"
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
  }
};
