#include <iostream>
using namespace std;

// Break and Continue

int main() {
	for(int i = 0; i < 100; i++) {
		if (i == 8) {
			break;
		}
		cout << i << endl;
	}
	return 0;
}
