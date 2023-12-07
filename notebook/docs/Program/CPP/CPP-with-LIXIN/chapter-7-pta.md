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
