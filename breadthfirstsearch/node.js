var Node=function(value){
    this.value=value;
    this.edges=[];
    this.searched=false;
    this.parent=null;
}

Node.prototype={
    constructor:Node,
    AddEdges: function(neighbor){
        var self=this;

        self.edges.push(neighbor);
        neighbor.edges.push(self);
    }
}