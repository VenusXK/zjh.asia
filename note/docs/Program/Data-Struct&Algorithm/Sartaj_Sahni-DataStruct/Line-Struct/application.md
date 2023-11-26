# 线性表的应用

## 箱子排序算法

箱子排序在我的理解中类似成绩排名，即根据成绩对学生的名字进行排名，总结来说：**排的是成绩，显示的是名字**。

### 思路

根据分数的范围设置箱子链表数组，将数据项胡乱放入箱子，总之放完即可，再按固定顺序根据成绩取出，就达到了目的。

### 完整代码

```cpp
void binSort(chain<studnetReocrd> theChain, int range){
    chain<studentRecord> * bin = new chain<studentRecord>[range];

    // insert box
    int numberOfElements = theChain.size();
    for(int i = 0; i < numberOfElements; i++){
        studentRecord theRecord = theChain.get(0);
        theChain.erase(0);
        box[theRecord.score].insert(0, theRecord);
    }

    // out & link box
    // 1 > 2 > ... > range
    for(int i = range; i >= 0; i--){
        while(!box[i].empty()){
            studentRecord theRecord = box[i].get(0);
            box[i].erase(0);
            theChain.insert(0, theRecord);
        }
    }

    delete [] bin;
}
```