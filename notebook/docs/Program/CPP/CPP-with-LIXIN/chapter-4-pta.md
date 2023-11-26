---
outline: 2
---

# PTA作业-循环

## LX410 递归求1的个数

### 题目描述

统计非负整数二进制展开中数位1的总数。如整数65 的二进制展开为 00000000 00000000 00000000 00100001，数位1的总数为2。

要求使用递归函数完成，函数接口定义如下：

```cpp
int count_one(unsigned long long n);
裁判测试程序样例：
#include<iostream>
using namespace std;
int count_one(unsigned long long n);
int main()
{
    unsigned long long n;
    cin>>n;
    cout<<count_one(n)<<endl;
    return 0;
}
/* 请在这里填写答案 */
```

输入一个整数n , 题目保证n 不大于$10^{18}$输出格式；输出该整数二进制展开中数位1的总数。

**样例输入**
```
441
```
**样例输出**
```
6
```

### 我的解答

```cpp
int count_one(unsigned long long n){
    if(n != 0){
        if(n%2)
            return count_one(n/2)+1;
        else
            return count_one(n/2);
    }
    else{
        return 0;
    }
}
```

## LX401 斐波那契数列

### 题目描述

斐波那契数列第一项和第二项都是 1，此后各项满足：$F_n = F_{n-1}+F_{n-2}$。编写程序，输入整数 n，输出斐波那契数列第 n 项。

在一行中给出不超过90的整数n，在一行中输出斐波那契数列第 n 项。

**样例输入**
```
3
```
**样例输出**
```
2
```

**样例输入**
```
5
```
**样例输出**
```
5
```

### 我的解答

```cpp
#include<iostream>
using namespace std;

long long fbnq(long long n){
    long long n1 = 1;
    long long n2 = 1;
    long long tmp = 0;

    for(long long i = 3; i <= n; i++){
        tmp = n1;
        n1 += n2;
        n2 = tmp;
    }
    if(n>2){
        return n1;
    }
    else if( n==2 ){
        return 2;
    }
    else if( n==1 ){
        return 1;
    }
    else{
        return 0;
    }
}

int main(){
    long long n;
    cin >> n;
    cout << fbnq(n);
    return 0;
}
```

## LX402 区间异或

### 题目描述

计算l,l+1,l+2,...r的异或和，输入包括两个整数l和r，空格分隔，$1≤l<r≤10^{18}$输出题目描述中的异或和

**样例输入**
```
3 6
```
**样例输出**
```
4
```


### 我的解答

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll sum(ll n)//[1,n]的区间异或
{
    if(n%4==0)return n;
    else if(n%4==1)return 1;
    else if(n%4==2)return n+1;
    else if(n%4==3)return 0;
    else return 0;
 
}
int main()
{
     ll l,r;
    cin>>l>>r;
    ll ans=sum(r)^sum(l-1);//[1,r]区间异或^[1,l-1]的区间异或等于[l,r]的区间异或
    cout<<ans<<endl;
    return 0;
}
```

## LX403 求阶乘

### 题目描述

求n的阶乘，输入一个不超过20的非负数n，输出n的阶乘。

**样例输入**
```
5
```
**样例输出**
```
5!=120
```


### 我的解答

```cpp
#define LL unsigned long long

#include<iostream>
using namespace std;

LL jc(LL n){
    LL res = 1;
    for(int i = 1; i <= n; i ++){
        res *= i;
    }
    return res;
}

int main(){
    LL n;
    cin >> n;
    printf("%lld!=%lld", n, jc(n));
    return 0;
}
```

## LX404 库洛牌

### 题目描述

昕哥买到库洛牌后，要将库洛牌分发给小伙伴们。第一天，小伙伴收到 1 张库洛牌；之后两天，（第二天和第三天），每天收到 2 张库洛牌；之后三天（第四 五 六 天），每天收到 3 张库洛牌；之后四天（第七 八 九 十 天），每天收到 4 张库洛牌……；这种发牌方式会一直延续下去。当连续N天收到N张库洛牌后，小伙伴会在之后的N+1天里，每天收到N+1张库洛牌。

输入一个正整数n，表示发牌的天数，$n≤10^{8}$。输出只包含一行一个正整数，即小伙伴收到的总扑克牌数



**样例输入**
```
6
```
**样例输出**
```
14
```


### 我的解答

```cpp
#define LL unsigned long long

#include<iostream>
using namespace std;

int main(){
    LL n;
    cin >> n;

    LL card = 0;
    LL times = 1;
    LL nl = 1;
    while(nl <= n){
        for(LL i = 0; i < times && nl <=n; i++){
            nl ++;
            card += times;
        }
        times += 1;
    }
    cout << card;
    return 0;

}
```

## LX405 解方程

### 题目描述

大家都知道你是一个数学小天才，那么给你a，b，c，请你用程序计算一下是否存在小于50的正整数x，y，满足ax+by=c。

输入三个整数a，b，c以空格分隔，a,b,c都为整数，绝对值小于$10^{9}$ ，并且题目保障a和b都不等于0。

输出格式
如果存在则输出x+y，否则输出None
可能存在多组解，按照y从小到大的顺序多行输出，每行一个结果。

**样例输入**
```
2 2 4
```
**样例输出**
```
2
```


### 我的解答

```cpp
#define LL unsigned long long

#include<iostream>
using namespace std;

int main(){
    LL a, b, c;
    LL flag = 0;
    cin >> a >> b >> c;
    for(LL i =1 ; i < 50; i++){
        for(LL j = 1; j < 50; j++){
            if(b*i + a*j == c){
                cout << i + j << endl;
                flag = 1;
            }
        }
    }
    if(!flag){
        cout << "None";
    }
    return 0;

}
```

## LX406 a+b+c+d=?

### 题目描述

This is a very simple problem! Your only job is to calculate a+b+c+d.

In the first line, there is a single integer T(T≤200), which indicates the number of test cases.
In the next T lines, each line contains four integers a,b,c and d($−2^{29}$≤a,b,c,d≤$2^{29}$).

For each test case, output one line with the answer to a+b+c+d.

**样例输入**
```
1
1 2 3 4
```
**样例输出**
```
10
```


### 我的解答

```cpp
#define LL long long

#include<iostream>
using namespace std;

int main(){
    LL n;
    cin >> n;
    LL a, b, c, d;
    for(int i = 0; i < n; i++){
        cin >> a >> b >> c >> d;
        cout << a + b + c + d << endl;
    }
    return 0;
}
```

## LX407 自守数

### 题目描述

所谓自守数(也称守形数)，是指其平方数的低位部分恰为该数本身的自然数。例如：25^2=625，其中25等于625的低位部分，因此25是自守数。（注：0 和 1 也算自守数。）

输入一个正整数a，a≤10000，输出true或false

**样例输入**
```
25
```
**样例输出**
```
true
```


### 我的解答

```cpp
#include<iostream>
#define LL long long

using namespace std;

int main(){
    LL a;
    cin >> a;
    if(a==0){
        cout << "true";
    }
    else if(a*a%a==0){
        LL tmp = a;
        LL length = 1;
        while(tmp){
            tmp /= 10;
            length *= 10;
        }
        if(a*a % length == a){
            cout << "true";
        }
        else{
            cout << "false";
        }
    }
    else{
        cout << "false";
    }
    return 0;

}
```

## LX408 水仙花数

### 题目描述

水仙花数是指一个N位正整数（N>=3），它的每个位上的数字的N次方之和等于它本身。例 如：$153=1^3+5^3+3^3$
  。判断一个数是否为水仙花数。

输入一个正整数n（$10^2<n<10^9$），输出true或false

**样例输入**
```
153
```
**样例输出**
```
true
```


### 我的解答

```cpp
#include<iostream>
#define LL long long

using namespace std;

int main(){
    LL n;
    cin >> n;
    LL tmp = n;
    LL N = 0;
    while(tmp){
        tmp /= 10;
        N ++;
    }
    tmp = n;
    LL tmp_sum = 0;
    LL tmp_addon;
    while(tmp){
        tmp_addon = tmp %10;
        tmp /= 10;
        LL tmp_addon_basis = 1;
        for(int i = 0; i < N; i++){
            tmp_addon_basis *= tmp_addon;

        }
        tmp_sum += tmp_addon_basis;
    }
    if(tmp_sum == n){
        cout << "true";
    }
    else{
        cout << "false";
    }
    return 0;

}

```

## LX409 替换加密

### 题目描述

本题要求编写程序，将英文字母替换加密。为了防止信息被别人轻易窃取，需要把电码明文通过加密方式变换成为密文。变换规则是：将明文中的所有英文字母替换为字母表中的后一个字母，同时将小写字母转换为大写字母，大写字母转换为小写字母。例如，字母a->B、b->C、…、z->A、A->b、B->c、…、Z->a。输入一行字符，将其中的英文字母按照以上规则转换后输出，其他字符按原样输出。

要求使用以下语法形式：

```cpp
for(auto 变量 : 容器)
```

输入一行字符，其中可能包括空格，长度不超过100。将输入的一行字符中的所有英文字母替换为字母表中的后一个字母，同时将小写字母转换为大写字母，大写字母转换为小写字母后输出，其他字符按原样输出。

**样例输入**
```
Reold  Z123?
```
**样例输出**
```
sFPME  a123?
```


### 我的解答

```cpp
#include<iostream>
#include <typeinfo>

#define LL long long

using namespace std;

char N_n(char c){
    if(c >= 'a'){
        return (c-'a'+1)%26+'A';
    }
    else{
        return (c-'A'+1)%26+'a';
    }
}

int main(){
    string s;
    getline(cin, s);
    string result = "";
    for(auto u:s){
        if((u >= 'A' && u <= 'Z') || (u >= 'a' && u <= 'z')){
            result += N_n(u);
        }
        else{
            result += u;
        }
    }
    cout << result;
    return 0;
}
```

## LX411 若干行

### 题目描述

输入若干行，每行输入两个绝对值不大于100的整数，求这两个整数的和、差、乘积中不超过100的最大数。

每行两个整数，空格分隔，绝对值不大于100。

**样例输入**
```
3 9
-5 15
22 7
```
**样例输出**
```
27
20
29
```


### 我的解答

```cpp
#include<iostream>
#include <typeinfo>

#define LL long long

using namespace std;

int main(){
    LL a, b;
    while(cin >> a >> b){
        cout << max(a+b<=100?a+b:-100, max(a>b?(a-b<=100?a-b:-100):(b-a<=100?b-a:-100), a*b<=100?a*b:-100))<<endl;
    }
    return 0;
}
```

## LX412 哥德巴赫猜想

### 题目描述

数学领域著名的“哥德巴赫猜想”的大致意思是：任何一个大于2的偶数总能表示为两个素数之和。比如：24=5+19，其中5和19都是素数。请设计一个程序，验证20亿以内的偶数都可以分解成两个素数之和。

在一行中给出一个(2,2 000 000 000]范围内的偶数N。

在一行中按照格式“N = p + q”输出N的素数分解，其中p ≤ q均为素数。又因为这样的分解不唯一（例如24还可以分解为7+17），要求必须输出所有解中p最小的解。

**样例输入**
```
18
```
**样例输出**
```
18 = 5 + 13
```

建议自定义如下函数，判断n是否为素数

```cpp
bool prime(int n);
```

### 题解

::: warning 非原创
这道题解是我在网上找的，当时对素数的概念有点遗忘，理解了这个题解就回忆起来了。
:::

```cpp
#include<stdio.h>
#include<math.h>
int sushu(int x);               //声明判断是否是素数的函数
int main(){
    int n,p;
    scanf("%d",&n);
    for(p=2;p<=n;p++){
        if(sushu(p) && sushu(n-p)){
            printf("%d = %d + %d",n,p,n-p);
            break;
        }
    }
    return 0;
}

int sushu(int x){
    int flag=1,i,m;
    if((x==1) || (x!=2) && (x%2==0)){           //排除1和除2之外的所有偶数
        flag=0;
    }
    else{
        m=sqrt(x);
        for(i=2;i<=m;i++){                      //判断所有奇数
            if(x%i==0){
                flag=0;
                break;
            }
        }
    }
    return flag;
}
```

## LX413 考拉慈猜想

### 题目描述

考拉兹猜想（Collatz conjecture）又称奇偶归一猜想，是指对于每一个正整数，如果它是奇数，则对它乘3再加1,如果它是偶数，则对它除以2。

如此循环，最终都能得到1。编写一个程序，输入一个正整数，打印其考拉兹序列。

输入一个大于1的正整数n，n<10^9，输出以逗号分隔的考拉兹序列。

**样例输入**
```
5
```
**样例输出**
```
16,8,4,2,1
```

### 我的解答


```cpp
#include<iostream>
#include <typeinfo>

#define LL long long

using namespace std;

int main(){
    LL n;
    cin >> n;
    while(n!=1){
        if(n%2 == 0){
            n /= 2;
        }
        else{
            n = n*3+1;
        }
        if(n==1){
            cout << n;
            break;
        }
        cout << n << ",";
    }
    return 0;
}

```

## LX414 计算平均值

### 题目描述

现在为若干组整数分别计算平均值。

已知这些整数的绝对值都小于100，每组整数的数量不少于1个，不大于20个。

首先输入K（不小于2，不大于20）。

每一行输入一组数据（至少有一组数据），每组至少有一个数据，在有多个数据时，两个数据之间有1到3个空格。

最后一行输入100，标志输入的结束。

对于每一组数据，输出其前K个数据的均值，如果该组数据个数少于K时，则输出该组所有数据的均值。输出的均值只输出整数部分，直接忽略小数部分。

**样例输入**
```
3
10 30 20 40
-10 17 10
10 9
100
```
**样例输出**
```
20
5
9
```

### 我的解答


```cpp
#include<iostream>
#include <typeinfo>

#define LL long long

using namespace std;

int main(){
    LL K;
    cin >> K;

    LL count = 1;
    LL first, sum=0;
    cin >> first;
    char sign = getchar();

    while(first != 100){

        if(sign == '\n'){
            cout << first << endl;
        }
        else{
            sum += first;

            LL tmp_first;
            if(K >=2){
                cin >> tmp_first;
                sum += tmp_first;
            }

            count = 2;
            sign = getchar();
            while(sign != '\n'){
                LL tmp;
                cin >> tmp;
                count ++;
                if(count <= K){
                    sum += tmp;
                }
                else{
                    count = K;
                }
                sign = getchar();
            }
            cout << sum/count << endl;
        }
        cin >> first;
        sign = getchar();
        sum = 0;
    }
    return 0;
}
```

## LX415 星号三角形

### 题目描述

从键盘输入一个整数n，然后输出一个由星号“*”组成的n行的三角形。

输入一个小于10的正整数

**样例输入**
```
5
```
**样例输出**
```
    *
   ***
  *****
 *******
*********
```

### 我的解答


```cpp
#include<iostream>
#include <typeinfo>

#define LL long long

using namespace std;

int main(){
    int n;
    cin >> n;

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n-i-1; j++){
            cout << ' ' ;
        }
        for(int j = 0; j < i*2+1; j++){
            cout << '*' ;
        }
        cout << endl;
    }
}
```

## LX416 圆周率山

### 题目描述

为了参加学校的社团风采展，怡山小学数学组的同学们决定画一座圆周率山，以宣传圆周率。

已知圆周率为：3.

1415926535 8979323846 2643383279 5028841971 6939937510

5820974944 5923078164 0628620899 8628034825 3421170679

8214808651 3282306647 0938446095 5058223172 5359408128

4811174502 8410270193 8521105559 6446229489 5493038196

输入山的高度，为一个不超过10的正整数。

输出以上尖下宽，左右对称的三角形形式，给出圆周率的前若干位（不含小数点）。注意：每行均以数字结尾，即数字右边无空格。

**样例输入**
```
4
```
**样例输出**
```
   3
  141
 59265
3589793
```

### 我的解答


```cpp
#include<iostream>
#include <typeinfo>

#define LL long long

using namespace std;

int main(){
    char a[] = "314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196";
    int pos = 0;
    int n;
    cin >> n;

    for(int i = 0; i < n; i++){
        for(int j = 0; j < n-i-1; j++){
            cout << ' ' ;
        }
        for(int j = 0; j < i*2+1; j++){
            cout << a[pos++] ;
        }
        cout << endl;
    }
}
```