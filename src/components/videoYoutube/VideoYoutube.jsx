// import * as styles from '../../styles.js';

export default function VideoYoutube(props) {

  return(
    <div>
      <iframe width="560" height="315" title={props.videoId} src={`https://www.youtube.com/embed/${props.videoId}`} />
    </div>
  )

}