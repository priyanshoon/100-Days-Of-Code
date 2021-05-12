#include <iostream>
using namespace std;

// C++ Strings

// "" ---> For String
// '' ---> For Chatacter

int main() {

	// string str = "Hello, World!\n";
	// Concatination in string

	// string str2 = "Hello, Priyanshu!";
	// string result = str + str2;
	// cout << result << endl;

	// string str = "Hello";
	// for(int i = 0; i < str.size(); i++) {
	// 	cout << str[i] << endl;
	// }

	// getline function

	// int t;
	// cin >> t;
	// cin.ignore();
	// while(t--) {
	// 	string s;
	// 	getline(cin, s);
	// 	cout << s << endl;
	// }

	// Reversing the string

	string str;
	cin >> str;
	string strReverse;
	for(int i = str.size() - 1; i >= 0; --i) {
		strReverse.push_back(str[i]);
	}

	if(str == strReverse) {
		cout << "The string is palindrome!" << endl;
	} else {
		cout << "The string is not palindrome!" << endl;
	}

	return 0;
}