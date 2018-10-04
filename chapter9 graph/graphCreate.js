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
function Graph() {
	// body...
	var vertices = [];
	var adjList = new Dictionary();
	this.addVertex = function(v){
		vertices.push(v);
		adjList.set(v,[]);
	}
	this.addEdge = function(v,w){
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	}
	this.toString = function(){
		var s ='';
		for(var i=0;i<vertices.length;i++){
			s+=vertices[i] +'->';
			var neighbors = adjList.get(vertices[i]);
			for(var j=0;j<neighbors.length;j++){
				s +=neighbors[j]+' ';
			}
			s +='\n';
		}
		return s;
	}
	//广度优先算法
	 var initializeColor = function(){
	 	var color = [];
	 	for(var i=0;i<vertices.length;i++){
	 		color[vertices[i]] = 'white';
	 	}
	 	return color;
	 };
	 this.bfs = function(v,callback){
	 	var color = initializeColor();
	 	queue = new Queue;
	 	queue.enqueue(v);
	 	while(!queue.isEmpty()){
	 		var u=queue.dequeue(),
	 		neighbors = adjList.get(u);
	 		color[u] = 'grey';
	 		for(var i=0;i<neighbors.length;i++){
	 			var w = neighbors[i];
	 			if(color[w] ==='white'){
	 				color[w] = 'grey';
	 				queue.enqueue(w);
	 			}
	 		}
	 		color[u] = 'black';
	 		if(callback){
	 			callback(u);
	 		}
	 	}
	 }
	 //使用BFS寻找最短路径
	 this.BFS = function(v){
	 	var color = initializeColor(),
	 	queue = new Queue(),
	 	d = [],
	 	pred = [];
	 	queue.enqueue(v);
	 	for(var i=0;i<vertices.length;i++){
	 		d[vertices[i]] =0;
	 		pred[vertices[i]] = null;
	 	}
	 	while(!queue.isEmpty()){
	 		var i=queue.dequeue(),
	 		neighbors = adjList.get(u);
	 		color[u] = 'grey';
	 		for( i=0;i<neighbors.length;i++){
	 			var w = neighbors[i];
	 			if(color[w] ==='white'){
	 				color[w] = 'grey';
	 				d[w] = d[u]+1;
	 				pred[w] = u;
	 				queue.enqueue(w);
	 			}
	 		}
	 		color[u] = 'black';
	 	}
	 	return{
	 		distances:d,
	 		predecessors:pred                                                                                                                                                                                                                                                                                                                                                                                                                                         
	 	};
	 }
	 /{/深度优先算法
	 	 this.dfs = function(callback){
	 	 	var color = initializeColor();
	 	 	for(var i=0;i<vertices.length;i++){
	 	 		if(color[vertices[i]]==='white'){
	 	 			dfsVisit(vertices[i],color,callback);
	 	 		}
	 	 	}
	 };
	 var dfsVisit = function(u,color,callback){
	 	color[u] = 'grey';
	 	if(callback){
	 		callback(u);
	 	}
	 	var neighbors = adjList.get(u);
	 	for(var i=0;i<neighbors.length;i++){
	 		var w = neighbors[i];
	 		if(color[w]==='white'){
	 			dfsVisit(w,color,callback);
	 		}
	 	}
	 	color[u] ='black'
	 }
	 //改进的DFS方法
	 var time =0;
	 this.DFS = function(){
	 	var color = initializeColor(),
	 	d=[],
	 	f=[],
	 	p=[];
	 	time = 0;
	 	for(var i =0;i<vertices.length;i++){
	 		f[vertices[i]]=0;
	 		d[vertices[i]]=0;
	 		p[vertices[i]]=null;
	 	}
	 	for(i=0;i<vertices.length;i++){
	 		if(color[vertices[i]]==='white'){
	 			DFSVisit(vertices[i],color,d,f,p);
	 		}
	 	}
	 	return {
	 		discovery：d,
	 		finished:f,
	 		predecessors:p
	 	};
		};
		var DFSVisit = function(u,color,d,f,p){
			console.log('discovered'+u);
			color[u] = 'grey';
			d[u] =++time;
			var neighbors = adjList.get(u);
			for(var i=0;i<neighbors.length;i++){
				var w = neighbors[i];
				if(color[w]==='white'){
					p[w] = u;
					DFSVisit(w,color,d,f,p);
				}
			}
			color[u] = 'black';
			f[u] = ++time;
			console.log('explored'+u);
		}

}
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for(var i=0;i<myVertices.length;i++){
	graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');
 
 function printNode(value){
 	console.log('Visited vertex:' +value);
 }
 graph.bfs(myVertices[0],printNode)
