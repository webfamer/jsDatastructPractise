function Dictionary(){
	var items = {};
	this.has =function(key){
		return key in items;
	}
	this.set = function(key,value){
		items[key]= value;
	}
	this.remove =function(key){
		if(this.has(key)){
			delete items[key];
			return true;
		}
		return false;
	}
	this.values =function(){
		var values= [];
		for(var k in items){
			if(this.has(k)){
				values.push(items[k])
			}
		}
		return values;
	}
	this.clear = function(){
		items = {};
	}
	this.size = function(){
		var count = 0;
		for(var prop in items){
			if(items.hasOwnProperty(prop)){
				++count;
			}
		}
		return count;
	}
	this.keys = function(){
		var keys =[];
		for(var key in items){
			keys.push(key);
		}
		return keys;
	}
	this.getItems = function(){
		return items;
	}
	this.get = function(key){
		return items[key];
	}
}

var dictionary = new Dictionary();
dictionary.set('ss','ss@qq.com')
dictionary.set('aa','aa@qq.com')
dictionary.set('dd','dd@qq.com')
console.log(dictionary.has('aa'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('dd'));
dictionary.remove('dd');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());