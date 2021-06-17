//task 1
console.log('-------------------------[task 1]-------------------------');
var products = ['1st', '2nd', '3rd', '4th', '5th'];
console.log('Initial array:  ' + products);
var theLast = products[products.length - 1];
console.log('> The last value: ' + theLast);

//task 2:
console.log('\n-------------------------[task 2]-------------------------'); 
var styles = ['Jazz', 'Blues']
console.log('> Initial array: ' + styles); 
styles.splice(styles.length, 0, 'Rock-n-roll');
console.log('> Updated array: ' + styles); 


styles.splice(-2, 1, 'Classic');
console.log('\n> Modified array: ' + styles); 
var deleted = styles.splice(0, 1);
console.log('\n> The first value that was deleted: ' + deleted); 
console.log('\n> Actual array: ' + styles);
styles.splice(0, 0, 'Rap', 'Reggae')
console.log('> Updated array: ' + styles);

console.log('\n-------------------------[task 3]-------------------------'); 
function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].toUpperCase() == value.toUpperCase()) {
			return i;
		}
	}
	return -1;
}

console.log('> Position of "Classic": ' + find(styles, 'Classic'));
console.log('> Position of "Heavy Metal": ' + find(styles, 'Heavy Metal'));

console.log('\n-------------------------[task 4]-------------------------'); 

function filterRange(array, a, b) {
	var arr = [];
	for (var i = 0; i < array.length; i++) {
		if ((array[i] >= a) && (array[i] <= b)) {
			arr.splice(arr.length, 0, array[i]);
		}
	}
	return arr;
}

var arr = [1, 5, 2, 8, 14, 63, 27, 85, 74, 16, 51, 55, 49, 32];
console.log('> Initial array: ' + arr);

var arr2 = filterRange(arr, 10, 50);
console.log('> New array with values from range of 10 to 50: ' + arr2);

console.log('\n-------------------------[task 5]-------------------------'); 

function camelize(str) {
	var arr = str.split('-');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join('');
}

var str = 'hi-there!-threre-is-a-test';
console.log('> Initial string: ' + str);
console.log('> Camelized result: ' + camelize(str));

var str2 = 'my-short-string';
console.log('\n> 2nd initial string: ' + str2);
console.log('> Camelized result: ' + camelize(str2));
