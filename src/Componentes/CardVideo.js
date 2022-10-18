import { CardVideoContainer } from "./CardVideoContainer";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardVideoContainer onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </CardVideoContainer>
  );
}

export default CardVideo;
