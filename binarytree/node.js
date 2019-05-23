var Node= function(val){
    this.value=val;
    this.left=null;
    this.right=null;
}

Node.prototype={
    constructor:Node,
    addNode:function(node){
        if(this.value < node.value){
            if(this.left===null){
                this.left=node;
            }
            else{
                this.left.addNode(node);
            }
        }
        else if(this.value > node.value){
            if(this.right===null){
                this.right=node;
            }
            else{
                this.right.addNode(node);
            }
        }
    },

    visit:function(){
        if(this.left!==null){
            this.left.visit();
        }

        console.log(this.value);

        if(this.right!==null){
            this.right.visit();
        }
    },

    searchNode:function(value){
        if(this.value===value){
            console.log("found");
        }
        if(this.value < value && this.left!==null){
            this.left.searchNode(value);
        }
        else if(this.value > value && this.right!==null){
            this.right.searchNode(value);
        }
    }
}

