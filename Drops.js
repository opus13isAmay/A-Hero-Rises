class Drops {
    constructor(x,y) {
        var options = {
            friction : 0.1,
            restitution : 0.1
        }
        this.rain = Bodies.circle(x,y,5,options)
    }
}