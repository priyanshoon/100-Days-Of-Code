// int, long, char, float, and double
#include <iostream>
#include <iomanip> // imported setprecision from this include
using namespace std;

int main() {
	int a;
	long int b;
	char c;
	float d;
	double e;

	cin >> a >> b >> c >> d >> e;

	cout << a << endl << b << endl << c << endl;
	cout << fixed << setprecision(3) << d <<"\n";
    cout << fixed << setprecision(9) << e <<"\n";

	return 0;
}


