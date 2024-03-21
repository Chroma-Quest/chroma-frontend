import '../styles/FireworksCanvas.css'; // Import CSS file
import '../styles/FireworksCanvas.css';
import { useEffect, useState } from 'react';

function FireworksCanvas(props) {
    const [ctx, setCtx] = useState()
    const typecount = 3;
    let fireworks = [];								
    let particles = [];															
    let frameRate = 20;							
    let frameDelay = 1500.0/frameRate;
    
    const clientWidth = innerWidth;					
    const clientHeight = innerHeight;

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setCtx(canvas.getContext('2d'));
        }

        if (props.colorsQueue.length > 0) {
            createFirework(props.colorsQueue[0]);
            props.setColorsQueue(props.colorsQueue.splice(1))
        }

        window.oncontextmenu = () => false; // Block right-click menu

        setInterval(() => {
            if (ctx) {
                update(frameDelay);
            }
        }, frameDelay);
        
    }, [ctx, props.colorsQueue]);

    // My function to create random number
    function random(min, max, round) {
        if (round == 'round') {
            return Math.round(Math.random() * (max - min) + min);
        } else {
            return Math.random() * (max - min) + min;
        }
    }


    // Function to make firework
    const createFirework = async function(color) {
        let firework = new Firework(color);
        fireworks.push(firework);
    }

    // Function to start Firework
    class Firework {
        constructor(color) {
            this.x = random(90, clientWidth - 90);
            this.y = random(90, clientHeight - 90);
            this.color = color;
            this.del = false;
        }
    
        update(ms) {
            this.ms = ms / 1000;
            createParticles(typecount, 300, this.x, this.y, this.color);
            this.del = true;
        }
    
        draw(ctx) {
            if (ctx) {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
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
        this.s = 10;
        this.scale = 1;
        this.color = '#FFF';
        this.del = false;

        this.update = function(ms) {
            this.ms = ms / 1000;

            if (this.s > 1200/ms) { 
                if (this.opacity - 0.05 < 0) { 
                    this.opacity = 0; 
                } else { 
                    this.opacity -= 0.05; 
                } 
            }
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

            
            if (ctx) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.vx * 10, this.y - this.vy * 10);
                ctx.stroke();
            } 
            ctx.closePath();
            ctx.restore();
        }
    }

    const update = (frame) => {
        if (ctx) {
            // Check if there are no particles or fireworks active
            if (particles.length === 0 && fireworks.length === 0) {
                // Clear the canvas completely to ensure a clean background
                //ctx.clearRect(0, 0, clientWidth, clientHeight);
            } else {
                // When there are active particles or fireworks, use semi-transparent clearing
                // This allows for the trails and fading effects without prematurely clearing them
                ctx.fillStyle = 'rgba(21, 22, 21, 0.15)';
                ctx.fillRect(0, 0, clientWidth, clientHeight);
            }
        }
    
        // Drawing logic for fireworks and particles
        let i = fireworks.length;
        while(i--) {
            if (fireworks[i].del == true) {
                fireworks.splice(i, 1);
            } else {
                fireworks[i].update(frame);
                fireworks[i].draw();
            }
        }
    
        i = particles.length;
        while(i--) {
            if (particles[i].opacity == 0) {
                particles.splice(i, 1);
                if (particles.length === 0 && fireworks.length === 0) {
                    // fixes ghosting
                    ctx.fillStyle = 'rgba(21, 22, 21, 1)';
                    ctx.fillRect(0, 0, clientWidth, clientHeight);
                }
            } else {
                particles[i].update(frame);
                particles[i].draw();
            }
        }
    }
    
    return (
        <div id="canvas-container">
            <canvas style={{marginBottom: "45px", backgroundColor: 'rgb(21, 22, 21)'}} id="canvas"></canvas>
        </div>
    )
}

export default FireworksCanvas;
