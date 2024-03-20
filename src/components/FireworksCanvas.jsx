
import '../styles/FireworksCanvas.css';
import { useEffect, useState } from 'react';

function FireworksCanvas() {
    const [ctx, setCtx] = useState()
    //const [fireworks, setFireworks] = useState([])
    //const [particles, setParticles] = useState([])
    const typecount = 3;
    let fireworks = [];								
    let particles = [];															
    let sparks = [];
    let frameRate = 60;							
    let frameDelay = 1000.0/frameRate;
    
    const clientWidth = innerWidth;					
    const clientHeight = innerHeight;

    let timer = 0;


    useEffect(() => {
        const canvas = document.getElementById('canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setCtx(canvas.getContext('2d'));
        }

        function handleKeydown(event) {
            if (event.code === "Space") {
                createFirework("skyblue");
            } 
        }

        window.addEventListener("keydown", handleKeydown);
        window.oncontextmenu = () => false; // Block right-click menu

        const main = setInterval(() => {
            if (ctx) {
                update(frameDelay);
            }
        }, frameDelay);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeydown);
            clearInterval(main);
        };
    }, [ctx]);

    // My function to create random number
    function random(min, max, round) {
        if (round == 'round') {
            return Math.round(Math.random() * (max - min) + min);
        } else {
            return Math.random() * (max - min) + min;
        }
    }


    // Function to make firework
    const createFirework = function(color) {
        let firework = new Firework(color);
        fireworks.push(firework);
    }

    // Function to start Firework
    const Firework = function(color) {
        
        this.x = random(90, clientWidth-90);
        this.y = random(90, clientHeight-90);
        this.sx = 0;
        this.sy = 0;
        this.tx = 0;
        this.ty = 0;
        this.vx = 0;
        this.vy = 0;
        this.color = color;
        //this.dis = distance(this.sx, this.sy, this.tx, this.ty);
        this.dis = 2000; //idk what this does
        //this.speed = random(700, 1100);
        this.speed = 800;
        this.gravity = 0; //1.5
        this.ms = 0;
        this.s = 0;
        this.del = false;

        this.update = function(ms) {
            this.ms = ms / 1000;


            // this calculates the delay from a firework 
            // if (this.s > 2000/ms) {
                createParticles(typecount, 100, this.x, this.y, this.color);
                //createParticles(typecount, 100, 90, 90, this.color);
                this.del = true;
            // } else {
            // 	this.speed *= 0.98;
            // 	this.x -= this.vx * this.speed * this.ms;
            // 	this.y -= this.vy * this.speed * this.ms - this.gravity;
            // }

            this.s++;
        }

        this.draw = function() {
            if (ctx) {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, 1, 0, 2*Math.PI);
                //ctx.arc(90, 90, 1, 0, 2*Math.PI)
                ctx.fill();
            }
            
        }
    }

    // Function to create array particles
    const createParticles = (type, count, pox, poy, color) => {
        for (var i = 0; i < count; i++) {
            let par = new Particles();
            par.type = type;

            par.color = color;
            par.x = pox;
            par.y = poy;

            var angle = random(0, 360);
            par.vx = Math.cos(angle * Math.PI/180.0);
            par.vy = Math.sin(angle * Math.PI/180.0);

            particles.push(par);
        }
    }

    // Function to make particles
    const Particles = function() {

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.speed = random(200, 500);
        this.gravity = 1;
        this.wind = 0;
        this.type = 1;
        this.opacity = 1;
        this.s = 0;
        this.scale = 1;
        this.color = '#FFF';
        this.del = false;

        this.update = function(ms) {
            this.ms = ms / 1000;

            if (this.s > 900/ms) { if (this.opacity - 0.05 < 0) { this.opacity = 0; } else { this.opacity -= 0.05; } }
                this.speed *= 0.95;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms;
            this.s++;
        }

        this.draw = function() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;

            
            if (this.type == 3 && ctx) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.vx * 10, this.y - this.vy * 10);
                ctx.stroke();
            } else {
                ctx.arc(this.x, this.y, 1, 0, 2*Math.PI);
                ctx.fill();
            }

            ctx.closePath();
            ctx.restore();
        }
    }

    const text = function() {
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = '#fff';
            ctx.font = "14px arial";
            ctx.fillText("fire with spacebar.", 2, clientHeight-2);
        }
        
    }

    const update = (frame) => {

        // text to control firework
        text();
        if (ctx) {
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fillRect(0, 0, clientWidth, clientHeight);
        }
        

        let i = fireworks.length;
        while(i--) {
            // Progress starting Fireworks
            if (fireworks[i].del == true) { fireworks.splice(i, 1); } else {
                fireworks[i].update(frame);
                fireworks[i].draw();
            }
        }

        i = particles.length;
        while(i--) {
            // Progress particles
            if (particles[i].opacity == 0) { particles.splice(i, 1); } else {
                particles[i].update(frame);
                particles[i].draw();
            }
        }

        i = sparks.length;
        while(i--) {
            // Progress sparks
            if (sparks[i].limit < 0) { sparks.splice(i, 1); } else {
                sparks[i].update(frame);
                sparks[i].draw();
            }
        }

        timer++;
    }

    var main = setInterval(function() { update(frameDelay); }, frameDelay);
    
    return (
        <div id="canvas-container">
            <canvas style={{marginBottom: "45px"}} id="canvas"></canvas>
        </div>
    )
}

export default FireworksCanvas;