class Ground
{
    constructor(x,y,h,w)
    {
        var options={
            isStatic:true
        };

        
        this.w = w;
        this.h = h;
        // está faltando o this.x e o this.y

        this.body=Bodies.rectangle(x, y, w, h, options);
        World.add(world,this.body)
    }

    show() {
        var pos = this.body.position;
        push();
        // aqui tem um translate para te ermitir mudar a posição x e y
        // translate(pos.x,pos.y)
        rectMode(CENTER);
        stroke(255);
        fill(127);
        //como vc usou o translate aqui no ect o x e o y tem quue ser 0
        rect(pos.x,pos.y.this.w,this.h);
        pop();
    }

}