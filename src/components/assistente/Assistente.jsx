import useWatsonAssistantScript from "../../hooks/useWatsonAssistantScript";
import { StyledChatElement } from "../../styles.js";

export default function Assistente(props) {
  
  useWatsonAssistantScript(StyledChatElement);

  return(
    <StyledChatElement />
  );
}