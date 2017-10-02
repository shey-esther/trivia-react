const CONTENIDO = [
  {
  titulo : '0 of 5 answered',
  icono : 'icon icon-list glyphicon glyphicon-info-sign',
  imgsrc : 'assets/img/plane.svg',
  pregunta : "¿What is the oldest airline in the word?",
  alternativas : ['Avianca','KLM','Qantas'],//array de alternativas
  rptCorrecta : 'KLM',
  rptElegida : undefined
},
{
  titulo : '0 of 5 answered',
  icono : 'icon icon-list glyphicon glyphicon-info-sign',
  imgsrc : 'assets/img/barco.svg',
  pregunta : "What is the largest port in the word?",
  alternativas : ['Port of shangai','Port of singa pore','port of rotterdan'],//array de alternativas
  rptCorrecta : 'Port of shangai',
  rptElegida : undefined
},
{
  titulo : '0 of 5 answered',
  icono : 'icon icon-list glyphicon glyphicon-info-sign',
  imgsrc : 'assets/img/bicicle.svg',
  pregunta : "What is the longest distance cycling back wards?",
  alternativas : ['89.30 km','675.10 km','357.60 km'],//array de alternativas
  rptCorrecta : '357.60 km',
  rptElegida : undefined
},
{
  titulo : '0 of 5 answered',
  icono : 'icon icon-list glyphicon glyphicon-info-sign',
  imgsrc : 'assets/img/carro.svg',
  pregunta : "What is the longest distance cycling back wards?",
  alternativas : ['89.30 km','675.10 km','357.60 km'],//array de alternativas
  rptCorrecta : '357.60 km',
  rptElegida : undefined
},
{
  titulo : '0 of 5 answered',
  icono : 'icon icon-list glyphicon glyphicon-info-sign',
  imgsrc : 'assets/img/auto.svg',
  pregunta : "What is the longest distance cycling back wards?",
  alternativas : ['89.30 km','675.10 km','357.60 km'],//array de alternativas
  rptCorrecta : '357.60 km',
  rptElegida : undefined
},
];


class Question extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
      incremento : 0,
      iniciaPreguntas : 0,
      rptCorrecta : [],
      contador : 0,
      ArrContenido : props.ArrContenido//contiene el array
    };
  }
  preguntas(){
    // console.log(this.state.ArrContenido);
    // return this.state.ArrContenido.map((value,index) => {
      return (
        <div>
          <div className="col-md-12">
                <h2 >{this.state.ArrContenido[this.state.iniciaPreguntas].pregunta}</h2>
            </div>
        </div>
      )
  
  }

  render () {
    return (
      <div>
        <div id="airLine">
        <div className="container">
            <div id="iconorosa" className="row">
            <span className='icon icon-list glyphicon glyphicon-info-sign' aria-hidden="true"></span>
                <div id="imags" className="col-md-12 ">
               <img align="center" src='assets/img/barco.svg' className="fade-out image1"/>
                </div>
            </div>
        </div>
        <div id="plantilla">
        <div className="answer">0 of 5 answered</div>
        <div className="row texto">
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>
            {this.preguntas()}
            {/* <div className="col-lg-4">
              <button className="btn btn-huge "><span className="letter">A</span>{this.state.pregunta[0].alternativas}</button>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-huge "><span className="letter">B</span>{this.state.pregunta[1].alternativas}</button>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-huge "><span className="letter">C</span>{this.state.pregunta[2].alternativas}</button>
            </div> */}
        </div>
        {/* <div className="row texto">
            <div className="col-md-12">
              <i className="fa fa-twitter-square fbook" ></i>
              <i className="fa fa-google-plus-circle" style="font-size:48px;color:red"></i>
              <i className="fa fa-facebook-square fbook" style="font-size:48px;color:blue;border-radius:50%"></i>
            </div>
        </div> */}
      </div>
      </div>
      </div>
    );
  }
}
// }

  ReactDOM.render(
    <Question ArrContenido={CONTENIDO}/>,
     document.getElementById("quiz")
  );
