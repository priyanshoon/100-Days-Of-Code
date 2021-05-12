#include <iostream>
using namespace std;

int main() {
	int t;
	cin >> t;

	while(t--) {
		int n;
		cin >> n;
		int digit_sum = 0;
		while(n > 0) {
			int digit_num = n % 10;
			digit_sum = digit_num + digit_sum;
			n = n / 10;
		}
		cout << digit_sum << endl;
	}
	return 0;
}