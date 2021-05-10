#include <iostream>
using namespace std;

int main() {
	int num1;
	int num2;

	cin >> num1 >> num2;

	if (num1 == num2) {
		cout << "Both numbers are same";
	} else if(num1 > num2) {
		cout << "Your first input is greater than your second input";
	} else {
		cout << "Your first input is less than your second input";
	}
}