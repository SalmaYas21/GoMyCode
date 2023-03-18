#Problem 1
#Solution 1
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]

distinct_elements = []
sum = 0

for element in set1:
    if element not in distinct_elements:
        distinct_elements.append(element)
        sum += element

for element in set2:
    if element not in distinct_elements:
        distinct_elements.append(element)
        sum += element

print("Sum of distinct elements:", sum)

#Solution 2
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]

distinct_elements = []
sum = 0

for element in set1:
    if element not in distinct_elements:
        distinct_elements.append(element)
        sum += element

for element in set2:
    if element not in distinct_elements:
        distinct_elements.append(element)
        sum += element

print("Sum of distinct elements:", sum)

#Problem 2
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]

overlapping_elements = []
sum = 0

for element in set1:
    if element in set2:
        overlapping_elements.append(element)
        sum += element

print("Sum of overlapping elements:", sum)

