
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { ISpeech } from '../../types';
import speaker from './speaker.svg';
import './Speech.scss';


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