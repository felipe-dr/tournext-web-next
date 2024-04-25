import dynamic from "next/dynamic";
import { useState } from "react";
// import YouTubeVideo from "../src/components/dynamic-video";

/**
 * Com o dynamic import, é possível baixar todos os demais módulos necessários de um módulo principal, somente quando este for requisitado
 */
const YouTubeVideo = dynamic(() => import("../src/components/dynamic-video"));

export default function DynamicImportPage() {
  const [isVisible, setVideoStatus] = useState(false);
  return (
    <div>
      <p>
        Mostrar Vídeo
        <input
          type="checkbox"
          onChange={() => {
            setVideoStatus(!isVisible);
          }}
        />
      </p>
      {isVisible && <YouTubeVideo />}
    </div>
  );
}
