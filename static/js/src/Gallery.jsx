class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: "http://localhost:5000/static/images/TestSet/",
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
    this.canvas.width = this.props.glContainer.width;
    this.canvas.height = this.props.glContainer.height;
    
    let img = new Image();
    const background = this.state.url + this.getImageName() + this.state.extension;

    const self = this;
    img.onload = function(){
      context.drawImage(img,0,0,self.canvas.width,self.canvas.height);
    };
    img.src = background;
  }

  render(){
    return <canvas ref={(canvas) => { this.canvas = canvas; }}></canvas>
  }
}

export default Gallery;
