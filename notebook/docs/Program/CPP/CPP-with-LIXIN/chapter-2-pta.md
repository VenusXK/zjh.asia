# PTA作业-程序设计基础

[[TOC]]

## LX205 优秀率

2022年有m个人参加了C++程序设计这门课程的考试，其中n个人的成绩在90分以上，请计算优秀率（n/m）。


这道题考察的 `%%` 的输出，同时考察数据类型转换。

```cpp
#include<iostream>
#include<math.h>
using namespace std;

int main(){
    int m;
    int n;
    cin >> m >> n;
    cout.precision(2);
    printf("%.2f%%", 100*(((double)(n))/((double)m)));
    return 0;
}
```

## LX206 N进制转十进制

给定一个三位的N进制数值，每个数位上的数值都符合N进制的要求，求其对应的十进制数值。

$2*9^2+5*9^1+7*9^0=2*10^2+1*10^1+4*10^0$

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int number;
    int scale;
    cin >> number >> scale;

    int n = 0;
    int res = 0;
    while(number){
        int tmp = number % 10;
        for(int j = 0; j < n; j++){
            tmp = tmp * scale;
        }
        res += tmp;
        n++;
        number = number / 10;
    }
    cout << res;
    return 0;
}
```

## LX208 十进制转N进制

给定一个三位的十进制数，转换为N进制数。

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int theNumber;
    int targetScale;
    cin >> theNumber >> targetScale;

    int circle = 0;
    int res = 0;
    while(theNumber){
        int tmp = theNumber % targetScale;
        for(int i = 0; i < circle; i ++){
            tmp = tmp * 10;
        }
        res = res + tmp;
        theNumber = theNumber / targetScale;
        circle ++;
    }
    cout << res;
    return 0;
}
```

## LX209 纯小数的二进制

输入一个纯小数 `f1`，将其转换为具有5位的二进制形式，并求这个二进制数所表示的十进制数 `f2` 与 `f1` 的精度差距。

$0.570795$ 转换为二进制为 $0.10010$，它代表的十进制数为 $1*2^{-1}+1*2^{-4}=0.5625$，最终 $0.570795-0.5625 \approx 0.0083$

::: warning 涉及AI
这道题我用自己的程序实现总有一个测试点过不去，就调用的ChatGPT，引导式生成了答案。
:::

```cpp
#include <iostream>
#include<bits/stdc++.h>
using namespace std;

string convertToBinary(double f1) {
    string binaryRepresentation = "0.";
    for(int i = 0; i < 5; ++i) {
        f1 *= 2;
        if(f1 >= 1) {
            binaryRepresentation += '1';
            f1 -= 1;
        } else {
            binaryRepresentation += '0';
        }
    }
    return binaryRepresentation;
}

double binaryToDecimal(string binary) {
    double decimal = 0.0;
    double factor = 0.5;

    for(size_t i = 2; i < binary.length(); ++i) {
        if(binary[i] == '1') {
            decimal += factor;
        }
        factor *= 0.5;
    }

    return decimal;
}

int main() {
    double f1;
    cin >> f1;

    string binary = convertToBinary(f1);

    double f2 = binaryToDecimal(binary);
    printf("%.4lf", fabs(f1 - f2));

    return 0;
}

```


## LX211 浮点数比较

输入三个浮点数a, b, c，判定a-b和c是否相等。a,b,c的精度均为10^-4。

```cpp
#include<iostream>
#include<math.h>
using namespace std;

int main(){
    double a, b, c;
    scanf("%lf , %lf, %lf", &a, &b, &c);
    if(fabs(a - b  - c) < 0.00001){
        cout << "true";
    }
    else{
        cout << "false";
    }
    return 0;
}
```

## LX212 循环加密

将一个大写字符 `c` 移动 n 个单位，就可以得到一个新字符，形成了加密。如果移动后超出了大写字母的表示范围，将重新返回到 `A` 或 `Z`，形成循环。

```cpp
#include<iostream>
#include<math.h>
using namespace std;

int main(){
    char theChar;
    int goThrough;
    cin >> theChar >> goThrough;
    char theResult = theChar + goThrough;
    while(theResult < 'A'){
        theResult = 'Z' -  'A' + theResult + 1;
    }
    while(theResult > 'Z'){
        theResult = 'A' + theResult - 'Z' - 1;
    }
    cout << theResult;
    return 0;
}
```

## LX213 16->10进制转换

十六进制中，用 `A-F` 表示 10-15。给定一个三位的十六进制，每个数位上的数值都大于 9，即全部为大写字母，求其对应的十进制数值。

::: warning 涉及AI
时间原因，这道题直接调用的ChatGPT，生成的答案比较巧妙。
:::


```cpp
#include <iostream>
#include <string>
#include <cmath>

int hexToDec(std::string hex) {
    int decimal = 0;
    int power = 0;
    for (int i = hex.length() - 1; i >= 0; --i) {
        char c = hex[i];
        int digit;
        if (c >= '0' && c <= '9') {
            digit = c - '0';
        } else if (c >= 'A' && c <= 'F') {
            digit = c - 'A' + 10;
        } else {
            // 错误：不合法的十六进制字符
            return -1;
        }
        decimal += digit * pow(16, power);
        ++power;
    }
    return decimal;
}

int main() {
    std::string hex;
    std::cin >> hex;

    int decimal = hexToDec(hex);
    std::cout << decimal << std::endl;

    return 0;
}
```

## LX216 猴子吃桃

一只猴子在树上摘了若干个桃，当即吃了 `x%`，觉得不过瘾，又多吃了一个；第二天它吃了剩下桃子的 `x%` 加一个；第三天它又吃了剩下桃子的 `x%` 加一个，此时，只剩下一个桃子。请编程求解：猴子第一天从树上摘得多少个桃子？

```cpp
#include <iostream>
#include <iomanip>
#include<math.h>
using namespace std;

int main() {
    int x;
    cin >> x;
    int theInit = 1;
    for(int i = 0; i < 3; i++){
        theInit = (theInit + 1) * 100 / (100 - x);
    }
    cout << theInit;
    return 0;
}
```

## LX218 复制图案

输入一个图案，将其原样输出。


```cpp
//     ...........               #...#          #...#
//     ##*#####                 #.#.#          #.#.#
// ###*******####             #.#.#          #.#.#
// ...#***.****.*##....          #...#          #...#
#include <iostream>
#include <string>

using namespace std;
int main()
{
    string str[4];
    for(int i = 0; i < 4; i ++){
        getline(cin, str[i]);
        cout << str[i] << endl;
    }
    return 0;
}
```

## LX219 字符串和数字

将输入的数字和字符串，按照字符串和数字的顺序进行输出。


```cpp
// 输入：
// 10000
// I love you
// 输出：
// I love you-9999
#include <iostream>
#include <string>
using namespace std;
int main()
{
    int n;
    cin >> n;
    cin.ignore();
    string s;
    getline(cin, s);
    cout << s << "-" << n - 1;
    return 0;
}
```

## LX220 时间流逝

输入`天`，`小时`，`分`，然后再给定一个流逝的分钟数，计算最后的时间。其中小时数用24小时表示。

```cpp
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int d, h, m;
    scanf("%d:%d:%d", &d, &h, &m);
    long int passed;
    cin >> passed;
    m += passed;
    h += m / 60;
    d += h / 24;
    cout << d << ":" << h%24 << ":" << m%60;
    return 0;
}
```

OR

```cpp
// 复杂实现，涉及字符串的切割
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int passed;
    string timeString;
    cin >> timeString >> passed;

    stringstream theStream(timeString);
    string tmp;
    long int arr[3], enu = 0;
    while(getline(theStream, tmp, ':')){

        //string to int
        istringstream iss(tmp);
        iss >> arr[enu];

        enu ++;
    }

    arr[2] += passed;
    arr[1] += arr[2]/60;
    arr[0] += arr[1]/24;

    cout << arr[0] <<":"<< arr[1]%24 <<":" << arr[2]%60;
    return 0;
}

```

## LX221 数学函数调用

利用库 `cmath` 中的相关函数，计算表达式 $\log_{10}{\left| \sin(x) - \cos(x/2) + \sqrt{x+168} \right|}$的值。

```cpp
#include<cmath>
#include<bits/stdc++.h>
using namespace std;
int main()
{
    double x;
    cin >> x;
    double theResult;
    theResult = log10(fabs(sin(x) - cos(x/2)+sqrt(x + 168)));
    printf("%.4f", theResult);
    return 0;
}
```