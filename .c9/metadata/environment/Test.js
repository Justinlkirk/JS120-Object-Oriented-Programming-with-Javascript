{"filter":false,"title":"Test.js","tooltip":"/Test.js","undoManager":{"mark":53,"position":53,"stack":[[{"start":{"row":0,"column":0},"end":{"row":38,"column":22},"action":"remove","lines":["function createCar(make, fuelLevel, engineOn) {","  return {","    make: make,","    fuelLevel: fuelLevel,","    engineOn: engineOn,","","    startEngine() {","      this.engineOn = true;","    },","","    drive() {","      this.fuelLevel -= 0.1;","    },","","    stopEngine() {","      this.engineOn = false;","    },","","    refuel(percent) {","      if ((this.fuelLevel + (percent / 100)) <= 1) {","        this.fuelLevel += (percent / 100);","      } else {","        this.fuelLevel = 1;","      }","    }","  };","}","","let raceCar1 = createCar('BMW', 0.5, false);","raceCar1.drive();","","let raceCar2 = createCar('Ferrari', 0.7, true);","raceCar2.drive();","","let raceCar3 = createCar('Jaguar', 0.4, 'off');","","console.log(raceCar1);","console.log(raceCar2);","console.log(raceCar3);"],"id":2},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["l"]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["e"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":3},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["w"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["i"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["n"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["n"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["e"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":[" "],"id":4},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["="]}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["l"],"id":7},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["e"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":8},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["c"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["h"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["a"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["r"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["l"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["e"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["s"]}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["="],"id":10}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":16},"action":"insert","lines":["[]"],"id":12}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":17},"action":"insert","lines":["''"],"id":13}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["c"],"id":14},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["h"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["a"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["r"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["l"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["e"]},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":[","],"id":15}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":[" "],"id":16},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["2"]}],[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":[";"],"id":17}],[{"start":{"row":0,"column":29},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["l"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["e"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[" "],"id":19},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["k"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["e"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["v"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["i"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["n"]}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":[" "],"id":20},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":[" "],"id":21}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":14},"action":"insert","lines":["[]"],"id":22}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":15},"action":"insert","lines":["''"],"id":23}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["k"],"id":24},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["e"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["v"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["i"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["n"]}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":[","],"id":25}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":[" "],"id":26},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["3"]}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":[";"],"id":27}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["c"],"id":28},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["h"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["a"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["r"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["l"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":[" "],"id":29},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":[">"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"remove","lines":[">"],"id":30},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"remove","lines":[" "]}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":22},"action":"insert","lines":["[]"],"id":31}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["1"],"id":32}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":[" "],"id":33},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":[">"]}],[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":[" "],"id":34},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["k"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["e"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["v"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["i"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":33},"action":"insert","lines":["[]"],"id":35}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["1"],"id":36}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":[" "],"id":37},{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["/"]}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"remove","lines":["/"],"id":38}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["?"],"id":39}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":[" "],"id":40},{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["c"]},{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"insert","lines":["h"]},{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"insert","lines":["a"]}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":40},"action":"remove","lines":["cha"],"id":41},{"start":{"row":3,"column":37},"end":{"row":3,"column":44},"action":"insert","lines":["charles"]}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":46},"action":"insert","lines":["[]"],"id":42}],[{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"insert","lines":["0"],"id":43}],[{"start":{"row":3,"column":47},"end":{"row":3,"column":48},"action":"insert","lines":[" "],"id":44},{"start":{"row":3,"column":48},"end":{"row":3,"column":49},"action":"insert","lines":[":"]}],[{"start":{"row":3,"column":49},"end":{"row":3,"column":50},"action":"insert","lines":[" "],"id":45},{"start":{"row":3,"column":50},"end":{"row":3,"column":51},"action":"insert","lines":["k"]},{"start":{"row":3,"column":51},"end":{"row":3,"column":52},"action":"insert","lines":["e"]},{"start":{"row":3,"column":52},"end":{"row":3,"column":53},"action":"insert","lines":["v"]},{"start":{"row":3,"column":53},"end":{"row":3,"column":54},"action":"insert","lines":["i"]},{"start":{"row":3,"column":54},"end":{"row":3,"column":55},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":55},"end":{"row":3,"column":57},"action":"insert","lines":["[]"],"id":46}],[{"start":{"row":3,"column":56},"end":{"row":3,"column":57},"action":"insert","lines":["0"],"id":47}],[{"start":{"row":3,"column":58},"end":{"row":3,"column":59},"action":"insert","lines":[";"],"id":48}],[{"start":{"row":3,"column":59},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["c"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["o"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["n"]},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["s"]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["o"]},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["l"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["e"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["."]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["o"],"id":50},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":13},"action":"insert","lines":["()"],"id":51}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["w"],"id":52},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["i"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["n"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["n"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["e"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":21},"action":"insert","lines":["''"],"id":53}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":21},"action":"remove","lines":["''"],"id":54}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":[";"],"id":55}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":20},"end":{"row":4,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1616697071802,"hash":"0c3dc028efcd414287ea0e796c52237ff1a0bbe4"}