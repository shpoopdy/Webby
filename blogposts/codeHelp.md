---
title: 'Code I Seem to Always Forget'
date: '2025-08-23'
last_edited: '2025-08-25'
---

## Swift
```
// Creating a boolean array with n false values in Swift
var arr = Array(repeating: false, count: n)

// Empty array
var arr = [String]()
var arr: [String] = []

// The following is a for each loop with an object using ForEach
ForEach(MockData.frameworks) { framework in
	FrameworkTitleView(name: framework.name, imageName: framework.imageName)
}

// For each loop using for in
let names = ["Anna", "Alex", "Brian", "Jack"]
for name in names {
    print("Hello, \(name)!")
}

// You can put tuples in Switch statements. Remember to lookup what the underbar means again
for i in 1...n {
  switch (i % 3, i % 5) {
    case (0, 0): ans.append("FizzBuzz")
    case (0, _): ans.append("Fizz")
    case (_, 0): ans.append("Buzz")
    default: ans.append(String(i))
  }
}

// Creating an array from a string
var s = "hello"
var dude = Array(s) // dude = ['h','e','l','l','o']
```

## Git
```
# Git config stuff
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com

# Delete a branch
git branch --delete <branch_name>

# Create a branch and switch to it
git checkout -b <branch_name>

# Undo all unstaged/staged changes
git reset .

# Undo the last commit, but preserve the changes (you can see them in staged changes)
git reset --soft HEAD~1
```

## C++
```
// create min heap
priority_queue< int, vector<int>, greater<int> > minHeap;

priority_queue<int> maxHeap;

// For each loop
for (int num : nums) {}

// Loop through map || unordered_map
for (auto [key, val] : hashMap) {
	cout << "Key: " << key << endl;
	cout << "Value: " << val << endl;
}

// A different way to loop through a map.
for (auto const& pair : hashMap) {
	cout << "Key: " << pair.first << endl;
	cout << "Value: " << pair.second << endl;
}

// Length of a number, casting to int because it will return a double
vector<int> nums = {1, 10, 100};
cout << int log10(nums[0]) + 1 << endl; // 1
cout << int log10(nums[1]) + 1 << endl; // 2
cout << int log10(nums[2]) + 1 << endl; // 3

// Creating a vector of vectors of size n that initializes the inner vectors with an empty string. ;
vector<vector<string>> prefixes(n, vector<string>(1,"")); // size of one was arbitrarily chosen

// Getting a string and splitting it based on the delimiter.
vector<string> split(string str, char delimiter) {
	stringstream ss(str);
	vector<string> ans;
	string token;
	
	while (getline(ss, token, delimiter)) {
		ans.push_back(token);
	}
	
	return ans;
}

// Converting an integer to binary
void convertToBinary(int n) {
	int biArr[32];
	
	for (int i = 0; i < 32; i++) {
		biArr[i] = n % 2;
		n = n /2;
	}
	
	// I suppose depending on what you want to do this could return something or do something else.
}

void decToBinary(int n)
{
    // Size of an integer is assumed to be 32 bits
    for (int i = 31; i >= 0; i--) {
        int k = n >> i;
        if (k & 1)
            cout << "1";
        else
            cout << "0";
    }
}

// Casting int to long long
long long tmp = (long long)(nums[i] - nums[j]) * nums[k];

// Checking if a number is a power of two (or zero)
(n & (n-1)) == 0;
n     = 0100 (4)
n - 1 = 0011 (3)
--------------- &
result = 0000
// Bitwise AND (&) keeps a bit set to 1 only if it is 1 in both numbers.

// Using sort(arr.being, arr.end(), compareSecond) on a 2D array will sort the array by the second element, given that the array only has two elements in it.
compareSecond(vector<int>& a, vector<int> b) {
    return a[1] < b[1]>;
}

vector<vector<int>> myVector = {{1,2}, {2,3}, {3,4}, {1,3}};
sort(myVector.begin(), myVector.end(), compareSecond);

//result: { {1,2}, {2,3}, {1,3}, {3,4} }
```

## Vim
```
// Create a horizontal window
<C-w>S

// Reduce/Increase window height
<C-w>- // reduce
<C-w>+ // increase

// Exit terminal to get back into normal mode
<C-\><C-n>
```