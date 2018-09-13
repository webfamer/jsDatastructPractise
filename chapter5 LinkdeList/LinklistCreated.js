function LinkedList() {
	// body...
	var Node = function(element){
		this.element = element;
		this.next = null;
	};
	var lenght = 0;
	var head = null;

	this.append =function(element){
		var node = new Node(element),current;
		if(head ===null){
			head = node;
		}else{
			current = head;
			while(current.next){
				current = current;
			}
			current.next = node;
		}
		lenght ++;
	};
	this.insert = function(position,element){
		if(position>=0&&position<=length){
			var node = new Node(element);
			current = head,previous,index =0;
			if(position ===0){
				node.next = current;
				head = node;
			}else{
				while(index++<position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length ++;
			return true;
		}else{
			return false;
		}
	};
	this.removeAt = function(position){
		if(position>-1&&position<length){
			var current = head,previous,index =0;
			if(position===0){
				head = current.next;
			}else{
				while(index++<position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
			}
			lenght--;
			return current.element;
		}else{
			return null;
		}
	};
	this.remove = function(element){};
	this.indexOf = function(element){};
	this.isEmpty = function(){};
	this.size = function(){};
	this.toString = function(){};
	this.print = function(){};
}