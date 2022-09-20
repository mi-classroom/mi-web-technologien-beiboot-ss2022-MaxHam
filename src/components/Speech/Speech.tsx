import React, { useState, useEffect } from 'react';
import speaker from '../../assets/images/speaker.svg';
import { ISpeech } from '../../types';
import './Speech.scss';

const Speech: React.FC<ISpeech> = (props: ISpeech) => {
  const { text, volume } = props;
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSupported(true);
    }
  }, []);

  const speak = (args: { text: string; volume: number }) => {
    const { text = '', volume = 1 } = args;
    if (!supported) return;
    const utterance = new window.SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.volume = volume;
    window.speechSynthesis.speak(utterance);
  };

  const handleClick = () => {
    speak({ text, volume });
  };

  return (
    <button className="speech-button" onClick={handleClick}>
      <img src={speaker} alt="Text to Speech Logo" />
    </button>
  );
};
export default Speech;
