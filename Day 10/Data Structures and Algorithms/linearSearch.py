def linear_search(array, num):
	for i in range(len(array)):
		if (array[i]==num):
			return i
	return -1

print(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))

