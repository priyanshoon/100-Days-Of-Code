#include <iostream>
using namespace std;

// if else statement in cpp

int main() {
	int a, b;
	cin >> a >> b;

	if (a == b){
		cout << "Both are same!";
	} else if(a > b) {
		cout << "First input is grater!";
	} else {
		cout << "Last input is grater";
	}

	return 0;
}