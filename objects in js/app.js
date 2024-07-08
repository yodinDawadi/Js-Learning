class machine{
    performWork(){
        console.log("do something");
    }

    increaseEfficiency(){
        console.log("Increase efficiency");
    }
    setOli(oil){
    this.oil=oil;
    }
}

let engine = new machine;

engine.setOli("10ltr");