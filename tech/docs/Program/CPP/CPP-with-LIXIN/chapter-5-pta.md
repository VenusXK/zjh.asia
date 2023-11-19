---
outline: 2
---

# PTA作业-数组与字符串

## LX507 光棍串

### 题目描述

据说2011年11月11日是百年光棍节。这个日期写成字符串是“20111111”，有6个1连续出现，小明把这样的字符串（有6个1连续出现，但可以在1之间有空格间隔）叫做光棍串，即“2011 11 11”也是光棍串。

完成函数，判断输入是否为满足条件的光棍串。

函数定义接口：

```cpp
bool issingle(string s);
```

裁判测试程序样例：
在这里给出函数被调用进行测试的例子。例如：

```cpp
#include <bits/stdc++.h>
using namespace std;
bool issingle(string s);
int main() 
{
    string s;
    int n;
    cin>>n;
    cin.get();
    while(n--)
    {
        getline(cin,s);
        if(issingle(s))
            cout<<"Yes"<<endl;
        else
            cout<<"No"<<endl;
    }
    return 0;
}
```

输入数据的第一行为一个正整数T，表示测试数据的组数。然后是T组测试数据，每组测试输入1个字符串S（其中只包含空格与数字字符，长度不超过50个字符）

对于每组测试，若S是光棍串，则输出“Yes”，否则输出“No”。

**样例输入**

```
2
2011111
2011 11  11
```

**样例输出**

```
No
Yes
```

### 我的解答

这道题比较容易，判断是否为1或空格，从而判断是否计数，这里不做更多解释。

```cpp
bool issingle(string s){
    int count = 0;
    for(auto c : s){
        if(c == '1' || c == ' '){
            if(c == '1'){
                count ++;
            }
        }
        else{
            count = 0;
        }
    }
    return count >= 6;
}
```

## LX501 逆序输出数组

### 题目描述

从键盘输入n个整数存入一维数组中，然后将数组元素的值逆序输出。第一行输入整数个数n；第二行输入n个整数，数据之间以空格隔开。


**样例输入**

```
10
11 22 99 33 88 76 56 45 89 10
```

**样例输出**

```
10 89 45 56 76 88 33 99 22 11 
```

### 我的解答

这道题考察循环遍历数组的两种方式：正序和逆序，属于基本题。

```cpp
#include <bits/stdc++.h>
using namespace std;

bool issingle(string s);

int main(){
    int n;
    cin >> n;
    int arr[n];
    for(int i = 0; i < n; i++){
        cin >> arr[i];
    }
    for(int j = n-1; j >=0; j--){
        cout << arr[j] << " ";
    }
    return 0;
}
```

## LX502 数组求和

### 题目描述

有一个10个单元的整型数组，输入10个整数，数组下标为奇数的单元加2，下标偶数的单元乘2，最后求和。输入10个整数，空格分隔。处理后输出10个整数的和。

**样例输入**

```
1 2 3 4 5 6 7 8 9 10
```

**样例输出**

```
sum = 90
```

### 我的解答

这道题考察循环的遍历中对下标的控制，属于基础题。

```cpp
#include <bits/stdc++.h>
#define LL long long
using namespace std;

bool issingle(string s);

int main(){
    LL n = 10;
    LL arr[n];
    for(LL i = 0; i < n; i++){
        cin >> arr[i];
        if(i%2){
            arr[i] += 2;
        }
        else{
            arr[i] *= 2;
        }
    }
    LL sum = 0;
    for(LL j = 0; j < n; j++){
        sum += arr[j];
    }
    printf("sum = %lld", sum);
    return 0;
}
```

## LX503 昨天

### 题目描述

小明喜欢上了日期的计算。这次他要做的是日期的减1天操作，即求在输入日期的基础上减去1天后的结果日期。
例如：日期为2019-10-01，减去1天，则结果日期为2019-09-30。

首先输入一个正整数T，表示测试数据的组数，然后是T组测试数据。每组测试输入1个日期，日期形式为“yyyy-mm-dd”。保证输入的日期合法，而且输入的日期和计算结果都在[1000-01-01，9999-12-31]范围内。

对于每组测试，在一行上以“yyyy-mm-dd”的形式输出结果。

**样例输入**

```
1
2019-10-01
```

**样例输出**

```
2019-09-30
```

### 我的解答

我在解这道题的过程中想得有点复杂，不需要对字符串进行分割，只需要用 `scanf("%d-%d-%d", &year, &month, &day);` 就能获取数字。

注意闰年的计算：`dateframe.year%4==0&&dateframe.year%100!=0)||dateframe.year%400==0`，不能简单认为除以四能整除就是闰年。

这道题训练了 `if` 的使用，即如何通过条件囊括所有的可能，是一道值得思考的题。

```cpp
#include <bits/stdc++.h>
#define LL long long
using namespace std;

struct theDateFrame{
    LL year = 0;
    LL month = 0;
    LL day = 0;
};

struct theDateFrame initdateframe(string datetime){
    struct theDateFrame dateframe;
    dateframe.year += atol(datetime.substr(0,4).c_str());
    dateframe.month += atol(datetime.substr(5,2).c_str());
    dateframe.day += atol(datetime.substr(8,2).c_str());
    return dateframe;
}

struct theDateFrame decOneDay(struct theDateFrame dateframe){
    if(dateframe.day > 1){
        dateframe.day --;
    }
    else{
        if(dateframe.month == 5 || dateframe.month == 7 || dateframe.month == 10 || dateframe.month == 12){
            dateframe.month --;
            dateframe.day = 30;
        }
        else if(dateframe.month == 1){
            dateframe.day = 31;
            dateframe.month = 12;
            dateframe.year --;
        }
        else if(dateframe.month == 3){
            if((dateframe.year%4==0&&dateframe.year%100!=0)||dateframe.year%400==0)
                dateframe.day = 29;
            else
                dateframe.day = 28;
            dateframe.month --;
        }
        else{
            dateframe.month --;
            dateframe.day = 31;
        }
    }
    return dateframe;
}

int main(){
    LL num;
    cin >> num;
    string datetime[num];
    for(int j = 0; j < num; j++){
        cin >> datetime[j];
        struct theDateFrame dateframe = decOneDay(initdateframe(datetime[j]));
        printf("%04lld-%02lld-%02lld\n", dateframe.year, dateframe.month, dateframe.day);
    }
    return 0;
}
```

## LX504 求最值

### 题目描述

从键盘输入n（3<=n<=20）个整数，求出这n个数的最大值、最小值、平均值（平均值保留2位小数）。在第一行输入一个介于3至20之间的整数n，在第二行输入n个整数，中间用一个空格来分隔这n个数据。分三行依次输出最大值、最小值、平均值。格式为：

```
max=最大值
min=最小值
average=平均值（保留2位小数）
```

**样例输入**

```
10
1 2 3 4 5 6 7 8 9 10
```

**样例输出**

```
max=10
min=1
average=5.5
```

### 我的解答

这道题是经典的循环中最大、最小值的问题。在输入的过程中进行判断，可以减少循环次数。

```cpp
#include <bits/stdc++.h>
#define LL long long
using namespace std;

int main(){
    LL n;
    cin >> n;
    LL arr[n];
    LL _max = 0;
    LL _min = 0;
    LL _sum = 0;
    for(int i = 0; i < n; i++){
        cin >> arr[i];
        if(i == 0){
            _max = arr[i];
            _min = arr[i];
        }
        arr[i]<_max?:_max = arr[i];
        arr[i]>_min?:_min = arr[i];
        _sum += arr[i];
    }
    printf("max=%lld\nmin=%lld\naverage=%.2lf", _max, _min, _sum/(double)n);
    return 0;
}
```

## LX505 平均之上

输入一个整数n，再输入n个成绩，求大于平均分的成绩个数。例如，输入5 68 79 56 95 88，输出3。首先输入一个正整数T，表示测试数据的组数，然后是T组测试数据。每组测试先输入n，表示数据个数，然后输入n个整数。对于每组测试，输出大于平均分的成绩个数。

**样例输入**

```
1
5 68 79 56 95 88
```

**样例输出**

```
3
```

### 我的解答

本题是一道比较基础的题目，和前几道题一样，只需对循环结果做一些简单处理即可。

```cpp
#include <bits/stdc++.h>
#define LL long long
using namespace std;

int main(){
    LL n;
    cin >> n;
    for(int i = 0; i < n; i++){
        LL n2;
        cin >> n2;
        LL arr[n2];
        LL sum = 0;
        for(int i = 0; i < n2; i++){
            cin >> arr[i];
            sum += arr[i];
        }
        double avg = sum/n2;
        LL _count = 0;
        for(int i = 0; i < n2; i++){
            if(arr[i] > avg){
                _count ++;
            }
        }
        cout << _count << endl;
    }

    return 0;
}
```

## LX506 编程团体赛

### 题目描述


编程团体赛的规则为：每个参赛队由若干队员组成；所有队员独立比赛；参赛队的成绩为所有队员的成绩和；成绩最高的队获胜。

现给定所有队员的比赛成绩，请你编写程序找出冠军队。

输入第一行给出一个正整数 N（≤10^4），即所有参赛队员总数。随后 N 行，每行给出一位队员的成绩，格式为：队伍编号-队员编号 成绩，其中队伍编号为 1 到 1000 的正整数，队员编号为 1 到 10 的正整数，成绩为 0 到 100 的整数。

在一行中输出冠军队的编号和总成绩，其间以一个空格分隔。注意：题目保证冠军队是唯一的。

**样例输入**

```
6
3-10 99
11-5 87
102-1 0
102-3 100
11-9 89
3-2 61
```

**样例输出**

```
11 176
```

### 我的解答

这道题依然很简单，只有一个小trick：只需要记录最大值的下标即可，另设置一个数组，对应下标的数据项进行累加。

```cpp
#include <bits/stdc++.h>
#define LL long long
using namespace std;

int main(){
    LL N;
    cin >> N;
    LL arr[1000];
    for(int j = 0; j < 1000; j++){
        arr[j] = 0;
    }
    for(int i = 0; i < N; i++){
        LL team, member, score;
        scanf("%lld-%lld %lld", &team, &member, &score);
        arr[team] += score;
    }
    LL max_team, max_score;
    for(int j = 0; j < 1000; j++){
        if(j == 0){
            max_team = j;
            max_score = arr[j];
        }
        if(arr[j]>max_score){
            max_team = j;
            max_score = arr[j];
        }
    }
    printf("%lld %lld", max_team, max_score);
    return 0;
}
```

## LX508 小写数转大写

### 题目描述

编程序实现如下功能：从键盘输入一个非负整数的小写金额（不超过9位），将其转换为汉字大写金额，最后输出结果。提示：不需要对0进行特殊处理。

输入一个非负整数的小写金额（不超过9位），输出汉字大写金额,最后换行。

样例输入

```
1350968
```

样例输出

```
壹佰叁拾伍万零仟玖佰陆拾捌元
```

### 我的解答

这道题看起来很唬人，其实并不难，规律是每个数量位后面跟一个单位位，但是题目没有描述单位“亿”，而且也没有明确说“億”还是“亿”，多试几次就可以解决。

```cpp
#include <bits/stdc++.h>

#define LL long long
using namespace std;

int main(){
    string _ch_num[] = {"零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"};
    string _ch_level[] = {"元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿"};

    string _amount;
    cin >> _amount;

    for(int i = 0; i < (int)_amount.length(); i++){
        cout << _ch_num[_amount[i]-'0'];
        cout << _ch_level[_amount.length()-i-1 ];
    }


    return 0;
}
```

## LX509 最小正整数

### 题目描述

给定一个含n个整数的数组A，请找到数组中从未出现过的最小正整数。第一行输入n(1≤n≤10^6)，第二行输入空格分隔的n个整数A(−10^18≤A≤10^18)。输出一个整数：数组中从未出现过的最小正整数

样例输入

```
4
-5 3 2 3
```

样例输出

```
1
```

### 我的解答

原理上是记录循环的最大值，比如说 1 2 3 7 8 中记录 8，然后依次搜索 1~8，看看从哪一个开始少了就输出那一个。

```cpp
#include <bits/stdc++.h>

#define LL long long
using namespace std;

int main(){
    LL n;
    cin >> n;
    LL _arr[n];

    LL _max = 1;
    for(LL i = 0; i < n; i++){
        cin >> _arr[i];
        _max>_arr[i]?:_max=_arr[i];
    }
    for(LL j = 1; j < _max+1; j++){
        for(LL m = 0; m < n; m++){
            if(j==_arr[m]){
                break;
            }
            else if(m == n-1){
                cout << j;
                return 0;
            }
        }
    }

    return 0;
}
```

### 参考解答

我的解答有一个测试用例无法通过，由于猜不到问题在哪里，我在网上找了一份答案。

```cpp
#include <bits/stdc++.h>

#define LL long long
using namespace std;

LL firstMissingPositive(vector<LL>& nums)
{
    LL n = nums.size();
    // 遍历一次数组把大于等于1的和小于数组大小的值放到原数组对应位置
    for (LL i = 0; i < n; ++i)
    {
        while (nums[i] >=1 && nums[i] <= n && nums[nums[i] - 1] != nums[i])
        {
            swap(nums[nums[i] - 1], nums[i]);
        }
    }
    // 然后再遍历一次数组查当前下标是否和值对应，如果不对应那这个下标就是答案
    for (LL j = 0; j < n; ++j)
    {
        if (nums[j] != j + 1)
        {
            return j + 1;
        }
    }
    // 遍历完都没出现那么答案就是数组长度加1
    return n + 1;
}

int main ()
{
    LL n;
    cin >> n;
    LL arr[n];
    for(LL i = 0; i < n; i++){
        cin >> arr[i];
    }
    vector<LL> nums(arr, arr + sizeof(arr) / sizeof(LL));
    LL res = firstMissingPositive(nums);
    cout << res << endl;
    return 0;
}
```

### 修改测试用例

老师新增了三个测试用例，上述两种答案全部超时，修改代码如下，可以通过。

```cpp
#include <bits/stdc++.h>

#define LL long long
using namespace std;

int main(){
    std::ios::sync_with_stdio(false); 
    // 设置标准 C++ 流是否与标准 C 流在每次输入/输出操作后同步
    // 李昕：大数据输入要加sync with stdio
    LL n;
    cin >> n;
    LL input;
    LL table[n];
    for(LL i = 0; i < n; i++){
        table[i] = 0;
    }
    for(LL i = 0; i < n; i++){
        cin >> input;
        if(input <= n && input > 0){
            table[input-1]++;
        }
    }
    for(LL i = 0; i < n; i++){
        if(table[i]==0){
            cout << i+1;
            break;
        }
        else if(i == n-1){
            cout << n+1;
        }
    }

    return 0;
}
```

## LX510 建国的难题

### 题目描述


众所周知，建国是一个数学天才，但是今天他被下面这道题考到了，你能帮建国解决这个难题吗？

f(1) = k

f(2) = f(1) + 1

f(3) = f(2) + 1 + 2

......

f(n) = f(n-1) + (1 + 2 + ... + n-1)

输入第一行输出一个整数T，表示样例数。(1 <= T <= 100)。每个样例占一行，输入两个整数n，k。（0 < n, k <= 1000)。

输出每个样例输出一个整数表示f(n)。

**样例输入**
```
2
1 1
2 3
```
**样例输出**
```
1
4
```

### 我的解答

解决完后我发现这道题用递归十分简单，我的解法是非递归解法，在很多细节上需要测试一下，解题时间长效率低，下次遇见这种题优先考虑递归。

```cpp
#include <bits/stdc++.h>

#define LL long long
using namespace std;

void deal(LL N, LL k){
    LL f = 0, tmp = 0;
    for(LL i = 0; i < N; i++){
        if(i == 0){
            f = k;
        }
        else{
            for(int j = 0; j < i; j++){
                tmp += j + 1;
            }
            f = f + tmp;
            tmp = 0;
        }

    }
    cout << f << endl;
}

int main(){
    LL T;
    cin >> T;
    for(LL i = 0; i < T; i++){
        LL N, k;
        cin >> N >> k;
        deal(N, k);
    }
    return 0;
}
```

## LX511 排序

### 题目描述


本题要求将给定的n个整数从大到小排序后输出（可使用任意排序算法）。输入第一行给出一个不超过10的正整数n。第二行给出n个整数，其间以空格分隔。在一行中输出从大到小有序的数列，相邻数字间有一个空格，行末不得有多余空格。

**样例输入**

```
6
4 1 3 5 6 2
```

**样例输出**

```
6 5 4 3 2 1
```

### 我的解决

这道题的可拓展性较高，毕竟准备考研的过程中我学习了快速排序、交换排序、基数排序等各种排序方法，这里为了快速完成作业，使用了交换排序中的冒泡排序，是最基本的方法。

```cpp
#include <bits/stdc++.h>
#include<string>
#include <algorithm>


#define LL long long
using namespace std;

int main(){
    LL n;
    cin >> n;
    LL arr[n];
    for(int j = 0; j < n; j ++){
        cin >> arr[j];
    }
    for(int i = 0; i < n; i ++){
        for(int j = 0; j < n; j ++){
            if(arr[i] > arr[j]){
                swap(arr[i], arr[j]);
            }
        }
    }
    for(int j = 0; j < n; j ++){
        cout << arr[j];
        if(j != n-1){
            cout << " ";
        }
    }
    return 0;
}
```

## LX512 矩阵运算

### 题目描述

读入一个正整数n（1≤n≤20），再读入n行n列共n²个整数并存入由二维数组表示的方阵m；计算并输出每一行的元素和；计算并输出每一列的元素和；计算并输出对角线上的元素和（即所有m[i][i]的和, i取0~n-1）。

**样例输入**
```
3
1 2 3
4 5 6
7 8 10
```
**样例输出**
```
sum of row 1 = 6.
sum of row 2 = 15.
sum of row 3 = 25.
sum of column 1 = 12.
sum of column 2 = 15.
sum of column 3 = 19.
sum of elements on the diagonal = 16.
```

### 我的解决

这道题考察矩阵的 i 和 j 特点，外层矩阵控制行，内层矩阵控制列。

```cpp
#include <bits/stdc++.h>
#include<string>
#include <algorithm>


#define LL long long
using namespace std;

int main(){
    LL n;
    cin >> n;
    LL ** line = new LL*[n];

    LL * sum_r = new LL[n];
    LL * sum_col = new LL[n];
    for(int i = 0; i < n; i++){
        sum_col[i] = 0;
    }
    LL sum_diagonal = 0;
    for(int i = 0; i < n; i ++){
        line[i] = new LL[n];
        sum_r[i] = 0;
        for(int j = 0; j < n; j ++){
            cin >> line[i][j];
            sum_r[i] += line[i][j];
            sum_col[j] += line[i][j];
            if(i == j){
                sum_diagonal += line[i][j];
            }
        }
    }
    for(int i = 0; i < n; i ++){
        printf("sum of row %d = %d.\n", i+1, sum_r[i]);
    }
    for(int i = 0; i < n; i ++){
        printf("sum of column %d = %d.\n", i+1, sum_col[i]);
    }
    printf("sum of elements on the diagonal = %d.\n", sum_diagonal);

    return 0;
}
```

## LX513 字符串测试

### 题目描述

输入一行字符串（长度小于20，可能包含空格和制表符），从中间切分成两个串，例如12345678分成1234和5678。如果输入串奇数个字符，切分后两个串不等长，短串在前，例如123456789切分成1234和56789。

输入一个长度小于20的字符串。输出两个字符串，逗号分隔，如果输入串有奇数个字符，两个串不等长，短串在前。

样例输入
```
123456789
```
样例输出
```
1234,56789
```

### 我的解答

这道题考察字符串的切割，`substr()` 函数的第一个参数是起始位置，第二个参数是切割长度。奇偶长度通过 `length()` 获得。

```cpp
#include <bits/stdc++.h>
#include<string>
#include <algorithm>


#define ULL unsigned long long
using namespace std;

int main(){
    string str;
    getline(cin, str);
    ULL length = str.length();
    if(length%2==0){
        cout << str.substr(0, length/2);
        cout << ",";
        cout << str.substr(length/2, length/2);
    }
    else{
        cout << str.substr(0, length/2);
        cout << ",";
        cout << str.substr(length/2, length/2+1);
    }
    return 0;
}
```

## LX514 字符串跨距

有三个字符串S,S1,S2，其中，S长度不超过300，S1和S2的长度不超过10。

现在，我们想要检测S1和S2是否同时在S中出现，且S1位于S2的左边，并在S中互不交叉（即，S1的右边界点在S2的左边界点的左侧）。

计算满足上述条件的最大跨距（即，最大间隔距离：最右边的S2的起始点与最左边的S1的终止点之间的字符数目）。

如果没有满足条件的S1，S2存在，则输出-1。

例如，S = “abcd123ab888efghij45ef67kl”, S1=”ab”, S2=”ef”，其中，S1在S中出现了2次，S2也在S中出现了2次，最大跨距为：18。

输入共一行，包含三个字符串S,S1,S2，字符串之间用逗号隔开。数据保证三个字符串中不含空格和逗号。

**样例输入**
```
abcd123ab888efghij45ef67kl,ab,ef
```
**样例输出**
```
18
```
**提示**

string类型的find和rfind函数

### 我的解答 - 没看到提示版

一开始我没有看到提示，直接猛解，有一个测试用例过不去，调试了很长时间，没有找到原因。

```cpp
#include <bits/stdc++.h>

#define LL long long
#define ULL unsigned long long
using namespace std;


int main(){
    string str[3];

    for(int i = 0; i < 3; i++){
        if(i < 2){
            getline(cin, str[i], ',');
            //cout << str[i] << " " << str[i].length() << endl;
        }
        else{
            cin >> str[i];
            //cout << str[i] << " " << str[i].length() << endl;
        }
    }

    LL str2_right = -1, str3_left = -1;

    bool flag = true;
    for(LL str1_pos = 0; str1_pos < str[0].length() && flag; str1_pos++){
        LL str2_pos = 0;
        LL tmp = str1_pos;
        while(str[0][str1_pos] == str[1][str2_pos]){
            if(str2_pos == str[1].length()-1){
                str2_right = str1_pos;
                //printf("\n\nstr2_right: %lld\n\n", str2_right);
                str2_pos = 0;
                flag = false;
                break;
            }
            str2_pos++;str1_pos++;
        }
        str1_pos = tmp;
    }

    for(LL str1_pos = 0; str1_pos < str[0].length(); str1_pos++){
        LL str3_pos = 0;
        LL tmp = str1_pos;
        while(str[0][str1_pos] == str[2][str3_pos]){
            //cout << str3_pos << " ";
            if(str3_pos == str[2].length()-1){
                str3_left = str1_pos - str[2].length() + 1;
                str3_pos = 0;
                //printf("str3_left: %lld\n", str3_left);
                break;
            }
            str3_pos++;str1_pos++;
        }
        str1_pos = tmp;
    }

    LL ans = -1;
    if(str3_left>str2_right&&str3_left>0&&str2_right>0){
        ans = str3_left-str2_right-1;
    }

    cout << ans << endl;

    return 0;
}
```

### 我的解答 - 看到提示版

看到提示用 `find` 和 `rfind`，在使用后确实很简单，只是简单的减法罢了。

```cpp
#include <bits/stdc++.h>

#define LL long long
#define ULL unsigned long long
using namespace std;

int main(){
    string str[3];

    for(int i = 0; i < 3; i++){
        if(i < 2){
            getline(cin, str[i], ',');
        }
        else{
            cin >> str[i];
        }
    }

    LL pos_1 = str[0].find(str[1]);
    LL pos_2 = str[0].rfind(str[2]);
    LL ans = pos_2 - (pos_1 + str[1].length() -1) -1;
    //cout << pos_1 + str[1].length() -1 << " " <<pos_2<< endl;

    if(ans > 0){
        cout << ans;
    }
    else{
        cout << "-1";
    }
    return 0;
}
```

## LX515 首字母大写

输入一个英文句子，要求将每个单词的首字母改成大写字母。

测试数据有多组，处理到文件尾。每组测试输入一行，包含一个长度不超过100的英文句子（仅包含大小写英文字母和空格），单词之间以一个空格间隔。

对于每组测试，输出按照要求改写后的英文句子。

样例输入

```
I like acm
i want to get Accepted
```

样例输出

```
I Like Acm
I Want To Get Accepted
```

### 我的解答

这道题的难点是“测试数据有多组，处理到文件尾”，在网上找到 `EOF` 关键字的使用教程，才把问题解决。判断是否为该行第一个字母，使用了 `last_ch` 记录数上一个字符。

```cpp
#include <bits/stdc++.h>
#include<string>
#include <algorithm>

#define LL long long
#define ULL unsigned long long
using namespace std;

int main(){
    char ch, last_ch = ' ';
    ch = getchar();
    bool first = true;
    while(ch!=EOF){
        first = (last_ch == '\n');
        if((last_ch == ' '||first) && (ch>='a'&&ch<='z')){
            ch = ch-'a'+'A';
        }
        cout << ch;
        last_ch = ch;
        ch = getchar();
    }
    return 0;
}
```

## LX516 交替01串

一个交替01串被定义为一个字符串，只有字符“0”和“1”组成，且任意相邻两个字符都是不同的。例如：”1“，”10101“，”0101010“都是交替01串。现在给定一个01字符串s，问其中最长的连续子串，是交替01串的长度是多少？

**样例输入**

```
1110111
```

**样例输出**

```
3
```

### 我的解决

这道题比较基础，判断该字符和前一个字符的关系从而决定是否累加变量。

```cpp
#include <bits/stdc++.h>
#define LL long long
#define ULL unsigned long long
using namespace std;

int main(){
    string s;
    cin >> s;
    LL length = 0, max_l = 0;
    for(LL i = 1; i < (LL)s.length(); i++){
        if((s[i]=='0'&&s[i-1]=='1')||(s[i]=='1'&&s[i-1]=='0')){
            length ++;
            max_l = max(length, max_l);
        }
        else{
            length = 0;
        }
    }
    cout << max_l + 1;
}
```

## LX517 大数加1

### 题目描述

输入以不超过30位的正整数，求其加1之后的结果。

**样例输入**

```
333469135699212325273231333537
```

**样例输出**

```
333469135699212325273231333538
```

**样例输入**
```
33346913569921232527999
```
**样例输出**
```
33346913569921232528000
```

### 我的解决

这道题是用字符串模拟数值做加法，只需要用加法的基本原理即可。

```cpp
#include <bits/stdc++.h>
#include<string>
#include <algorithm>


#define ULL unsigned long long
using namespace std;

void fadd1(string &str, ULL pos){
    if(str[pos]== '9'){
        if(pos == 0){
            cout << '1';
            str[pos] = '0';
        }
        else{
            str[pos] = '0';
            fadd1(str, pos-1);
        }
    }
    else{
        str[pos] = str[pos]+1;
    }
}

int main(){
    string str;
    getline(cin, str);
    ULL length = str.length();
    fadd1(str, length-1);
    cout << str;
    return 0;
}
```