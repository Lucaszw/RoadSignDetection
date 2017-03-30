import {fabric} from 'fabric';

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: "http://localhost:5001/static/images/TestSet/",
      extension: ".jpg",
      index: Math.ceil(Math.random()*299)
    };
    this.itemsToRemove = [];
  }

  decreaseIndex(e) {
    if (this.state.index <= 0) return;
    this.setState({index: this.state.index-1});
  }

  increaseIndex(e) {
    if (this.state.index >= 299) return;
    this.setState({index: this.state.index+1});
  }

  getImageName(){
    const s = "00000" + this.state.index;
    const n = s.length;
    return s.slice(n-5,n);
  }

  componentDidMount(){
    this.props.glEventHub.on( 'prev-clicked', this.decreaseIndex.bind(this) );
    this.props.glEventHub.on( 'next-clicked', this.increaseIndex.bind(this) );

    this.canvas = new fabric.Canvas(this.canvasElem);
    this.canvas.setWidth(this.props.glContainer.width);
    this.canvas.setHeight(this.props.glContainer.height);

    this.canvas.on('mouse:over', (e) => {
      if (!e.target) return;
      if (!e.target.data) return;

      const width = 150;
      const height = 40;

      let square = new fabric.Rect({
          width: width,
          height: height,
          left: e.target.left+e.target.width/2 - width/2,
          top: e.target.top+e.target.height+ 10,
          stroke: 'black',
          fill: 'white',
          selectable: false
      });


      let text = new fabric.Text(e.target.data.label, {
          left: e.target.left+e.target.width/2 - width/2+20,
          top: e.target.top+e.target.height+20,
          fill: 'black',
          fontSize: 20
      });

      this.canvas.renderAll();

      this.canvas.add(square);
      this.canvas.add(text);

      this.itemsToRemove.push(square);
      this.itemsToRemove.push(text);
      // console.log(e.target);
    });

    this.canvas.on('mouse:out', (e) => {
      if (!e.target) return;
      if (!e.target.data) return;

      while (this.itemsToRemove.length > 0){
        const item = this.itemsToRemove.pop();
        this.canvas.remove(item);
      }
      // this.canvas.remove(this.group);
      this.canvas.renderAll();
    });

    this.paint();
  }

  componentDidUpdate(){
    this.paint();
  }

  paint(){
    this.canvas.clear();
    const background = this.state.url + this.getImageName() + this.state.extension;

    $.get( "http://localhost:5001/boundingBoxes", { name: this.getImageName() } )
    .done( (data) => {
      data = JSON.parse(data);

      fabric.Image.fromURL(background, (img) => {
        var oImg = img.set({ left: 0, top: 0, width: this.canvas.width, height: this.canvas.height, selectable: false });
        this.canvas.add(oImg);

        _.each(data, (obj) => {
          let square = new fabric.Rect({
              width: obj.w,
              height: obj.h,
              left: obj.x,
              top: obj.y,
              stroke: 'green',
              strokeWidth: 3,
              fill: null,
              selectable: false,
              data: obj
          });

          this.canvas.add(square);
          this.canvas.renderAll();
        });
      });

    });

  }

  render(){
    return <canvas id='canvas' ref={(canvas) => { this.canvasElem = canvas; }}></canvas>
  }
}

export default Gallery;
