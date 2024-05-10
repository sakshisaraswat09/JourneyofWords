#include <iostream>
#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> v1, v2, v3;
int a, b, c, d;
void matrix_input(vector<vector<int>> &v, int &rows, int &cols)
{
    cout << "Enter the number of rows and columns: ";
    cin >> rows >> cols;
    int t;
    for (int i = 0; i < rows; i++)
    {
        vector<int> r;
        for (int j = 0; j < cols; j++)
        {
            cout << "Enter the value of " << i << ", " << j << " element: ";
            cin >> t;
            r.push_back(t);
        }
        v.push_back(r);
    }
}
void matrix_print(vector<vector<int>> &v, int &rows, int &cols)
{
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            cout << v[i][j] << " ";
        }
        cout << "\n";
    }
}

int mcc_ras(vector<vector<int>> &v3)
{
    // multiplication compatibility check & resize ans matrix
    if (b != c)
    {
        cout << "Compatibility Error: Matrix are not compatible for multiplication.";
        return 0;
    }
    v3.resize(a, vector<int>(d));
    return 1;
}
void matrix_multiplication(vector<vector<int>> &v1, vector<vector<int>> &v2, vector<vector<int>> &v3)
{
    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < d; j++)
        {
            for (int k = 0; k < b; k++)
            {
                v3[i][j] = v3[i][j] + v1[i][k] * v2[k][j];
            }
        }
    }
}
int main()
{
    cout << "--------------Welcome To Matrix Multiplication Program--------------\nSakshi Saraswat | IT-A | 03520803121\n";
    matrix_input(v1, a, b);
    matrix_input(v2, c, d);
    cout << "Matrix 1: \n";
    matrix_print(v1, a, b);
    cout << "Matrix 2: \n";
    matrix_print(v2, c, d);
    if (mcc_ras(v3))
    {
        matrix_multiplication(v1, v2, v3);
        cout << "Matrix 1 multiplied by matrix 2 gives: \n";
        matrix_print(v3, a, d);
    }
    return 0;
}
