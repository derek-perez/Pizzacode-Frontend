
export interface Producto {
    _id: string;
    imagen: string;
    nombre: string;
    descripcion: string;
    precio?: string;
    categoria?: string;
    cuentaAtras?: string;
}

export interface Direccion {
    _id: string;
    calle: string;
    numero: string;
    colonia: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    usuario: string;
}

export interface Productos {
    index: number;
    producto: Producto;
    cantidad: number;
    precioTotal: number;
}

export interface Pago {
    _id: string;
    fecha: string;
    productos: [];
    total: number;
    usuario: string;
    invitado: boolean;
    efectivo: string;
    tarjeta: string;
}

export interface Card {
    _id: string;
    numero: string;
    cvv: string;
    fechaExpiracion: string;
    nombre: string;
    usuario: string;
}

export interface Cards {
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