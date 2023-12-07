# PTA作业-指针


[[TOC]]


## LX601 调和平均

**题目描述**

函数hmean()用于计算整数x和y的调和平均数，结果应保存在指针r所指向的浮点数对象中。当x+y等于0时，函数返回0表示无法计算，否则返回1。数学上，两个数x和y的调和平均数 z = 2xy/(x+y) 。

函数定义接口：

```cpp
int hmean(const int x, const int y, float* r);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include <stdio.h>

int hmean(const int x, const int y, float* r);

int main()
{
    int x=0,y=0;
    scanf("%d %d",&x,&y);

    float r = 0;
    int b = hmean(x,y,&r);

    if (b)
        printf("hmean(%d,%d)=%.2f",x,y,r);
    else
        printf("Input error.");

    return 0;
}
//答案写在这里
```

**样例输入**

```
3 2
```

**样例输出**

```
hmean(3,2)=2.40
```

**我的解答**

这道题是指针基础题，注意运算时要类型转换。

```cpp
int hmean(const int x, const int y, float* r){
    if(x + y == 0){
        return 0;
    }
    else{
        *r = 2*(float)x*(float)y/((float)x+(float)y);
        return 1;
    }
}
```



## LX602 IPv4地址

**题目描述**

一个IPv4地址可用一个4字节的无符号整数来表示。下述setByte(ip,idx,v)函数负责将指针ip所指向的IP地址的第idx个字节修改为v，其中，idx取值0到3。请实现该函数，使得下述程序可以正常运行。

该程序通过4次调用该函数将一个ip地址设置为192.168.0.1，然后将整个ip地址按通常格式输出。

函数定义接口：

```cpp
void setByte(unsigned int* ip, int idx, unsigned char v);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include<iostream>
#include<cstdio>
using namespace std;

void setByte(unsigned int* ip, int idx, unsigned char v);
int main()
{
    unsigned int ip = 0;
    int val;
    for(int i=0;i<4;i++){
        cin>>val;
        setByte(&ip,i,val);
    }
    unsigned char* p = (unsigned char*)&ip;
    printf("%d.%d.%d.%d",p[0],p[1],p[2],p[3]);
    return 0;
}

//将答案写在这里
```

输入一行4个整数，空格分隔，每个数值属于0-255之间；输出ipv4地址。

**样例输入**

```
192 168 0 1
```

**样例输出**

```
192.168.0.1
```

**我的解答**

这道题考察的存储的字节数，int 型数据为 4 字节，char 型数据为 1 字节，指针加的 1 是指数据的宽度，因此需要将 int 型指针转为 char 型指针。

```cpp
void setByte(unsigned int* ip, int idx, unsigned char v){
    unsigned char* p = (unsigned char*)ip;
    *(p+idx) = v;
}
```


## LX603 创建二维数组

**题目描述**

通过函数，创建一个方阵，对角线上元素为A，然后依次展开为BCDE等。

函数定义接口：

```cpp
void build_matrix(int n,char a[N][N]);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include<iostream>
using namespace std;
#define N 10

void build_matrix(int n,char a[N][N]);

int main()
{
    int a;
    char m[N][N];
    cin>>a;
    build_matrix(a,m);
    for(int i=0;i<a;++i){
        for(int j=0;j<a;j++){
            cout<<m[i][j]<<' ';
        }
        cout<<endl;
    }
    return 0;
}

//将答案写在这里
```

输入一个整型n，$3<n<10$，输出一个方阵，对角线上元素为A，然后依次展开为BCDE等。字符之间用一个空格分隔。

**样例输入**

```
5
```

**样例输出**

```
A B C D E 
B A B C D 
C B A B C 
D C B A B 
E D C B A 
```

**我的解答**

这道题考察二维矩阵直接访问的方法，以及 char 类型的偏移。

```cpp
void build_matrix(int n,char a[N][N]){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            if(i == j){
                a[i][j] = 'A';
            }
            else{
                a[i][j] = j>i?'A'+j-i:'A'+i-j;
            }
        }
    }
}
```





## LX604 对角线置1

**题目描述**

将二维数组的对对角线元素设置为1，但函数的参数是以一维数组的形式给出。

函数定义接口：

```cpp
void setone(int n,int* p);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include<iostream>
using namespace std;
#define N 10

void setone(int n,int* p);

int main()
{
    int a;
    int m[N][N];
    cin>>a;
    for(int i=0;i<a;++i){
        for(int j=0;j<a;j++){
            cin>>m[i][j];
        }
    }
    setone(a,&m[0][0]);
    for(int i=0;i<a;++i){
        for(int j=0;j<a;j++){
            cout<<m[i][j]<<' ';
        }
        cout<<endl;
    }
    return 0;
}
//将答案写在这里
```

第一行给出一个整数n，$3<n<10$，接下来给出n行，每行n个数据，空格分隔。将对角线上的元素置位1，其他数位保持不变，输出结果为n行n列，数据直接用一个空格分隔。

**样例输入**

```
5
0 1 2 3 4
5 6 7 8 9
10 11 12 13 14
15 16 17 18 19
20 21 22 23 24
```

**样例输出**

```
1 1 2 3 4 
5 1 7 8 9 
10 11 1 13 14 
15 16 17 1 19 
20 21 22 23 1 
```

**我的解答**

注意这里为一维存储，数组行的个数是N而不是n。

```cpp
void setone(int n,int* p){
    for(int i = 0; i < n; i ++){
        for(int j = 0; j < n; j++){
            if(i == j){
                p[i*N+j] = 1;
            }
        }
    }
}
```


## LX605 逆置一维数组

**题目描述**

完成函数，以指针的方式，逆置一维数组。

首先输入一个正整数T，表示测试数据的组数，然后是T组测试数据。每组测试数据先输入数据个数n，然后输入n个整数。

函数定义接口：

```cpp
void reverse_arr(int n,int* a);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include <iostream>
using namespace std;
void reverse_arr(int n,int* a);
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n,i;
        cin >> n;
        int a[n];
        for (i=0;i<n;++i)
        {
            cin >> a[i];
        }
        reverse_arr(n,a);
        for (i=0;i<n;++i)
        {
            cout<<a[i]<<' ';
        }
        cout<<endl;
    }

    return 0;
}
//将答案写在这里
```

对于每组测试，在一行上输出逆置之后的结果。数据之间以一个空格分隔。

**样例输入**

```
2
4 1 2 5 3
5 4 3 5 1 2
```

**样例输出**

```
3 5 2 1 
2 1 5 3 4 
```

**我的解答**

注意不能直接 `a = b`，指针其实是局部变量，不能修改指向的地址，只能修改指向的地址的内容。若要修改指针指向的内容，需要二级指针。

```cpp
void reverse_arr(int n,int* a){
    int b[n];

    for(int i = 0, j = n-1; i < n; i++, j--){
        b[i] = a[j];
    }
    for(int i = 0; i < n; i++){
        a[i] = b[i];
    }
}
```




## LX606 指针数据交互

**题目描述**

完成函数，从键盘任意输入两个整数，用指针作函数参数，编程实现将其交换后再重新输出。

函数定义接口：

```cpp
void swap(int *x, int *y);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include<stdio.h>
void swap(int *x, int *y);

int main(){
    int a,b;
    scanf("%d %d",&a,&b);
    swap(&a,&b);
    printf("After swap:%d,%d",a,b);
    return 0;
}

//答案写在这里
```

从键盘输入两个整数，空格分隔。按输出样例的形式输出交换后的两个整数。

**样例输入**

```
11 22
```

**样例输出**

```
After swap:22,11
```

**我的解答**

这道题是指针基础题。

```cpp
void swap(int *x, int *y){
    int tmp = *x;
    *x = *y;
    *y = tmp;
}
```




## LX607 排序函数

**题目描述**

完成函数，将给定的n个数从小到大排序。

函数定义接口：

```cpp
void sort_arr(int n,int* a);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include <iostream>
#include <algorithm>

using namespace std;
void sort_arr(int n,int* a);

int main()
{
    int k;
    cin >> k;
    while (k--)
    {
        int n;
        cin >> n;
        int a[n];
        for (int i=0;i<n;++i)
        {
            cin >> a[i];
        }
        sort_arr(n,a);
        int i;
        for (i=0;i<n-1;++i)
        {
            cout << a[i] << " ";
        }
        cout << a[i] << endl;
    }

    return 0;
}
//答案写在这里
```

首先是一个整数K，表示有K组数据。
接下来是以回车分隔的K组数据，每组数据首先以一个整数N开头（$1<N<100$），表示该组数据中包含的整数个数，然后是以空格分隔的N个整数。

对每组数据按要求从小到大输出，组内整数之间隔一个空格，组与组之间以回车分隔。

**样例输入**

```
3
6 1 5 4 3 2 0
5 8 5 2 10 3
2 2 2
```

**样例输出**

```
0 1 2 3 4 5
2 3 5 8 10
2 2
```

**我的解答**

考察数组排序，这里使用的冒泡排序，复杂度较高，说明 `swap` 函数是对地址进行的操作。

```cpp
void sort_arr(int n,int* a){
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            if(a[i]<a[j])
                swap(a[i], a[j]);
        }
    }
}
```





## LX608 矩阵每行元素和

**题目描述**

完成函数，使用指针方式求一个给定的m×n矩阵各行元素之和。

函数定义接口：

```cpp
void row_sum(int m,int n,int a[N][N],int* res);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include <iostream>
using namespace std;
#define N 10

void row_sum(int m,int n,int a[N][N],int* res);
int main()
{
    int m,n;
    cin >> m >> n;
    int a[N][N];
    int b[m];
    for (int i=0;i<m;++i){
        for (int j=0;j<n;++j){
            cin >> a[i][j];
        }
    }
    row_sum(m,n,a,b);
    for (int i=0;i<m;++i){
        cout << b[i] << endl;
    }

    return 0;
}
```

输入第一行给出两个正整数m和n（1≤m,n≤6），再输入m行数据，每行n个整数，每个整数之间用空格分隔。输出m个整数，每行1个数。

**样例输入**

```
2 3
1 2 3
4 5 6
```

**样例输出**

```
6
15
```

**我的解答**

考察一维数组和二维数组的同时使用，简单题。

```cpp
void row_sum(int m,int n,int a[N][N],int* res){
    for(int i = 0; i < m; i++){
        res[i] = 0;
        for(int j = 0; j < n; j++){
            res[i] += a[i][j];
        }
    }
}
```





## LX609 空间内部结构

**题目描述**

无符号整数 v 由 4 个字节构成。请完成函数达成下述任务：

1. 从键盘读取一个整数，存入 `unsinged int v`；
2. 以 16 进制格式打印v的值；
3. 通过函数 `int2hexchar()`，将 v 转换为一个字符串。转换规则为：将v中的每个字节作为整数，转换为 16 进制，将第 0，第 1，第 2，第 3 个字节的 16 进制值依次添加到字符串中，空格分隔，并返回该字符串。

函数定义接口：

```cpp
string int2hexchar(unsigned int* v);
```

请实现该函数，使得下述程序可以正确运行。

裁判测试程序样例：

```cpp
#include<iostream>
#include<string>
#include<sstream>
using namespace std;
string int2hexchar(unsigned int* v);
int main()
{
    unsigned int v;
    cin >> v;
    cout << hex << v << endl;
    cout<<int2hexchar(&v)<<endl;

    return 0;
}
//答案写到这里
```

输入一个无符号正整数 v，输出按题目描述要求

**样例输入**

```
12345678
```

**样例输出**

```
bc614e
4e 61 bc 0
```

::: tip 提示

将一个 char 类型数据转换为 16 进制并存放到 string 中，方法如下：

```cpp
#include<iostream>
#include<sstream>
using namespace std;
int main()
{
    char a=97;
    ostringstream oss;
    oss<<hex<<(int)a;
    cout<<oss.str()<<endl;
    return 0;
}
```
:::

**我的解答**

考察字符宽度，unsigned int 型为 4 字节，强制类型转换后会补充长度，截断字符串即可。

```cpp
string int2hexchar(unsigned int* v){
    string res = "";
    char * p = (char *) v;
    for(int i = 0; i < 4; i++){
        ostringstream oss;
        oss << hex << (unsigned int)(*(p+i));
        string tmp_str = oss.str();
        //  显示ffffffbc说明自动补位了，取后两位
        if(tmp_str.length()>1){
            res += tmp_str[tmp_str.length()-2];
            res += tmp_str[tmp_str.length()-1];
        }
        else{
            res += tmp_str[tmp_str.length()-1];
        }

        if(i!=3){
            res += " ";
        }
    }
    return res;
}
```