class Persona3{
    protected nombre:string
    protected edad:number
    constructor( nombre:string,  edad:number){this.nombre=nombre, this.edad=edad}

    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`);
    }
}
 class Empleado extends Persona3{
    private sueldo:number
    constructor(nom:string, edad:number, sueldo:number){
        super(nom,edad)
        this.sueldo=sueldo
    }

    imprimir(){
        super.imprimir()
        console.log(`Sueldo: ${this.sueldo}`);
    }
 }
let persona3:Empleado
persona3 = new Empleado("Juan", 28, 200)
persona3.imprimir()