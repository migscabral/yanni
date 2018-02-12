import * as d3 from "d3";
import * as math from "mathjs";

export class Cell {
    static readonly MIN = 1;
    static readonly MAX = 4;
    static readonly WIDTH = 50;
    static readonly HEIGHT = 50;

    private _x: number;
    private _y: number;

    private _value: number;
    private _color: [number, number, number];

    constructor(x: number, y: number, value: number) {
        this._x = x;
        this._y = y;
        this._value = value;
        this._color = this.generateColor(value, Cell.MIN, Cell.MAX);
        // console.log(this._value);
        console.log(this._color);
    }

    get value(): number {
        return this._value;
    }

    get rgb(): [number, number, number] {
        return this._color;
    }

    get hex(): string {
        return this.rgbToHex(this._color[0], this._color[1], this._color[2]);
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    set value(value: number) {
        this._value = value;
        this._color = this.generateColor(value, Cell.MIN, Cell.MAX);
    }

    private generateColor(value: number, min: number, max: number): [number, number, number] {
        //normalize
        let norm = math.abs((value - min) / (max - min));
        let loColor = [238, 238, 238];
        let hiColor = [0, 255, 0];

        console.log(norm);

        return [(hiColor[0] - loColor[0]) * value + loColor[0],
                        (hiColor[1] - loColor[1]) * value + loColor[1], 
                        (hiColor[2] - loColor[2]) * value + loColor[2]];
    }

    private componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    private rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
    
}

export class Grid {

    private _xDim: number;
    private _yDim: number; 
    private _cells: Array<Array<Cell>>;

    constructor(xDim: number, yDim: number) {
        this._xDim = xDim;
        this._yDim = yDim;
        this._cells = new Array<Array<Cell>>();

        for(let i = 0; i < yDim; i++) {
            this._cells.push(new Array<Cell>());
            
            for(let j = 0; j < xDim; j++) {
                this._cells[i].push(new Cell((j * Cell.WIDTH) + (5 * j), (i * Cell.HEIGHT) + (5 * i), math.randomInt(1, 4)));
            }
        }
    }

    public render() {
        let svg = d3.select("svg.input")
                    .attr("width", (Cell.WIDTH + 5) * this._xDim)
                    .attr("height", (Cell.HEIGHT + 5) * this._yDim);
        
        let row = svg.selectAll(".row")
                    .data(this._cells)
                    .enter().append("g")
                    .attr("class", "row");

        let col = row.selectAll(".square")
                    .data(function(d) { return d })
                    .enter().append("rect")
                    .attr("class", "square")
                    .attr("x", function(d) { return d.x })
                    .attr("y", function(d) { return d.y })
                    .attr("width", Cell.WIDTH)
                    .attr("height", Cell.HEIGHT)
                    .style("fill", function(d) { return d.hex })
                    // .style("fill", "#000")
                    .style("stroke", "#fff");
    }
}

let g = new Grid(10, 10);
g.render();