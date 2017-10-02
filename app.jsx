let CONTENIDO = [
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
],


class Question extends React.Component {
  constructor(props) {
     super(props);
     this.state = {

    };
  }

  render () {
    return(
      <div>
        <div id="airLine">
        <div class="container">
            <div id="iconorosa" class="row">
            <span class='${app.item[app.iniciaPreguntas].icono}' aria-hidden="true"></span>
                <div id="imags" class="col-md-12 ">
               <img align="center" src='${app.item[app.iniciaPreguntas].imgsrc}' class="fade-out image1"/>
                </div>
            </div>
        </div>
        <div id="plantilla">
        <div class="answer">${app.item[app.iniciaPreguntas].titulo}</div>\
        <div class="row texto">
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${app.incremento}%; height: 5px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>
            <div class="col-md-12">
                <h2>${app.item[app.iniciaPreguntas].pregunta}</h2>\
            </div>
            <div class="col-lg-4">
              <button class="btn btn-huge "><span class="letter">A</span>${app.item[app.iniciaPreguntas].alternativas[0]}</button>\
            </div>
            <div class="col-lg-4">
              <button class="btn btn-huge "><span class="letter">B</span>${app.item[app.iniciaPreguntas].alternativas[1]}</button>\
            </div>
            <div class="col-lg-4">
              <button class="btn btn-huge "><span class="letter">C</span>${app.item[app.iniciaPreguntas].alternativas[2]}</button>\
            </div>
        </div>
        <div class="row texto">
            <div class="col-md-12">
              <i class="fa fa-twitter-square fbook" style="font-size:48px;color:#00bbff"></i>\
              <i class="fa fa-google-plus-circle" style="font-size:48px;color:red"></i>\
              <i class="fa fa-facebook-square fbook" style="font-size:48px;color:blue;border-radius:50%"></i>\
            </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

  ReactDOM.render(<Question/>, document.getElementById("airLine"));
