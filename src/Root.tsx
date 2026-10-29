import React from "react";
import { Composition, Sequence, Audio, staticFile } from "remotion";
import { Scene01_Intro } from "./scenes/Scene01_Intro.js";
import { Scene02_Surfaces } from "./scenes/Scene02_Surfaces.js";
import { Scene03_Superpowers } from "./scenes/Scene03_Superpowers.js";
import { Scene04_Customization } from "./scenes/Scene04_Customization.js";
import { Scene05_HandsOn } from "./scenes/Scene05_HandsOn.js";
import { Scene06_Outro } from "./scenes/Scene06_Outro.js";

// Standart sahnalar davomiyligi (60 FPS bo'yicha)
// Agar timing_manifest.json bo'lsa, undan olinadi, aks holda standart hisob-kitob
const SCENE_DURATIONS = {
  scene1: 90 * 60,   // 90s
  scene2: 180 * 60,  // 180s
  scene3: 150 * 60,  // 150s
  scene4: 135 * 60,  // 135s
  scene5: 225 * 60,  // 225s
  scene6: 60 * 60    // 60s
};

const TOTAL_FRAMES = Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0);

export const AntigravityVideo: React.FC = () => {
  let currentFrom = 0;

  const scenes = [
    { id: "scene_01", comp: Scene01_Intro, duration: SCENE_DURATIONS.scene1, audio: "audio/scene_01_intro.mp3" },
    { id: "scene_02", comp: Scene02_Surfaces, duration: SCENE_DURATIONS.scene2, audio: "audio/scene_02_surfaces.mp3" },
    { id: "scene_03", comp: Scene03_Superpowers, duration: SCENE_DURATIONS.scene3, audio: "audio/scene_03_superpowers.mp3" },
    { id: "scene_04", comp: Scene04_Customization, duration: SCENE_DURATIONS.scene4, audio: "audio/scene_04_customization.mp3" },
    { id: "scene_05", comp: Scene05_HandsOn, duration: SCENE_DURATIONS.scene5, audio: "audio/scene_05_handson.mp3" },
    { id: "scene_06", comp: Scene06_Outro, duration: SCENE_DURATIONS.scene6, audio: "audio/scene_06_outro.mp3" },
  ];

  return (
    <div style={{ flex: 1, backgroundColor: "#080c14" }}>
      {scenes.map((scene) => {
        const from = currentFrom;
        currentFrom += scene.duration;
        const Comp = scene.comp;

        return (
          <Sequence key={scene.id} from={from} durationInFrames={scene.duration}>
            <Comp />
            {/* Audio ovoz yo'li */}
            <Audio src={staticFile(scene.audio)} />
          </Sequence>
        );
      })}
    </div>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AntigravityMasterclass"
        component={AntigravityVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
