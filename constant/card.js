var CardList = [
    {"id":1,"type":1,"value":1},
    {"id":2,"type":1,"value":2},
    {"id":3,"type":1,"value":3},
    {"id":4,"type":1,"value":4},
    {"id":5,"type":1,"value":5},
    {"id":6,"type":1,"value":6},
    {"id":7,"type":1,"value":7},
    {"id":8,"type":1,"value":8},
    {"id":9,"type":1,"value":9},
    {"id":10,"type":1,"value":10},
    {"id":11,"type":1,"value":11},
    {"id":12,"type":1,"value":12},
    {"id":13,"type":1,"value":13},

    {"id":14,"type":2,"value":1},
    {"id":15,"type":2,"value":2},
    {"id":16,"type":2,"value":3},
    {"id":17,"type":2,"value":4},
    {"id":18,"type":2,"value":5},
    {"id":19,"type":2,"value":6},
    {"id":20,"type":2,"value":7},
    {"id":21,"type":2,"value":8},
    {"id":22,"type":2,"value":9},
    {"id":23,"type":2,"value":10},
    {"id":24,"type":2,"value":11},
    {"id":25,"type":2,"value":12},
    {"id":26,"type":2,"value":13},

    {"id":27,"type":3,"value":1},
    {"id":28,"type":3,"value":2},
    {"id":29,"type":3,"value":3},
    {"id":30,"type":3,"value":4},
    {"id":31,"type":3,"value":5},
    {"id":32,"type":3,"value":6},
    {"id":33,"type":3,"value":7},
    {"id":34,"type":3,"value":8},
    {"id":35,"type":3,"value":9},
    {"id":36,"type":3,"value":10},
    {"id":37,"type":3,"value":11},
    {"id":38,"type":3,"value":12},
    {"id":39,"type":3,"value":13},

    {"id":40,"type":4,"value":1},
    {"id":41,"type":4,"value":2},
    {"id":42,"type":4,"value":3},
    {"id":43,"type":4,"value":4},
    {"id":44,"type":4,"value":5},
    {"id":45,"type":4,"value":6},
    {"id":46,"type":4,"value":7},
    {"id":47,"type":4,"value":8},
    {"id":48,"type":4,"value":9},
    {"id":49,"type":4,"value":10},
    {"id":50,"type":4,"value":11},
    {"id":51,"type":4,"value":12},
    {"id":52,"type":4,"value":13},
];





var test = function(data,callback){
  callback(data);
};

var getThreeCard = function(data,callback){
  var callbackValue = [];
  var getCard = function(){
      var random = Math.random() * (+51 - +0) + +0;
      random= parseInt(random);
      var i = 1;
      var flag = false;
      if(data.length>0){
        data.forEach(function(val){
          if(random == val){
            flag = true;
          }
          if(i>=data.length){
            if(flag){
              getCard();
            }else{
              callbackValue.push(CardList[random]);
              data.push(random);
            }
          }
          i++;
        });
      }else{
        callbackValue.push(CardList[random]);
        data.push(random);
      }
  }

  var tempData = getCard();
  callback(tempData);
  /*
  console.log(tempData);
  if(tempData){
    console.log(1);
    callbackValue.push([tempData.data]);
    data.push(tempData.index);
    tempData = getCard(data);
    console.log(tempData);
    if(tempData){
      console.log(2);
      callbackValue.push([tempData.data]);
      data.push(tempData.index);
      tempData = getCard(data);
      console.log(tempData);
      if(tempData){
        console.log(3);
        callbackValue.push([tempData.data]);
        data.push(tempData.index);
        callback({data:callbackValue,index:data});
      }
    }
  }
  */
}

var winnerCalculation = function(){

}


module.exports = {
  test : test,
  winnerCalculation: winnerCalculation,
  getThreeCard : getThreeCard
};
