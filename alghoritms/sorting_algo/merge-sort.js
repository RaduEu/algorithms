

function SortPart(array)
{
	if(array.length==1) return;
	mid=Math.floor((array.length + 1) / 2);
	var i = 0;
	var j = 0;
	var arr1=array.slice(0,mid);
	var arr2=array.slice(mid,array.length);

	SortPart(arr1);
	SortPart(arr2);

	while(i + j != array.length)
	{
		if(arr1[i] < arr2[j] || j>=arr2.length)
		{
			array[i + j] = arr1[i];
			i++;
		}
		else
		{
			array[i + j] = arr2[j];
			j++;
		}
	}
}

function Sort(array)
{
	SortPart(array,0,array.length-1);
	alert(array.length-1);
	document.getElementById("sorted").innerHTML=array.toString();
}
