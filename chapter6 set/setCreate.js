function set() {
	// body...
	var items = {};
	this.has = function(value){
		return value in items;
	}
	this.add = function(value){
		if(!this.has(value)){
			items[value] = value;
			return true;
		}
		return false;
	}
	this.remove = function(value){
		if(this.has(value)){
			delete items[value];
			return true;
		}
		return false;
	}
	this.size = function(){
		var count = 0;
		for(var prop in items){
			if(items.hasOwnProperty(prop))
				++count;
		}
		return count;
	}
	this.values = function(){
		var keys = [];
		for(var key in items){
			keys.push(key);
		}
		return keys;
	}
	this.union = function(otherSet){
		var unionSet =new set();
		var values = this.values();
		for(var i=0;i<values.length;i++){
			unionSet.add(values[i]);
		}
		values = otherSet.values();
		for(var i=0;i<values.length;i++){
			unionSet.add(values[i]);
		}
		return unionSet;
	}
	this.intersection = function(otherSet){
		var intersectionSet = new set();
		var values = this.values();
		for(var i=0;i<values.length;i++){
			if(otherSet.has(values[i])){
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	}
	this.difference = function(otherSet){
		var differenceSet = new set();
		var values = this.values();
		for(var i=0;i<values.length;i++){
			if(!otherSet.has(values[i])){
				differenceSet.add(values[i])
			}
		}
		return differenceSet;
	}
	this.sbuset = function(otherSet){
		if(this.size()>otherSet.size()){
			return false;
		}else{
			var values = this.values();
			for(var i=0;i<values.length;i++){
				if(!otherSet.has(values[i])){
					return false;
				}
			}
			return true;
		}
	}
}
// var set = new set();
// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());
// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());
// set.remove(1);
// console.log(set.values());
// set.remove(2);
// console.log(set.values());
// 
// var setA = new set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// var setB = new set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// var unionAB = setA.union(setB);
// console.log(unionAB.values());

// var setA = new set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// var setB = new set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// var intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());
// 
// var setA = new set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// var setB = new set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// var differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

// var setA = new set();
// setA.add(1);
// setA.add(2);
// var setB = new set();
// setB.add(1);
// setB.add(2);
// setB.add(3);
// var setC = new set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// console.log(setA.sbuset(setB));
// console.log(setA.sbuset(setC));