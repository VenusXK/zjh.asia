#include<iostream>

// 建立一个学生类
class Student{
    public:
        // 写出两个参数的构造函数
        Student(int id, std::string name){
            this->id = id;
            this->name = name;
        }
        Student(int id, std::string name, int age){
            this->id = id;
            this->name = name;
            this->age = age;
        }
        int id;
        std::string name;
        int age;
};

int main(){
    std::cout << "Hello World!" << std::endl;
    
    
    return 0;
}