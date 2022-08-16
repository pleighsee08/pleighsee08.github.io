//grab the form that includes the textbox to add items
var form = document.getElementById('addForm');
//grab the ul
var itemList = document.getElementById('items');

//add event listener to add items form
form.addEventListener('submit', addItem);

function addItem(e){
	e.preventDefault();

	//get input value from the textbox with an id of item
	var newItem = document.getElementById('item').value;
	console.log(newItem)   //debugging

	//create new li element
	var li = document.createElement('li')
	//add class - to match the other lis in the list
	li.className = 'list-group-item';
	console.log(li)   //debugging
	//add textnode to this new li with input value
	li.appendChild(document.createTextNode(newItem));
	//create the delete button element that sits to the right of each li
	var deleteBtn = document.createElement('button');
	//add classes to match the rest of the delete buttons
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	//append text node - put the X on the button
	deleteBtn.appendChild(document.createTextNode('X'));
	//append button to li
	li.appendChild(deleteBtn);
	//append li to list
	itemList.appendChild(li);
}

//REMOVING ITEMS
//add event listener to the ul
itemList.addEventListener('click', removeItem);

function removeItem(e){
	//only want to remove an item if they clicked specifically on a delete button
	if(e.target.classList.contains('delete')){
		//console.log(1);   //debugging
		if(confirm('Are you sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}
//SEARCH BOX
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems)

function filterItems(e){
	//grab the text and convert to lowercase
	var text = e.target.value.toLowerCase();
	//console.log(text)  //debugging

	//grab all the lis in the item list
	var items = itemList.getElementsByTagName('li');
	//convert collection to array
	Array.from(items).forEach(function(item){
		var itemName = item.firstChild.textContent;
		//console.log(itemName);

		//compare the item names to the search box text
		if(itemName.toLowerCase().indexOf(text) != -1){ //it's a match
				item.style.display = 'block';
		}else{
				item.style.display = 'none';
		}
		
	});
}
