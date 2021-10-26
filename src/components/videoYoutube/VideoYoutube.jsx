// import * as styles from '../../styles.js';

export default function VideoYoutube(props) {

  return(
    <div>
      <iframe title={props.videoId} src={`https://www.youtube.com/embed/${props.videoId}`} />
    </div>
  )

}