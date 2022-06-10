
export interface Producto {
    _id: string;
    imagen: string;
    nombre: string;
    descripcion: string;
    precio?: string;
    categoria?: string;
    cuentaAtras?: string;
}

export interface Productos {
    index: number;
    producto: Producto;
    cantidad: number;
    precioTotal: number;
}

export interface CantidadContext {
    id: string;
    cantidad: number;
}


interface MenuDataProps {
    id: number;
    nombre: string;
    titulo: string;
    productos: Producto[];
}

interface HomeDataProps {
    id: number;
    nombre: string;
    titulo: string;
    productos: Producto[];
}