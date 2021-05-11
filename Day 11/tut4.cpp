#include<iostream>
using namespace std;

int main() {

	// Data types rough range

	// -10^9 < int < 10^9
	// -10^12 < long int < 10^12
	// -10^18 < long long int < 10^18

	// Overflow Examaple 

	int a = 10000; // This will not overflow
	// int b = 1000000000000;  // This will overflow 
	
	// For more information check the range again

	// In int b error comes overflow and to fix it we need to use long int

	long int b = 1000000000000;

	cout << a << " " << b; 
	return 0;
}