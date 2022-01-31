const axios = require('axios');
const http = require('http');
const prompt = require('prompt-sync')();
const ioHook = require('iohook');
const nano = axios.create({
  baseURL: 'http://10.0.0.201:16021/api/v1/btf3oghk6YAAlAxWzl3rj5AK05CV2y47/',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

let job = prompt('Current job?');
job=job.toLowerCase();
let animating = false;
let queue=[];
let queueActive=false;
let lastPress;
//Gets all info related to the device
// nano.get('')
// .then(function (response) {
//   console.log(response.data);
//   console.log(response.data.panelLayout.layout.positionData);
// })
// .catch(function (error) {
//   console.log(error);
// });
addToQueue = (effectName, animationTime=1) => {
  if (queue[queue.length-1] != effectName) {
    queue.push(
      {
        effectName: effectName,
        animationTime: animationTime
      }
      )
    console.log(queue);
  }
  if (queueActive==false) {
    queueActive=true;
    runQueue();
  }
}

runQueue = () => {
  runAnimation(queue[0].effectName,queue[0].animationTime);
  setTimeout(function() {
    removeFromQueue();
    if(queue.length>0) {
      runQueue();
    }
  },queue.length+1*1500)
  queueActive=false;
}

removeFromQueue = () => {
  console.log("remove " + queue[0]);
  queue.shift();
  console.log(queue)
}

runAnimation = (effectName, animationTime) => {
  nano.put('effects', {
    'write': {
        "command": "displayTemp",
        "duration": animationTime,
        "animName": effectName
    }
  })
  .then(function (response) {

  })
  .catch(function (error) {
    console.log(error);
  });
}

//Minimum duration appears to be 1 second, you can set some time between each but if an animation is playing the next will be skipped
ioHook.on("keydown", event => {
  console.log(event);
  if (job=="gnb") {
    if (event.shiftKey==false&&event.ctrlKey==false) {
      switch (event.keycode) {
          case 2:
            addToQueue("Keen Edge");
            break;
          case 3:
            addToQueue("Brutal Shell");
            break;
          case 4:
            addToQueue("Solid Barrel");
            break;
          case 5:
            addToQueue("Burst Strike");
            break;
          case 16:
            switch(lastPress) {
              case 18:
                addToQueue("Keen Edge");
                break;
              case 19:
                addToQueue("Brutal Shell");
                break;
              case 20:
                addToQueue("Solid Barrel");
                break;
            }
            break;
          case 18:
            addToQueue("Burst Strike");
            lastPress=18;
            break;
          case 19:
            addToQueue("Burst Strike");
            lastPress=19;
            break;
          case 20:
            addToQueue("Burst Strike");
            lastPress=20
            break;
          case 6:
            break;
      }
    } else if (event.shiftKey==true&&event.ctrlKey==true) {
      switch (event.keycode) {
          case 2:
            addToQueue("Keen Edge");
            break;
          case 3:
            addToQueue("Brutal Shell");
            break;
          case 4:
            addToQueue("Solid Barrel");
            break;
          case 5:
            addToQueue("Burst Strike");
            break;
          case 16:
            addToQueue("Burst Strike");
            break;
          case 6:
            break;
      }
    } else if (event.shiftKey==true) {
      switch (event.keycode) {
          case 2:
            addToQueue("Keen Edge");
            break;
          case 3:
            addToQueue("Brutal Shell");
            break;
          case 4:
            addToQueue("Solid Barrel");
            break;
          case 5:
            addToQueue("Burst Strike");
            break;
          case 16:
            addToQueue("Burst Strike");
            break;
          case 6:
            break;
      }
    } else if (event.ctrlKey==true) {
      switch (event.keycode) {
          case 2:
            addToQueue("Keen Edge");
            break;
          case 3:
            addToQueue("Brutal Shell");
            break;
          case 4:
            addToQueue("Solid Barrel");
            break;
          case 5:
            addToQueue("Burst Strike");
            break;
          case 16:
            addToQueue("Burst Strike");
            break;
          case 6:
            break;
      }
    }
  } else if (job=="nin") {
    let comboQueue=[];
    if (event.shiftKey==false&&event.ctrlKey==false) {
      switch (event.keycode) {
          case 2://1
            addToQueue("Spinning Edge");
            break;
          case 3://2
            addToQueue("Gust Slash");
            break;
          case 4://3
            addToQueue("Shadow Fang");
            break;
          case 5://4
            addToQueue("Aeolian Edge");
            break;
          case 6://5
            addToQueue("Armor Crush");
            break;
          case 16://Q Ninjutsu Logic
            if (comboQueue.join(" ")=="Ten"||comboQueue.join(" ")=="Chi"||comboQueue.join(" ")=="Jin") {
              //Fuma Shuriken
              comboQueue=[];
            // } else if () {
            //   //Raiton
            // } else if () {
            //   //Katon
            // } else if () {
            //   //Doton
            // } else if () {
            //   //Hyoton
            // } else if () {
            //   //Huton
            // } else if () {
            //   //Suiton
            // } else if () {
            //   //Goka Mekkyaku
            // } else if () {
              //Hyosho Ranryu
            } else {
              //Bunny of Shame
            }
            break;
          case 18://E
            comboQueue.push("Ten")//E
            break;
          case 19://R
            comboQueue.push("Chi")//R
            break;
          case 20://T
            comboQueue.push("Jin")//T
            break;
          case 33://F
            addToQueue("Death Blossom");
            break;
          case 34://G
            addToQueue("Hakke Mujinsatsu");
            break;
          case 46://C
            addToQueue("Mug");
            break;
          case 47://V
            addToQueue("Leg Sweep");
            break;
          case 44://Z
            addToQueue("Meisui");
            break;
          case 3666://G18 Mouse Button
            addToQueue("Kassatsu");
            comboQueue.push("Kassatsu")//Kassatsu
            break;
          case 3655://G15 Mouse Button
            addToQueue("Ten Chi Jin");
            break;
      }
    } else if (event.shiftKey==true&&event.ctrlKey==true) {//Ctrl+Shift+Key
      switch (event.keycode) {
        case 2://Shift+Ctrl+1
          addToQueue("Keen Edge");
          break;
        case 3://Shift+Ctrl+2
          addToQueue("Brutal Shell");
          break;
        case 4://Shift+Ctrl+3
          addToQueue("Solid Barrel");
          break;
        case 5://Shift+Ctrl+4
          addToQueue("Burst Strike");
          break;
        case 16://Shift+Ctrl+Q
          break;
        case 18://Shift+Ctrl+E
          addToQueue("Burst Strike");
          lastPress=18;//Shift+Ctrl+E
          break;
        case 19://Shift+Ctrl+R
          addToQueue("Burst Strike");
          lastPress=19;//Shift+Ctrl+R
          break;
        case 20://Shift+Ctrl+T
          addToQueue("Burst Strike");
          lastPress=20//Shift+Ctrl+T
          break;
        case 33://Shift+Ctrl+F
          break;
        case 34://Shift+Ctrl+G
          break;
        case 46://Shift+Ctrl+C
          break;
        case 47://Shift+Ctrl+V
          break;
        case 44://Shift+Ctrl+Z
          break;
        case 3666://Shift+Ctrl+G18 Mouse Button
          break;
        case 3655://Shift+Ctrl+G15 Mouse Button
          break;
      }
    } else if (event.shiftKey==true) {
      switch (event.keycode) {
        case 2://Shift+1
          addToQueue("Shade Shift");
          break;
        case 3://Shift+2
          addToQueue("Blood Bath");
          break;
        case 4://Shift+3
          addToQueue("Second Wind");
          break;
        case 5://Shift+4
          addToQueue("True North");
          break;
        case 16://Shift+Q
          addToQueue("Trick Attack");
          break;
        case 18://Shift+E
          addToQueue("Execute");
          lastPress=18;//Shift+E
          break;
        case 19://Shift+R
          addToQueue("Dream Within a Dream");
          lastPress=19;//Shift+R
          break;
        case 20://Shift+T
          addToQueue("Bunshin");
          lastPress=20//Shift+T
          break;
        case 33://Shift+F
          addToQueue("Hellfrog Medium");
          break;
        case 34://Shift+G
          addToQueue("Bhavacakra");
          break;
        case 46://Shift+C
          addToQueue("Throwing Dagger");
          break;
        case 47://Shift+V
          break;
        case 44://Shift+Z
          break;
        case 3666://Shift+G18 Mouse Button
          break;
        case 3655://Shift+G15 Mouse Button
          break;
      }
    } else if (event.ctrlKey==true) {
      switch (event.keycode) {
        case 2://Ctrl+1
          addToQueue("Keen Edge");
          break;
        case 3://Ctrl+2
          addToQueue("Brutal Shell");
          break;
        case 4://Ctrl+3
          addToQueue("Solid Barrel");
          break;//Ctrl+4
        case 5:
          addToQueue("Burst Strike");
          break;
        case 16://Ctrl+Q
          break;
        case 18://Ctrl+E
          addToQueue("Burst Strike");
          lastPress=18;//Ctrl+E
          break;
        case 19://Ctrl+R
          addToQueue("Burst Strike");
          lastPress=19;//Ctrl+R
          break;
        case 20://Ctrl+T
          addToQueue("Burst Strike");
          lastPress=20//Ctrl+T
          break;
        case 33://Ctrl+F
          break;
        case 34://Ctrl+G
          break;
        case 46://Ctrl+C
          break;
        case 47://Ctrl+V
          break;
        case 44://Ctrl+Z
          break;
        case 3666://Ctrl+G18 Mouse Button
          break;
        case 3655://Ctrl+G15 Mouse Button
          break;
      }
    }
  }
});
//Register and stark hook
ioHook.start();
