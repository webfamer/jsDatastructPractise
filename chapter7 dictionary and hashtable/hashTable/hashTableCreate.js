function HashTable(){
	var table = [];
	var loseloseHashCode =function(key){
		var hash = 0;
		for(var i=0;i<key.length;i++){
			hash+=key.charCodeAt(i)
		}
		return hash%37;
	}
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		console.log(position+'-'+key);
		table[position] = value;
	}
	this.get = function(key){
		return table[loseloseHashCode(key)];
	}
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	}
}
var hash =new HashTable();
hash.put('aa','aa@qq.com');
hash.put('bb','bb@qq.com');
hash.put('cc','cc@qq.com');

console.log(hash.get('aa'))
console.log(hash.get('bb'))
console.log(hash.get('cc'))
/*解决冲突的方法*/
// 1.分离链接

function HashTable(){
	var table = [];
	var loseloseHashCode =function(key){
		var hash = 0;
		for(var i=0;i<key.length;i++){
			hash+=key.charCodeAt(i)
		}
		return hash%37;
	}
	var ValuePair = function(key,value){
		this.key = key;
		this.value = value;
		this.toString = function(){
			return '['+this.key +'-'+this.value=']'
		}
	}
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		if(table[position]==undefined){
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key,value));
	}
	this.get = function(key){
		var position = loseloseHashCode(key);
		if(table[position]!==undefined){
			var current = table[position].getHead();
			while(current.next){
				if(current.element.key ===key){
					return current.element.value;
				}
				current = current.next;
			}
			if(current.element.key ===key){
				return current.element.value;
			}
		}
		return undefined;
	}
	this.remove = function(key){
		var position = loseloseHashCode(key);
		if(table[position] !=undefined){
			var current = table[position].getHead();
			while (current.next){
				if(current.element.key ===key){
					table[position].remove(current.element);
					if(table[position].isEmpty()){
						table[position] = undefined;
					}
					return true;
				}
				current = current.next;
			}
			if(current.element.key ===key){
				table[position].remove(current.element);
				if(table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		}
		return false;
	}
}
/*线性探查*/
function HashTable(){
	var table = [];
	var loseloseHashCode =function(key){
		var hash = 0;
		for(var i=0;i<key.length;i++){
			hash+=key.charCodeAt(i)
		}
		return hash%37;
	}
	var ValuePair = function(key,value){
		this.key = key;
		this.value = value;
		this.toString = function(){
			return '['+this.key +'-'+this.value=']'
		}
	}
	this.put = function(key,value){
		var position = loseloseHashCode(key);
		if(table[position]) ==undefined{
			table[position] = new ValuePair(key,value);
		}else{
			var index = ++position;
			while(table[index] !=undefined){
				index ++;
			}
			table[index] = new ValuePair(key,value);
		}
	}
	this.get = function(key){
		var position = loseloseHashCode(key);
		if(table[position] !==undefined){
			if(table[position].key ===key){
				return table[position].value;
			}else{
				var index = ++position;
				while(table[index] ===undefined||table[index].key!===key)
					index++;
			}
			if(table[index].key ===key){
				return table[index].value;
			}
		}
		return undefined;
	}
	this.remove = function(){

		var position = loseloseHashCode(key);
		if(table[position] !==undefined){
			if(table[position].key ===key){
				table[index] =undefined;
			}else{
				var index = ++position;
				while(table[index] ===undefined||table[index].key!===key)
					index++;
			}
			if(table[index].key ===key){
				table[index] = undefined;
			}
		}
		return undefined;
	}
}

/*更好的散列函数*/
var djb2HashCode = function(key){
	var hash = 5381;
	for(var i=0;i<key.length;i++){
		hash = hash*33+key.charCodeAt(i);
	}
	return hash%1013;
}
