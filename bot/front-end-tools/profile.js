/*
  B-2S0MA: Self-aware/Happy bot/Heart

  1. Lots of happy emojes
  2. fake typing to...a spam of messages, short quick messgaes
  3. Changing of typeing with, ALL CAPs and drawn out letters YESSSSSSSS!
  4. Use time and time-passed as part of input before response

*/

/*

// scripted events, and messages, monologs
  Shape Theory:

  1. Triangle long into short lines
  2. Tail lines
  3. Block and tail

  Idea is that no matter the text block it can be broken down to these shapes

*/
module.exports = {
  // block string output
  blockSpeech: function(inputText = []) {
    let textBlock = "";
    inputText.map((text)=>{
      textBlock = textBlock.concat(text);
      textBlock = textBlock.concat("...");
    });
    return {
      text: textBlock,
      size: textBlock.length
    };
  },
  //blockSpeech(scriptedLogs.dayDream).text
  triangleSpeech: function(inputText = []) {
    let triangleBlock = "";
    // console.log(inputText.length);
    //Make sure it is 9 in length
    let startBlock = "";
    let middleBlock = "";
    let endBlock = "";
    if (inputText.length===9) {
      for (let s=0; s<5; s++) {
        startBlock = startBlock.concat(inputText[s]);
        startBlock = startBlock.concat(" ");
      };
      for (let m=5; m<8; m++) {
        middleBlock = middleBlock.concat(inputText[m]);
        middleBlock = middleBlock.concat(" ");
      };
      endBlock = endBlock.concat(inputText[8]);
    };
    // console.log(startBlock);console.log(middleBlock);console.log(endBlock);
    return {
      startText: [startBlock, startBlock.length],
      middleBlock: [middleBlock, middleBlock.length],
      endBlock: [endBlock, endBlock.length],
    };
  },
  // triangle string output
  //triangleSpeech(scriptedLogs.dayDream)
  trailSpeech: function(inputText = []) {
    let textTrails = {};
    for (let t=0; t<inputText.length; t++) {textTrails[t] = [inputText[t], inputText[t].length]};
    return textTrails;
  }
  //trailSpeech(scriptedLogs.dayDream)
};
