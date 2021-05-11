#include <iostream>
using namespace std;

int main() {
	int a = 2;
	int b = 3;

	// 0 = False
	// 1 = True

	// cout << (a != b);

	// && is use when we want both statement true
	// || is use when we want only one statement true

	int c = 5;

	cout << ((b < a) || (b > c));

	return 0;
}