import {fabric} from 'fabric';

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: "http://localhost:5001/static/images/TestSet/",
      extension: ".jpg",
      index: Math.ceil(Math.random()*299)
    };
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
    var context = this.canvas.getContext('2d');
    this.paint(context);
  }

  componentDidUpdate(){
    var context = this.canvas.getContext('2d');
    this.paint(context);
  }

  paint(context){
    this.canvas = new fabric.Canvas(this.canvas);
    this.canvas.setWidth(this.props.glContainer.width);
    this.canvas.setHeight(this.props.glContainer.height);

    const background = this.state.url + this.getImageName() + this.state.extension;

    $.get( "http://localhost:5001/boundingBoxes", { name: this.getImageName() } )
    .done( (data) => {
      data = JSON.parse(data);

      fabric.Image.fromURL(background, (img) => {
        var oImg = img.set({ left: 0, top: 0, width: this.canvas.width, height: this.canvas.height });
        this.canvas.add(oImg);

        _.each(data, (obj) => {
          let square = new fabric.Rect({
              width: obj.w,
              height: obj.h,
              left: obj.x,
              top: obj.y,
              stroke: 'green',
              strokeWidth: 3,
              fill: null
          });

          this.canvas.add(square);
          this.canvas.renderAll();
        });
      });

    });

  }

  render(){
    return <canvas id='canvas' ref={(canvas) => { this.canvas = canvas; }}></canvas>
  }
}

export default Gallery;
