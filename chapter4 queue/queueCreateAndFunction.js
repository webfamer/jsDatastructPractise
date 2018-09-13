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
// {
// var queue = new Queue;
// console.log(queue.isEmpty());
// queue.enqueue('Jhon');
// queue.enqueue('Jack');
// queue.enqueue('Camila');
// queue.print();
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// queue.print();


function priorityQueue(){
	var items = [];
	function queueelemet(element,priority){
		this.element =element;
		this.priority = priority;
	}
	this.enqueue = function(element,priority){
		var queueElement = new queueelemet(element,priority);
		if(this.isEmpty()){
			items.push(queueElement);
		}else{
			  var add = false;
			for(var i=0;i<items.length;i++){
				if(queueElement.priority<items[i].priority){
					items.splice(i,0,queueElement);
					add = true;
					break;
				}
			}
			if(!add){
				items.push(queueElement);
			}
		}
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
		console.log(items);
	}
}
var priorityQueue = new priorityQueue();
priorityQueue.enqueue('mike',2);
priorityQueue.enqueue('anna',1);
priorityQueue.enqueue('jose',1);
priorityQueue.print();