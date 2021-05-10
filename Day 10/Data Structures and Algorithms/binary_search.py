def binary_search(list, target):

    first = 0
    last = len(list) - 1

    while first <= last:
        midpoint = (first + last) // 2

        if list[midpoint] == target:
            return midpoint

        elif list[midpoint] < target:
            first = midpoint + 1

        else:
            last = midpoint - 1

    return None

def verify(index):
    if index is not None:
        print("The index is found at position : ", index)
    else:
        print(("Index is not found"))

arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

result = binary_search(arr, 0)
verify(result)

