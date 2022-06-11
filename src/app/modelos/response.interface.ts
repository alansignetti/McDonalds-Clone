export interface ResponseI {
  id: string;
  nombre: string;
  imagen: string;
  precio: number;
  tipo: string;
  descripcion: string;
  ingredientes: [
    {
      nombre: string;
      cantidad: number;
      precio: number;
      aderezo?: boolean;
    }
  ];
  seccion: string;
}
