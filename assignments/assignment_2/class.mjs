

class rectangle{
    constructor(weight,height){
        this.weight = weight;
        this.height = height;

    }
    calculateAera(){
        document.write(`Aera: ${this.weight * this.height}<br>`)
    }
    calculatePerameter(){
        return 2 * (this.weight + this.height)
    }

}
let myRectangle = new rectangle (2,4)
// document.write(`Aera: ${myRectangle.calculateAera()}<br>`)

myRectangle.calculateAera();
document.write(`Perameter: ${myRectangle.calculatePerameter()}`)

