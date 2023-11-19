# 参数的传值

## 基本数据类型的传值

不可以低级值传值到高级值，优先级顺序为 `byte -> short -> char -> int -> long -> float -> double`，但可高级值传递到低级值。

## 引用类型的传值

类似 C++ 的指针，详见 [相关习题](/Program/CPP/CPP-with-LIXIN/chapter-6-pta.html#lx605-%E9%80%86%E7%BD%AE%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84)，传递值传递的是引用，而不是实体。对于形参和实参，改变形参引用的**实体的值**，实参亦改变，改变形参的**引用指向**，实参的指向不会改变。

## 可变参数

```java
public void f(int ... x){} //ok, input >> 1 2 3 4 ... 100 
public void f(float a, int ... x){} // ok, input >> 1.1 1 2 3 4 5 ... 100
public void f(int ... x, float a){} // wrong, `int ... x` 需放最后
```

参数列表可以理解为数组，具有 `x.length` 属性。

```java
public int getSum(int... x){
    int sum = 0;
    for(int i = 0; i < x.length; i++){
        sum += x[i];
    }
    return sum;
}
```

或使用增强的循环语句，如下：

```java
public int getSum(int... x){
    int sum = 0;
    for(int param:x){
        sum += param;
    }
    return sum;
}
```

