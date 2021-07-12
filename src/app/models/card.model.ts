export class card
{
    public name:string = "";
    public status:string = "";
    public species:string = "";
    public gender:string = "";
    public image:string = "";

    constructor(name:string,status:string,species:string,gender:string,image:string){
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.image = image;
    }
}