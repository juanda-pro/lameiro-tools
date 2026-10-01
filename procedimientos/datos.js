/* Añade cada procedimiento como un objeto de esta lista. Para incorporar un vídeo,
   sube a YouTube en modo «oculto» y sustituye null por la URL completa. */
window.PROCEDIMIENTOS = [
  {
    id: "horno-conveccion",
    area: "calientes",
    nombre: "Horno de convección",
    frecuencia: "Tras uso",
    pasos: [
      "Apaga el horno y espera a que se enfríe.",
      "Retira las bandejas, las guías y los restos de comida.",
      "Lava las piezas desmontables en la pica con detergente, acláralas, desinféctalas y acláralas de nuevo.",
      "Retira los restos del interior, aplica detergente, aclara, desinfecta y aclara de nuevo.",
      "Limpia el exterior y los mandos sin dejar que entre agua en la parte eléctrica.",
      "Seca con papel de cocina y monta de nuevo las piezas cuando estén secas."
    ],
    seguridad: "Apaga el horno y espera a que se enfríe antes de limpiarlo.",
    video: null
  },
  {
    id: "loncheadora",
    area: "calientes",
    nombre: "Loncheadora",
    frecuencia: "Tras uso",
    pasos: [
      "Desenchufa la loncheadora, pon el grosor a cero y ponte guantes anticorte.",
      "Retira los restos de alimento con papel de cocina.",
      "Desmonta solo las piezas indicadas por el fabricante.",
      "Lava las piezas desmontables en la pica: aplica detergente, aclara, desinfecta y aclara de nuevo.",
      "Limpia la cuchilla del centro hacia fuera, sin pasar la mano por el filo.",
      "Limpia el resto de la máquina, seca con papel de cocina y vuelve a montar las piezas secas."
    ],
    seguridad: "Desenchufa la máquina, pon el grosor a cero y usa guantes anticorte. Limpia la cuchilla del centro hacia fuera.",
    video: null
  },
  {
    id: "envasadora-vacio",
    area: "calientes",
    nombre: "Envasadora al vacío",
    frecuencia: "Tras uso",
    pasos: [
      "Desenchufa la envasadora.",
      "Retira los restos de la cámara y de la barra de sellado con papel de cocina.",
      "Aplica detergente con una bayeta bien escurrida, aclara, desinfecta y aclara de nuevo.",
      "Limpia la tapa, la junta y el exterior sin empapar la máquina.",
      "Seca todas las superficies con papel de cocina.",
      "Comprueba que la cámara y la barra de sellado quedan limpias antes de cerrar la tapa."
    ],
    seguridad: "Desenchufa la máquina. No dejes que entre agua en la bomba ni en la parte eléctrica.",
    video: null
  },
  {
    id: "campana-extractora",
    area: "calientes",
    nombre: "Campana extractora",
    frecuencia: "Semanal",
    pasos: [
      "Apaga la campana y espera a que las superficies estén frías.",
      "Desmonta los filtros y déjalos en remojo con agua caliente y desengrasante. También puedes meterlos en el lavavajillas si el fabricante lo permite.",
      "Frota los filtros y acláralos bien.",
      "Retira la grasa del interior y del exterior de la campana con desengrasante; después aclara.",
      "Seca la campana y deja que los filtros se sequen por completo.",
      "Monta de nuevo los filtros secos y comprueba que quedan bien sujetos."
    ],
    seguridad: "Apaga la campana. Si necesitas subirte, usa una escalera estable; nunca te subas a la encimera.",
    video: null
  },
  {
    id: "horno-vapor",
    area: "frios",
    nombre: "Horno de vapor",
    frecuencia: "Tras uso",
    pasos: [
      "Apaga el horno y espera a que se enfríe.",
      "Retira las bandejas, las guías y los restos de comida.",
      "Lava las piezas desmontables en la pica con detergente, acláralas, desinféctalas y acláralas de nuevo.",
      "Limpia el interior siguiendo las instrucciones del fabricante.",
      "Limpia la puerta, la junta, el exterior y los mandos sin empapar la parte eléctrica.",
      "Seca con papel de cocina y deja la puerta entreabierta para que el interior se seque."
    ],
    seguridad: "Apaga el horno y espera a que se enfríe antes de limpiarlo.",
    video: null
  },
  {
    id: "lavavajillas",
    area: "frios",
    nombre: "Lavavajillas",
    frecuencia: "Cada 2 días",
    pasos: [
      "Apaga el lavavajillas, vacíalo y espera a que el agua no queme.",
      "Saca los filtros y los brazos de lavado siguiendo las instrucciones del fabricante.",
      "Retira los restos y lava los filtros y los brazos con detergente; acláralos bien.",
      "Limpia el interior, las juntas y la puerta; aclara para que no queden restos de producto.",
      "Monta de nuevo las piezas y comprueba que los orificios de los brazos están libres.",
      "Revisa los niveles de detergente y abrillantador.",
      "Deja la puerta abierta para que el interior se seque."
    ],
    seguridad: "Apaga y vacía el lavavajillas antes de desmontar o limpiar cualquier pieza.",
    video: null
  },
  {
    id: "insectocutor",
    area: "frios",
    nombre: "Insectocutor",
    frecuencia: "Quincenal",
    pasos: [
      "Desenchufa el insectocutor.",
      "Retira y vacía la bandeja de recogida.",
      "Limpia la bandeja con detergente, aclárala, desinféctala y aclárala de nuevo.",
      "Limpia la rejilla y el interior con un cepillo seco.",
      "Revisa la placa adhesiva, si la tiene, y cámbiala siguiendo las instrucciones del fabricante cuando sea necesario.",
      "Monta la bandeja seca y vuelve a enchufar el equipo."
    ],
    seguridad: "Desenchufa el equipo. No uses agua en la rejilla ni en el interior mientras esté conectado.",
    video: null
  }
];
