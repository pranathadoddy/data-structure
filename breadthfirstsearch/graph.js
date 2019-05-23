var Graph=function(){
    this.nodes=[];
    this.graph={};
    this.start=null;
    this.end=null;
}

Graph.prototype={
    constructor:Graph,
    AddNode: function(node){
        var self=this;

        self.nodes.push(node);
        self.graph[node.value]=node;
    },
    GetNode: function(value){
        return self.graph[value];
    },
    AddStart: function(value){
        this.start=this.graph[value];
        return this.start;
    },
    AddEnd: function(value){
        this.end=this.graph[value];
        return this.end;
    }
}