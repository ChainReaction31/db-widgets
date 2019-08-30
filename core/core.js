class WindowPanel{
    constructor(parentEl, pos, size){
        this.parent = parentEl;
        this.element = document.createElement("div");
        this.element.className = "db-window";
        this.element.style.border = "2px solid black";

        // create a title bar
        this.titleBar = new TitleBar(this.element,'Test Title');
        this.element.appendChild(this.titleBar.getElement());

        // Add Content Pane(s)
        this.content = new Pane(this.element);
        this.element.appendChild(this.content.getElement());

        this.parent.appendChild(this.element);
    }
}

class TitleBar{
    constructor(parentEl, text, type = "plain"){
        this.parentEl = parentEl;
        this.type = type;
        this.text = text;
        this.element = document.createElement("div");
        this.element.className = "db-title";
        this.element.textContent = text;
        // this.element.style.border = "2px solid grey";
    }

    getElement(){
        return this.element;
    }
}

class Pane{
    constructor(parentEl, type = "plain"){
        this.parentEl = parentEl;
        this.type = type;
        this.element = document.createElement("div");
        this.element.style.border = "2px solid blue";
        this.element.style.height = "500px";
        // this.element.style.width =  "100%";
    }

    getElement(){
        return this.element;
    }
}

// TODO: Include the new drag and drop handling system for moving "windows"
function dragElem(elem) {
    let targetX, targetY, initX, initY = 0;
    elem.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        initX = e.clientX;
        initY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        targetX = initX - e.clientX;
        targetY = initY - e.clientY;
        initX = e.clientX;
        initY = e.clientY;
        elem.style.top = (elem.offsetTop - targetY) + 'px';
        elem.style.left = (elem.offsetLeft - targetX) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

