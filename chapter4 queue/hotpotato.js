function Queue(){
	var items = [];
	this.enqueue = function(element){
		items.push(element);
	}
	this.dequeue = function(){
		return items.shift();
	}
	this.front = function(){
		return items[0];
	}
	this.isEmpty = function(){
		return items.length ==0;
	}
	this.size = function(){
		return items.length;
	}
	this.print = function(){
		console.log(items.toString());
	}
}

function hotpotato(nameList,number){
  var queue= new Queue;
  for(var i=0;i<nameList.length;i++){
  	queue.enqueue(nameList[i]);
  }
  var emilist = null;
  while(queue.size()>1){
  	for(var i=0;i<number;i++){
  		 queue.enqueue(queue.dequeue());
  	}
  	emilist = queue.dequeue()
  	console.log(emilist +"淘汰了")
  }	
  return queue.dequeue()
}

var num = [1,2,3,4,5,6,7]
var winner = hotpotato(num,6)
console.log(winner +"胜利了")