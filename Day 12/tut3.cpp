#include <iostream>
using namespace std;

// Arrays in C++
// Multi-Dimensional 

int main() {
	int n, m;
	cin >> n >> m;
	int a[n][m];
	for(int i = 0; i < n; ++i) {
		for(int j = 0; j < m; ++j) {
			cin >> a[i][j];
		}
	}
	for(int i = 0; i < n; ++i) {
		for(int j = 0; j < m; ++j) {
			cout << a[i][j] << " ";
		}
		cout << endl;
	}
	return 0;
}