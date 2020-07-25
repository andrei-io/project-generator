#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    vector<string> msg{"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};
    int n;
    cin >> n;
    for (const string &word : msg) {
        cout << word << " ";
    }
    cout << endl;
    for (int i = 0; i < 5; i++)
        cout << i << " ";
    cout << endl;
}