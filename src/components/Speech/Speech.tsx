
import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import './Speech.scss'
import speaker from './speaker.svg'

interface ISpeech {
    text: string,
    volume: number
}

const Speech: React.FC<ISpeech> = (props: ISpeech) => {
  const {text, volume} = props;
  const { speak } = useSpeechSynthesis();

  return (
    <button className="speech-button"onClick={() => speak({text, volume})}>
    <img src={speaker} alt='Text to Speech Logo' />
    </button>
  );
};
export default Speech;