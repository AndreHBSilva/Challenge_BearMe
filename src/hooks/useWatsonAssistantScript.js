import { useEffect } from 'react';

export default function useWatsonAssistantScript(chatElement) {
  useEffect(() => {
    const script = document.createElement('script');

    const element = document.querySelector(chatElement);
    script.async = true;

    window.watsonAssistantChatOptions = {
      integrationID: "d1950bb2-309e-4d11-a144-b9b90fab05c4", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "e46a4e2f-f00a-4c87-adee-97d79b627e66", // The ID of your service instance.
      showLauncher: false,
      openChatByDefault: true,
      element: element,
      onLoad: function(instance) { 
        instance.render();
      },
      onError: function(instance) { 
        instance.destroySession();
        instance.destroy(); 
      },
    };

    script.src= `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${(window.watsonAssistantChatOptions.clientVersion || 'latest')}/WatsonAssistantChatEntry.js`;

    document.body.appendChild(script);

    return (() => {
      // document.body.removeChild(script);
    }, []);

  });
}