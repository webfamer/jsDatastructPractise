function BinarySearchTree(){
	var Node = function(key){
		this.key = key;
		this.left = null
		this.right = null;
	}
	var root = null;
	this.insert = function(){
		var newNode = new Node(key){
			if(root ===null){
				root = newNode;
			}else{
				insertNode(root,newNode);
			}
		}
	}
	var insertNode = function(node,newNode){
		if(newNode.key<node.key){
			if(node.left ===null){
				node.left =newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right ===null){
				node.right =newNode;
			}else{
				insertNode(node.right,newNode)
			}
		}
	}
	this.inOrderTraverse =function(callback){
		inOrderTraverseNode(root,callback);
	}
	var	inOrderTraverseNode = function(callback){
		if(node !==null){
			inOrderTraverse(node.left,callback);
			callback(node.key);
			inOrderTraverse(node.right,callback);
		}
	}
	this.preOrderTranverse = function(callback){
		preOrderTranverseNode(root,callback)
	}
	var preOrderTranverseNode = function(callback){
		callback(node.key);
		preOrderTranverseNode(node.left,callback);
		preOrderTranverseNode(node.right,callback);
	}
	this.postOrderTranverse = function(callback){
		preOrderTranverseNode(root,callback);
	}
	var postOrderTranverseNode(root,callback){
		postOrderTranverseNode(node.left,callback);
		postOrderTranverseNode(node.right,callback);
		callback(node.key);
	}
	this.min = function(){
		return minNode(root);
	}
	var minNode = function(){
		if(node){
			while(node&&node.left!==null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	}
	this.max = function(){
		return maxNode(root);
	}
	var maxNode = function(){
		if(node){
			while(node&&node.right!==null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	}
	this.serch = function(key){
		return serchNode(root,key);
	}
	var serchNode = function（node,key）{
		if(node===null){
			return false;
		}
		if(key<node.key){
			return serchNode(node.left,key);
		}else if(key>node.key){
			return serchNode(node.right,key)
		}else{
			return true;
		}
	}
	this.remove = function(key){
		root = removeNode(root,key);
	}
	var removeNode = function(node,key){
		if(node ===null){
			return null;
		}
		if(key<node.key){
			node.left = removeNode(node,key);
			return node;
		}else if(key>node.key){
			node.right = removeNode(node.right,key)
			return node;
		}else{
			if(node.left ===null&&node.right ===null){
				node = null;
				return node;
			}
			if(node.left===null){
				node = node.right;
				
			}
		}
	}
	this.remove = function(key){
		root = removeNode(root,key);
	}
	var removeNode =function(node,key){
		if(node ===null){
			return null;
		}
		if(key<node.key){
			node.left = removeNode(node.left,key);
			return node;
		}else if(key>node.key){
			node.right = removeNode(node.right,key);
			return node;
		}else{
			// 第一种情况 --一个叶节点
			if(node.left ===null&&node.right ===null){
				node = null;
				return nude;
			}
			//第二种情况--一个只有一个子节点的节点
			if（node.left=== null){
			node = node.right;
			return node;
			}else if(node.right ===null){
				node = node.left;
				return node;
			}
			var aux = findMinNode(node.right);
			node.key = aux.key;
			node.right = removeNode(node.right,aux.key);
			return node;
		}		
	}
}