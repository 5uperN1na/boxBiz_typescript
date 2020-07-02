
const boxArray: Box[] = [];

class Box {

    static counter: number = 1;
    static collection: Box[] = [];
    static changeItUp() {
        Box.collection.forEach(pizza => {
            pizza.changeBGColor();
        });
        

    }
    value: number;
    div: JQuery<HTMLDivElement>;

    constructor() {
        this.value = Box.counter;
        this.div = $(`<div class= "box shadow"> ${this.value}</div>`);
        this.render();
        this.addEvents();
        Box.collection.push(this);

    }

    render() {

        $('#box-container').append(this.div);
        Box.counter++;
    }

    addEvents() {
        this.div.click(() => this.changeBGColor());
    }

    changeBGColor() {
        let r: number = Math.floor(Math.random() * 256);
        let g: number = Math.floor(Math.random() * 256);
        let b: number = Math.floor(Math.random() * 256);
        this.div.css({
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        });
    }


}

$('#make-box').click(() => new Box());
$('#change-color').click(() => Box.changeItUp());
$('#add').click(() => {
    let sum: number = 0;
    Box.collection.forEach(pasta => {
        sum +=pasta.value;
    })
    console.log(sum);
});

