# Pizza Maker 

This app will allow a person to *Create* and *Edit* some pizzas.

1. It has one dropdown to select size
2. It has three dropdowns to select toppings
3. It has an Update button to create the pizza and add it to the array
4. The array of pizzas is shown in a table if it has atleast one
5. Each row has a Delete and Edit button
6. The Edit button brings up a hidden section of the table to allow the user to change the size and toppings with a Submit button
 
[Here is the location of the example I used to figure out how to edit](http://stackoverflow.com/questions/26741166/angular-update-object-in-array)

Here is the Edit function

```javascript
	pmc.edit = function(item, psize, tone, ttwo, tthree){
			item.size = psize;
			item.t1 = tone;
			item.t2 = ttwo;
			item.t3 = tthree;
    	};
```