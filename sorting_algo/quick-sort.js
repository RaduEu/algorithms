	function piv(array)
	{
		return array[0];
	}

	function QuickSort(array)
	{
		
		if(array.length==0) return [];
		if(array.length==1) return [array[0]];

		var left = [];
		var right = [];

		var pivot = piv(array);
		for(var i = 1 ; i < array.length ; i++)
		{
			if(array[i] < pivot) left.push(array[i]);
			else right.push(array[i]);
		}

		var trueArray=[];
		
		arr1=QuickSort(left);

		for(var i = 0 ; i < arr1.length ; i++) trueArray.push(arr1[i]);

		trueArray.push(pivot);
		
		arr1=QuickSort(right);

		for(var i = 0; i < arr1.length ; i++) trueArray.push(arr1[i]);

		return trueArray;
	}

	function Sort(array)
	{
		array=QuickSort(array);
		document.getElementById("sorted").innerHTML=array.toString();
	}