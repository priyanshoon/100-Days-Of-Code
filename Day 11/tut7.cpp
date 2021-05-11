#include <iostream>
using namespace std;

// This is global variable
int y = 10;

int main() {
	{
		// This is Scope variables
		int x = 4;
	}
	return 0;
}

// Scope variables ko hum ek particular {} pe use kar sakte hai uske bahar nhi
// Global variables ko hum apne program me kahi bhi use kar sakte hai
