结构体变量的起始地址能够被其最宽的成员大小整除
结构体每个成员相对于起始地址的偏移能够被其自身大小整除，如果不能则在前一个成员后面补充字节
结构体总体大小能够被最宽的成员的大小整除，如不能则在后面补充字节