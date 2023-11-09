---
outline: 2
---

# 周五随堂测试汇总

## 测试1 单词加密解析

输入一个英文单词（由六个小写英文字母组成），按照下列过程将该单词加密：先将英文单词中的小写字母转换为对应的大写字母，再将该大写字母的ASCII码对10整除后取其余数，从而得到一个六位整数密码。

输入在一行中给出1个由六个小写英文字母组成的英文单词。按照规则转换成一个六位整数密码，并输出转换的过程。

**输入样例**
```
friday
```
**输出样例**
```
f->F->0
r->R->2
i->I->3
d->D->8
a->A->5
y->Y->9
```

### 我的解答

用时：6min58s / 15min

本题考察字符的大小写转换和字符的存储本质（ASCII码）。

```cpp
#include <iostream>
#include <string>

using namespace std;
int main()
{
    string theString;
    cin >> theString;
    for(int i = 0; i < 6; i++){
        cout << theString[i] << "->" << (char)(theString[i] - ('a' - 'A')) << "->" << (theString[i] - ('a' - 'A'))%10 << endl;
    }
    return 0;
}
```


## 测试2 出勤率几何

### 题目描述

本题目要求读入2个整数A和B，其中A是应到人数，B是实到人数，请编程输出其出勤率（百分比形式，保留一位小数）。

在一行中给出2个不超过1000的非负整数A和B，以空格分隔，你可以假定这两个数据都是合理数据。在一行中以\出勤率=B/A=百分比%\的形式输出出勤率（保留一位小数，除汉字外均为西文字符）。

**输入样例**
```
76 71
```
**输出样例**
```
\出勤率=71/76=93.4%\
```

### 我的解答


本题比较基础，考察 `printf` 的使用。

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int A, B;
    cin >> A >> B;
    double thePercent = (double)B/A * 100;
    printf("\\出勤率=%d/%d=%.1lf%%\\", B, A, thePercent);
    return 0;
}
```

## 测试3 实数四舍五入后的相加运算

本题目实现实数保留两位小数的四舍五入存储后，再相加。

输入两个双精度实数A，B。输出第一行输出A+B的真实值（保留两位小数）第二行输出A、B进行四舍五入后再相加后的值（保留两位小数）。

为了保证输出的美观，每个实数占10位，A为左对齐，B为右对齐，A+B的结果为左对齐。

**输入样例**
```
12.345,4.896
```
**输出样例**
```
12.345000 +  4.896000=17.24     
12.350000 +  4.900000=17.25  
```

### 我的解答

本题考察输出的细节，包括左对齐、右对齐，四舍五入的控制（先乘以倍数，截断，再除下来），注意第二行输出要改变等号前面的变量。

```cpp
#define LL unsigned long long
#include<math.h>

#include<iostream>
using namespace std;

int main(){
    double A, B;
    scanf("%lf,%lf", &A, &B);
    printf("%-10.6lf+%10.6lf=%-10.2lf\n", A, B, A+B);
    printf("%-10.6lf+%10.6lf=%-10.2lf", round(A*100)/100, round(B*100)/100, double(round(A*100)+round(B*100))/100);
    return 0;
}
```



## 测试4 数字特征值

### 题目描述

对数字求特征值是常用的编码算法，奇偶特征是一种简单的特征值。对于一个整数，从个位开始对每一位数字编号，个位是1号，十位是2号，以此类推。这个整数在第n位上的数字记作x，如果x和n的奇偶性相同，则记下一个1，否则记下一个0。按照整数的顺序把对应位的表示奇偶性的0和1都记录下来，就形成了一个二进制数字。比如，对于342315，这个二进制数字就是001101，输出其十进制值为13。

输入一个非负整数，整数的范围是[0,1000000]；输出一个整数，表示计算结果。

**输入样例**

```
342315
```

**输出样例**

```
13
```

### 我的解答

用时：12min / 15min

判断**某一位的奇偶性**和**所处的位数的奇偶性**是否相等，若相等则输出1，否则输出0，获得类二进制串后，根据二进制转为十进制的方法就可获得答案，这里将二进制转十进制融入到了循环中。

```cpp
#include <bits/stdc++.h>
#include<string>
#include <algorithm>

#define LL unsigned long long
#define ULL unsigned long long
using namespace std;

int main(){
    LL num;
    cin >> num;
    LL copy = num;
    LL length = 0;
    while(copy){
        copy/=10;
        length++;
    }
    copy = num;
    LL ans = 0;
    LL tmp = 1;
    for(int x = 1;x <= length; x ++){
        //cout <<x%2 << " " << copy%10%2<< endl;
        if(x%2==copy%10%2){
            for(int i = 1; i < x; i ++){ // 二进制转十进制
                tmp*=2;
                //cout << tmp;
            }
            ans += tmp;
            tmp = 1;
        }
        copy /= 10;
    }
    cout << ans;
    return 0;
}
```

