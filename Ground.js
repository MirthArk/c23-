class Ground{
    // Write all the properties and functions to be performed by the object of this class
    
    constructor(x,y,width,height){
        // All the properties of the object to be defined here

        var options = {
            isStatic :true
          }
        
          // Creating bodies using Bodies module
          this.body = Bodies.rectangle(x,y,width,height,options);
        
          // Adding the body to the world we created in our application
          World.add(world,this.body);
          //width and height are local variables available only in the constructor
          //We will assign them as propeties of the objects of this class.. so that we can use in display function
          this.width= width;
          this.height = height;

    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }






}