function Queue()
{
	this.queue=[];
	this.size=0;
}

Queue.prototype.push=function(value)
{
	if(isNaN(value)) return false;
	
	this.queue.push(value);
	this.size++;

	return true;
}

Queue.prototype.pop=function()
{
	if(this.size==0) return undefined;
	this.size--;
	return this.queue.shift();
}

Queue.prototype.peek=function()
{
	if(this.size==0) return undefined;
	return this.queue[0];
}

Queue.prototype.print=function()
{
	return this.queue.join(",");
}

myQ = new Queue();

