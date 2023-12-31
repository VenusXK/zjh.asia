# PTA作业-面向对象


[[TOC]]


## LX701 平均分计算

这是一个程序填充题，填充后提交完整代码。

定义一学生类，已有若干个学生数据，包括学号、姓名、成绩，要求输出这些学生数据并计算平均分。注意静态属性成员的使用。

利用学生类进行对象定义并输出结果的例子如下：

```cpp
#include<iostream>
#include<cstring>
using namespace std;
class Stud{
    /* 请在这里填写答案 */
};
double Stud::sum=0;
int Stud::num=0;
int main()
{
    int No,n;
    cin>>n;
    char name[50];
    double score;
    while(n--){
        cin>>No;
        cin>>name;
        cin>>score;
        Stud stu(No,name,score);
        stu.disp();
    }
    printf("avg=%.2lf\n",Stud::avg());
    return 0;
}
```

**输入格式**

先输入整数n，代表n行，再输入n行，每行包括学号、姓名和分数，分别是整型、字符串和浮点数，空格分隔。

**输出格式**

输出多个学生成绩的平均值，保留两位小数精度


```
样例 #1
样例输入 #1
3
1 Li 89
2 Chert 78
3 zheng 96
样例输出 #1
avg=87.67
```

**我的解答**

考察 `static` 变量的使用，其含义为整个类的成员变量，注意不能在类中初始化，初始化需要如下操作：

```cpp
double Stud::sum=0;
int Stud::num=0;
int main(){
    ...
```

考察 `static` 方法的使用，在函数中通过 `Stud::avg()` 调用，含义为整个类的方法。


```cpp
#include<iostream>
#include<cstring>
using namespace std;
class Stud{
    private:
        int No;
        //char name[50];
        double score;
    public:
        static double sum;
        static int num;
        Stud(int No, char name[], double score){
            this -> No = No;
            //this.name = name;
            this -> score = score;
            Stud::sum += score;
            Stud::num ++;
        }
        static double avg(){
            return Stud::sum/Stud::num;
        }
        void disp(){

        }
};
double Stud::sum=0;
int Stud::num=0;
int main()
{
    int No,n;
    cin>>n;
    char name[50];
    double score;
    while(n--){
        cin>>No;
        cin>>name;
        cin>>score;
        Stud stu(No,name,score);
        stu.disp();
    }
    //printf("sum=%.2ld\n",Stud::sum);
    printf("avg=%.2lf\n",Stud::avg());
    return 0;
}
```

## LX702 点圆

**题目描述**

这是一个程序填充题，填充后提交完整代码。

创建一个表示点的类Point，运用组合的方式创建圆形类。

圆形有个成员函数isPointIn用于判断一个点是否在该圆形的内部。

完成对应类代码，使得主函数可以正确运行。

注意类的数值型数据成员类型为浮点型。

```cpp
#include<bits/stdc++.h>
using namespace std;
/* 请在这里填写答案 */
int main(int argc, char const *argv[])
{
    double x,y;
    double r;
    cin>>x>>y>>r;
    Point p(x,y);
    Circle c(p,r);
    cin>>x>>y;
    Point p1(x,y);
    bool b = c.isPointIn(p1);
    cout<<b<<endl;
}
```

**输入格式**

在这里给出一组输入。例如：

```
1 1 1.5 2 2
```

**输出格式**

在这里给出相应的输出(在内部输出1；否则输出0)。例如：

```
1
```

**我的解答**

注意组合类中，如果 `Circle` 类中定义了 `Pointer p` 成员变量，需要有无参构造函数，但如果定义了 `Pointer * p` 变量，则无需无参构造函数，具体原因我没有深入理解（需要深入学习类定义时的地址分配过程，课程暂不涉及）。

```cpp
#include<bits/stdc++.h>
using namespace std;

class Point{
private:
    double x, y;
public:
    Point(){ } // 重载构造函数无无参默认构造函数，没有则报错如下 (或者在圆内用指针)
    //error: no matching function for call to 'Point::Point()'|
    Point(double x, double y){
        this -> x = x;
        this -> y = y;
    }
    double getX(){
        return this -> x;
    }
    double getY(){
        return this -> y;
    }
};

class Circle{
private:
    Point p;
    double r;
public:
    Circle(Point p, double r){
        this -> p = p;
        this -> r = r;
    }
    bool isPointIn(Point p){
        double dist = (p.getX()-(this->p.getX()))*(p.getX()-(this->p.getX())) + (p.getY()-(this->p.getY()))*(p.getY()-(this->p.getY()));
        return dist < r*r; // 圆内部无 `=`
    }
};


int main(int argc, char const *argv[])
{
    double x,y;
    double r;
    cin>>x>>y>>r;
    Point p(x,y);
    Circle c(p,r);
    cin>>x>>y;
    Point p1(x,y);
    bool b = c.isPointIn(p1);
    cout<<b<<endl;
}

```

## LX703 统计数字

**题目描述**

这是一个程序填充题，填充后提交完整代码。

设计一个类Solution，其中包含一个成员函数count_digits，其功能是统计传入的string类型参数中数字字符的个数并返回。

```cpp
#include <cstdlib>
#include <cstdio>
#include <cstring>
#include <cctype>
#include <string>
#include <iostream>
using namespace std;

/* 请在这里填写答案 */
 
int main()
{
    int t;
 
    cin >> t;
    getchar();
    while (t--)
    {
        string str;
        Solution obj;
        getline(cin,str);
        int digits = obj.count_digits(str);
        cout << digits << endl;
    }
    return 0;
}
```

**输入格式**

第1行一个整型数字n，然后有n行字符串

**输出格式**

每行字符串中数字字符的个数

```
样例 #1
样例输入 #1
2
asdfasdf123123asdfasdf
asdf111111111asdfasdfasdf
样例输出 #1
6
9
```

**我的解答**

```cpp
#include <cstdlib>
#include <cstdio>
#include <cstring>
#include <cctype>
#include <string>
#include <iostream>
using namespace std;

class Solution{
public:
    int count_digits(string str){
        int res = 0;
        for(auto i:str){
            if(i>='0'&&i<='9')
                res ++;
        }
        return res;
    }
};

int main()
{
    int t;

    cin >> t;
    getchar();
    while (t--)
    {
        string str;
        Solution obj;
        getline(cin,str);
        int digits = obj.count_digits(str);
        cout << digits << endl;
    }
    return 0;
}
```

## LX704 三维坐标

**题目描述**

这是一个程序填充题，填充后提交完整代码。

实现一个三维坐标类，以保证示例代码能正确运行

```cpp
#include <math.h>
#include <iostream>
using namespace std;
/* 请在这里填写答案 */
int main() 
{
    int x,y,z;
    TPoint a(1,2,3);    //初始一个坐标为(1,2,3)
    TPoint b;            //初始一个坐标为(0,0,0)
    TPoint c(10);        //初始一个坐标为(10,0,0) 
    cin>>x>>y>>z;
    TPoint d(x,y,z);        //初始一个坐标为(x,y,z) 
    cout<<len(a,d)<<endl;    //显示a,d之间的距离
    move(a,d);            //将a移动至d点处
    a.Show();            //显示移动后a点坐标 
    return 0;
}
```


**输入格式**

一行三个整数，空格分隔

**输出格式**

第一行为新输入点d到给定点a的距离
第二行输出a的新坐标，输出格式见样例

```
样例 #1
样例输入 #1
2 3 4
样例输出 #1
1.73205
(2,3,4)
```
**我的解答**

构造函数写自身时，如 `TPoint(TPoint p)`，会报错 `error: invalid constructor; you probably meant 'TPoint (const TPoint&)'`，说明传参为对象时需要强制引用，因为不会复制一份，节省空间。同时 `const` 表示不能对该对象进行修改，否则容易引起混乱，需要注意此时 `TPoint` 类的成员变量的 `get` 方法需要加 `const` 关键字，否则会报错关键字丢失，这里是把传参的 `const` 关键字去掉了，其实不推荐。

```cpp
#include <math.h>
#include <iostream>
using namespace std;
class TPoint{
private:
    int init[3] = {0};
    int * pos = init;
public:
    int* getPos(){
        return this -> pos;
    }
    void setPos(TPoint& p){
        this -> pos = p.getPos();
    }

    //TPoint(TPoint p){// error: invalid constructor; you probably meant 'TPoint (const TPoint&)'|
    TPoint (TPoint& p){
        this -> pos = p.getPos();
    }
    TPoint(int x, int y, int z){
        pos[0] = x;
        pos[1] = y;
        pos[2] = z;
    }
    TPoint(){ }
    TPoint(int x){
        pos[0] = x;
    }

    void Show(){
        printf("(%d,%d,%d)", pos[0], pos[1], pos[2]);
    }
};

double len(TPoint a, TPoint b){
    int tmp = 0;
    for(int i = 0; i < 3; i++){
        tmp += pow(a.getPos()[i] - b.getPos()[i], 2);
    }
    return sqrt(tmp);
}

void move(TPoint &a, TPoint &b){

    /* 写成了交换位置
    TPoint* tmp = new TPoint(b);
    //b.getPos() = a.getPos(); // lvalue required as left operand of assignment|
    //a.getPos() = tmp->getPos(); // lvalue required as left operand of assignment|
    b.setPos(a);
    a.setPos(*tmp);
    */

    a.setPos(b);
}

int main()
{
    int x,y,z;
    TPoint a(1,2,3);    //初始一个坐标为(1,2,3)
    TPoint b;            //初始一个坐标为(0,0,0)
    TPoint c(10);        //初始一个坐标为(10,0,0)
    cin>>x>>y>>z;
    TPoint d(x,y,z);        //初始一个坐标为(x,y,z)
    cout<<len(a,d)<<endl;    //显示a,d之间的距离
    move(a,d);            //将a移动至d点处
    a.Show();            //显示移动后a点坐标
    return 0;
}
```

## LX705 点圆关系

**题目描述**

这是一个程序填充题，填充后提交完整代码。

输入平面上的一个点的坐标，以及一个圆的圆心坐标和半径，输出该点到原点的距离，并判断该点在圆内，圆外还是在圆周上。

下面已经给出了点类Point的部分定义，请将其函数定义补充完整，并添加对圆类Circle的完整定义。


```cpp
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
class Point{
    private:
        double x,y;
    public:
        Point();
        Point(double x_,double y_);
        double distance();
        double distance(const Point &p);
        double getX(){return x;}
        double getY(){return y;}
        void setX(double x_);
        void setY(double y_);
};
/* 请将代码填写在这里 */
int main()
{
   double x1,y1,x2,y2,r; 
   cin>>x1>>y1>>x2>>y2>>r;
   Point p(x1,y1);
   Point ctr(x2,y2);
   Circle c(ctr,r);
   cout<<setprecision(3)<<p.distance()<<" "<<c.judge(p)<<endl;
} 
```

**输入格式**

格式如下：
点的x坐标 点的y坐标 圆心的x坐标 圆心的y坐标 圆的半径

**输出格式**

第一行输出点到原点的距离

第二行输出点和圆的关系，在圆外时，将输出“outside"，在圆内时，输出"inside"，在圆周上时，输出“on"。

```
样例 #1
样例输入 #1
2 3 1 1 3
样例输出 #1
3.61 inside
```

**我的解答**

这里遇到和之前一样的问题，即 `const` 关键字丢失，对 `get` 方法进行了关键字封装。

这里使用了 `Point * ctr` 构造指针变量，无需空构造参数，原因不详。

注意 double 类型的比较，`==` 的 double 类型表示为 `fabs(a - b) < 0.000001`。

```cpp
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
class Point{
    private:
        double x,y;
    public:
        Point();
        Point(double x_,double y_){
            x = x_; y = y_;
        }
        double distance(){
            return sqrt(pow(x, 2)+pow(y, 2));
        }
        double distance(const Point &p){
            double res = sqrt(
                        pow(p.getX() - this->getX(), 2)+
                        pow(p.getY() - this->getY(), 2));
            return res;
        }
        //double getX(){return x;} error: passing 'const Point' as 'this' argument discards qualifiers [-fpermissive]|
        double getX() const {return x;}
        double getY() const {return y;}
        void setX(double x_){
            x = x_;
        }
        void setY(double y_){
            y = y_;
        }
};
/* 请将代码填写在这里 */

class Circle{
private:
    Point * ctr;
    double r;
public:
    Circle(const Point& ctr, double r){
        this -> ctr = new Point(ctr.getX(), ctr.getY());
        this -> r = r;
    }
    string judge(const Point & p){
        double dis = (*ctr).distance(p);
        //cout << endl << "dis: " << dis << " r: " << r << endl;
        if(fabs(dis - r)<0.0000001)
            return "on";
        else if(dis - r > 0)
            return "outside";
        else
            return "inside";
    }
};

int main()
{
   double x1,y1,x2,y2,r;
   cin>>x1>>y1>>x2>>y2>>r;
   Point p(x1,y1);
   Point ctr(x2,y2);
   Circle c(ctr,r);
   cout<<setprecision(3)<<p.distance()<<" "<<c.judge(p)<<endl;
}
```

## LX706 Car类

**题目描述**

这是一个程序填充题，填充后提交完整代码。

本题要求声明和实现一个Car类，包括实现其成员函数。

类和函数接口定义：

声明一个Car类;

三个public成员函数:

- **disp_welcomemsg()**，无返回类型;
- **get_wheels()**，返回一个Car类的数据成员m_nWheels的值；
- **set_wheels(int)**，用指定的形参初始化数据成员m_nWheels的值；

一个私有数据成员m_nWheels，整数类型，代表汽车的车轮数量。
其中，成员函数disp_welcomemsg()显示一条欢迎信息“Welcome to the car world!”。

成员函数get_wheels()返回Car类的私有数据成员m_nWheels。

成员函数set_wheels(int)用指定的形参初始化数据成员m_nWheels。

裁判测试程序样例：

```cpp
#include <iostream>
using namespace std;

/* 请在这里填写答案 */

int main()
{
    int n;
    cin >> n;
    Car myfstcar, myseccar;    //定义类对象
    myfstcar.disp_welcomemsg();//访问成员函数，显示欢迎信息
    myfstcar.set_wheels(n);    //访问成员函数，设置车轮数量
    myseccar.set_wheels(n+4);  //访问成员函数，设置车轮数量
    //访问成员函数，显示车轮数量
    cout << "my first car wheels num = " << myfstcar.get_wheels() << endl;
    cout << "my second car wheels num = " << myseccar.get_wheels() << endl;
    return 0;
}
```

**输入格式**

一个整数n，表示车轮的数量，2≤n≤10

**输出格式**

见样例

```
样例 #1
样例输入 #1
4
样例输出 #1
Welcome to the car world!
my first car wheels num = 4
my second car wheels num = 8
```

**我的解答**

这道题是基础的类的定义，难度很低。

```cpp
#include <iostream>
using namespace std;

/* 请在这里填写答案 */
class Car{
private:
    int m_nWheels = 0;
public:
    void disp_welcomemsg();
    int get_wheels();
    void set_wheels(int w);
};

void Car::disp_welcomemsg(){
    cout << "Welcome to the car world!" << endl;
}

int Car::get_wheels(){
    return this -> m_nWheels;
}

void Car::set_wheels(int w){
    this -> m_nWheels = w;
}

int main()
{
    int n;
    cin >> n;
    Car myfstcar, myseccar;    //定义类对象
    myfstcar.disp_welcomemsg();//访问成员函数，显示欢迎信息
    myfstcar.set_wheels(n);    //访问成员函数，设置车轮数量
    myseccar.set_wheels(n+4);  //访问成员函数，设置车轮数量
    //访问成员函数，显示车轮数量
    cout << "my first car wheels num = " << myfstcar.get_wheels() << endl;
    cout << "my second car wheels num = " << myseccar.get_wheels() << endl;
    return 0;
}
```

## LX707 角度的加法

**题目描述**

请设计角度类 ANGLE，实现角度的输入、输出和加法运算。

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

/* 将代码补充在这里 */

int main()
{
    ANGLE a, b, c;
    a.Input();
    b.Input();
    c = a.Add(b);
    c.Output();
    cout << endl;
    return 0;
}
```

设计输入和输出函数，达到以下效果。

```cpp
ANGLE a;
a.Input(); // 输入: 28 36 47
a.Output(); // 输出: 28 36 47
```

设计加法函数，达到以下效果。

```cpp
ANGLE a(16, 28, 57), b(32, 49, 15), c;
c = a.Add(b); // c 变为 49 度 18 分 12 秒
```

**输入格式**

通过 `.Input()` 输入角度的 度 分 秒

输出格式
通过 `.Output()` 输出角度的 度 分 秒

```
样例 #1
样例输入 #1
16 28 57
32 49 15
样例输出 #1
49 18 12
```

**我的解答**

我的解法为先加在一起，再统一进位，进位的方法为先进位秒，再进位分，我把它写成了成员函数，可以加完直接调用，很方便。

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

class ANGLE{
private:
    int value[3] = {0};
    int * ptr_v = value;
public:
    ANGLE();
    ANGLE(ANGLE * angle);
    void Input();
    ANGLE Add(ANGLE angle);
    void Output();
    void MakeCarry();
};

ANGLE::ANGLE(){}

ANGLE::ANGLE(ANGLE * angle){
    for(int i = 0; i < 3; i ++ ){
        this -> value[i] = angle -> value[i];
    }
}

void ANGLE::Input(){
    for(int i = 0; i < 3; i++){
        cin >> value[i];
    }
}

void ANGLE::Output(){
    for(int i = 0 ; i < 3; i++){
        cout << value[i];
        if ( i < 2 ){
            cout << " ";
        }
    }
}

ANGLE ANGLE::Add(ANGLE angle){
    ANGLE *res_angle = new ANGLE(this);
    for(int i = 0; i < 3; i++){
        res_angle -> value[i] += angle.value[i];
    }
    res_angle -> MakeCarry();
    return *res_angle;
}

void ANGLE::MakeCarry(){
    int tmp = value[2]/60;
    value[2] = value[2] % 60;
    value[1] += tmp;
    tmp = value[1]/60;
    value[1] = value[1] % 60;
    value[0] += tmp;
}

int main()
{
    ANGLE a, b, c;
    a.Input();
    b.Input();
    c = a.Add(b);
    c.Output();
    cout << endl;
    return 0;
}
```


## LX708 派生类构造

**题目描述**

裁判测试程序样例中展示的是一段定义基类People、派生类Student以及测试两个类的相关C++代码，其中缺失了部分代码，请补充完整，以保证测试程序正常运行。

提示：观察类的定义和main方法中的测试代码，补全缺失的代码。

注意：真正的测试程序中使用的数据可能与样例测试程序中不同，但仅按照样例中的格式调用相关函数。

```cpp
#include <iostream>
using namespace std;
class People{
private:
    string id;
    string name;
public:
    People(string id, string name){
        this->id = id;
        this->name = name;
    }
    string getId(){
        return this->id;
    }
    string getName(){
        return name;
    }
};
class Student : public People{
private:
    string sid;
    int score;
public:
    Student(string id, string name, string sid, int score)
        /** 补充您的代码 **/

    }
    friend ostream& operator <<(ostream &o, Student &s);
};
ostream& operator <<(ostream &o, Student &s){
    o << "(Name:" << s.getName() << "; id:"
      << s.getId() << "; sid:" << s.sid
      << "; score:" << s.score << ")";
    return o;
}
int main(){
    string id,name,sid;
    int score;
    getline(cin,id);
    getline(cin,name);
    cin>>sid>>score;
    Student zs(id, name, sid, score);
    cout << zs << endl;
    return 0;
}
```

**输入格式**

4行，分别表示 `id`, `name`, `sid` 和 `score`

**输出格式**

见样例输出

```
样例 #1
样例输入 #1
370202X
Zhang San
1052102
96
样例输出 #1
(Name:Zhang San; id:370202X; sid:1052102; score:96)
```

**我的解答**

其实就改了下面的一句话，学习了继承类调用父类构造函数的写法。

```cpp
Student(string id, string name, string sid, int score):People(id, name){
    this -> id = id;
    this -> name = name;
    this -> sid = sid;
    this -> score = score;
}
```

具体原因我没有深入理解（需要深入学习类定义时的地址分配过程，课程暂不涉及），之后有机会了再深入学习。

```cpp
#include <iostream>
using namespace std;
class People{
protected:
    string id;
    string name;
public:
    People(string id, string name){
        this->id = id;
        this->name = name;
    }
    string getId(){
        return this->id;
    }
    string getName(){
        return name;
    }
};
class Student : public People{
private:
    string sid;
    int score;
public:
    Student(string id, string name, string sid, int score):People(id, name){
        this -> id = id;
        this -> name = name;
        this -> sid = sid;
        this -> score = score;
    }
    friend ostream& operator <<(ostream &o, Student &s);
};

ostream& operator <<(ostream &o, Student &s){
    o << "(Name:" << s.getName() << "; id:"
      << s.getId() << "; sid:" << s.sid
      << "; score:" << s.score << ")";
    return o;
}
int main(){
    string id,name,sid;
    int score;
    getline(cin,id);
    getline(cin,name);
    cin>>sid>>score;
    Student zs(id, name, sid, score);
    cout << zs << endl;
    return 0;
}
```

## LX709 时间的比较

**题目描述**

这是一个程序填充题，填充后提交完整代码。

请设计时间类TIME，实现时间的输入、输出和比较。

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

/* 将代码补充在这里 */

int main()
{
    TIME a, b;
    cout << a << endl;
    cin >> a >> b;
    cout << a << ' ' << b << endl;
    if (a > b)
    {
        cout << "Yes\n";
    }
    else
    {
        cout << "No\n";
    }
    return 0;
}
```


**设计要求**

设计构造函数，达到以下效果。

```cpp
测试代码1
TIME a;
cout << a << endl;
输出样例1
00:00:00
```

重载输入输出运算符函数，达到以下效果。

```cpp
测试代码1
TIME a, b;
cin >> a >> b;
cout << a << ' ' << b << endl;
输出样例1
0:0:1 23:0:0
00:00:01 23:00:00
```

重载大于运算符，达到以下效果。

```cpp
测试代码1
//有TIME a,b
if (a > b)
{
    cout << "Yes\n";
}
else
{
    cout << "No\n";
}
输出样例1
Yes
```

输入输出格式如下：

```cpp
样例 #1
样例输入 #1
9:0:1
8:59:58
样例输出 #1
00:00:00
09:00:01 08:59:58
Yes
```

**我的解答**

使用指针传递数组成员变量，传递时参数较少，更加方便。

重载输入输出流目前我在背模板的阶段，以后有机会了再深入学习。

统计时间差这里使用的是都化为秒，直接比较秒数和即可。

```cpp
#include <iostream>
#include <iomanip>
#include <stdio.h>
using namespace std;

/* 将代码补充在这里 */
class TIME{
private:
    int t[3] = {0};
    int *pt = t;
public:
    // init
    TIME(){};

    // get
    int * getTime(){return pt;}
    // set
    friend ostream& operator <<(ostream &o, TIME &T);
    friend istream& operator <<(istream &i, const TIME &T);
    bool operator> (TIME &T);
};

istream& operator >>(istream &i, TIME &T){
    int * t = T.getTime();
    scanf("%d:%d:%d", &t[0], &t[1], &t[2]);
    return i;
}

ostream& operator <<(ostream &o, TIME &T){
    int * t = T.getTime();
    printf("%02d:%02d:%02d", t[0], t[1], t[2]);
    //o << t[0] << ":" << t[1] << ":" << t[2];
    return o;
}

bool TIME::operator>(TIME &T){
    int * t1 = this -> getTime();
    int * t2 = T.getTime();
    int t1_sum = t1[2] + t1[1]*60 + t1[0]*60*60;
    int t2_sum = t2[2] + t2[1]*60 + t2[0]*60*60;
    if(t1_sum - t2_sum > 0){
        return 1;
    }
    else{
        return 0;
    }
}

int main()

{
    TIME a, b;
    cout << a << endl;
    cin >> a >> b;
    cout << a << ' ' << b << endl;
    if (a > b)
    {
        cout << "Yes\n";
    }
    else
    {
        cout << "No\n";
    }
    return 0;
}
```

## LX710 N天以后

**题目描述**

补充裁判测试程序中Date类的定义，并提交完整源代码，使其可以与一个整数n相加或相减，得到该日期N天后/前的日期。

**提示**：注意考虑闰月，整数n的取值范围为[1,10000]。

裁判测试程序：

```cpp
#include <iostream>
#include <string>
#include <assert.h>
using namespace std;

//代码写在这里

int main()
{
    int y, m, d;
    cin >> y >> m >> d;
    Date d1(y,m,d);

    int n;
    cin >> n;

    cout << d1.toText() << " + " << n << " = " << (d1 + n).toText() << endl;
    cout << d1.toText() << " - " << n << " = " << (d1 - n).toText() << endl;
    return 0;
}
```

**输入格式**

第一行输入年月日，空格分隔

第二行输入一个正整数n，n≥1

**输出格式**

第一行输出加n天后的日期

第二行输出减n天后的日期

具体格式见输出样例

```
样例 #1
样例输入 #1
2022 8 31
2
样例输出 #1
2022-8-31 + 2 = 2022-9-2
2022-8-31 - 2 = 2022-8-29
```

**我的解答**

重载 `+` 和 `-` 运算符，加减时需要进行判断闰年以及日期进位，仔细斟酌即可。

使用查表法，注意月份和数组下标的对应关系，月份是从1开始，无论是获取月份还是构造类，都需要单独加1或减1。

```cpp
#include <iostream>
#include <string>
#include <assert.h>
using namespace std;

class Date{
private:
    int y, m, d;
public:
    Date(int y, int m, int d);
    string toText();
    Date operator+(int day_add);
    Date operator-(int day_add);
};

Date::Date(int y_, int m_, int d_){
    y = y_; m = m_; d = d_;
}

Date Date::operator+(int day_add){
    int new_day = this->d + day_add;
    int new_month = this->m - 1;
    int new_year = this->y;
    int d_arr[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    // 闰年判断
    if((new_year%4==0 && new_year%100!=0) || new_year%400 == 0){
        d_arr[1] = 29;
    }

    // 日期进位
    if(new_day > d_arr[new_month]){
        if(new_month == 11){
            new_day -= d_arr[new_month];
            new_month = 0;
            new_year ++;
        }
        else{
            new_day -= d_arr[new_month];
            new_month ++;
        }
    }

    // 构造返回
    Date * d = new Date(new_year, new_month + 1, new_day);
    return *d;
}

Date Date::operator-(int day_add){
    int new_day = this->d - day_add;
    int new_month = this->m - 1;
    int new_year = this->y;
    int d_arr[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    // 闰年判断
    if((new_year%4==0 && new_year%100!=0) || new_year%400 == 0){
        d_arr[1] = 29;
    }

    // 日期进位
    if(new_day <= 0){
        if(new_month == 0){
            new_month = 11;
            new_day = d_arr[new_month] + new_day;
            new_year --;
        }
        else{
            new_month --;
            new_day = d_arr[new_month] + new_day;
        }
    }

    // 构造返回
    Date * d = new Date(new_year, new_month + 1, new_day);
    return *d;
}

string Date::toText(){
    return to_string(y) + "-" +
            to_string(m) + "-" +
            to_string(d);
}

int main()
{
    int y, m, d;
    cin >> y >> m >> d;
    Date d1(y,m,d);

    int n;
    cin >> n;

    cout << d1.toText() << " + " << n << " = " << (d1 + n).toText() << endl;
    cout << d1.toText() << " - " << n << " = " << (d1 - n).toText() << endl;
    return 0;
}
```