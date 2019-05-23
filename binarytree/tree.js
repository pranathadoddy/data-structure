var Tree= function(){
    this.root=null;
}

Tree.prototype={
    constructor:Tree,
    addValue: function(val){
        var node=new Node(val);

        if(this.root===null){
            this.root=node;
        }else{
            this.root.addNode(node);
        }
    },
    transverse:function(){
        this.root.visit();
    }
}