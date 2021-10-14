export class Todo{
    titulo: string;
    desc: string;
    terminada: boolean;

    constructor( titulo:string='', descrpcion:string = '' ){
        this.titulo = titulo;
        this.desc = descrpcion;
        this.terminada = false;
    }
}