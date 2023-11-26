# 动态规划

## 最大子数组的和

### 题目描述

给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**子数组** 是数组中的一个连续部分。

### 1. 暴力解法

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int max = nums[0];
        for(int i = 0; i < nums.length; i++){
            int max_tmp = 0;
            for(int j = i; j < nums.length; j++){
                max_tmp += nums[j];
                if(max < max_tmp){
                    max = max_tmp;
                }
            }
        }
        return max;
    }
}
```

时间复杂度 $O(n^2)$ 的解答方案，运行时超时。

### 2. 动态规划

参考了 [经典动态规划问题 - 理解"无后效性"](https://leetcode.cn/problems/maximum-subarray/solutions/9058/dong-tai-gui-hua-fen-zhi-fa-python-dai-ma-java-dai/) 的题解 。

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int dp[] = new int[nums.length]; 
        dp[0] = nums[0];
        int max = dp[0];
        for(int i = 1; i < nums.length; i++){
            dp[i] = Math.max(nums[i], dp[i-1]+nums[i]);
            max = Math.max(dp[i], max);
        }
        return max;
    }
}
```

例如，示例 1 输入数组是 `[-2,1,-3,4,-1,2,1,-5,4]` ，我们可以求出以下子问题：

```
子问题 1：以 −2 结尾的连续子数组的最大和是多少；
子问题 2：以 1 结尾的连续子数组的最大和是多少；
子问题 3：以 −3 结尾的连续子数组的最大和是多少；
子问题 4：以 4 结尾的连续子数组的最大和是多少；
子问题 5：以 −1 结尾的连续子数组的最大和是多少；
子问题 6：以 2 结尾的连续子数组的最大和是多少；
子问题 7：以 1 结尾的连续子数组的最大和是多少；
子问题 8：以 −5 结尾的连续子数组的最大和是多少；
子问题 9：以 4 结尾的连续子数组的最大和是多少。
```

如果编号为 `i` 的子问题的结果是负数或者 0 ，那么编号为 `i + 1` 的子问题就可以把编号为 `i` 的子问题的结果舍弃掉，这是因为一个数加上零或负数的结果比自身更小，写出状态转移方程：

$dp[i]=max\{nums[i],dp[i−1]+nums[i]\}$

李煜东著《算法竞赛进阶指南》，摘录如下：：

> 为了保证计算子问题能够按照顺序、不重复地进行，动态规划要求已经求解的子问题不受后续阶段的影响。这个条件也被叫做无后效性。换言之，动态规划对状态空间的遍历构成一张有向无环图，遍历就是该有向无环图的一个拓扑序。


解决有后效性的办法是固定住需要分类讨论的地方，记录下更多的结果。在代码层面上表现为：
- 状态数组增加维度；
- 把状态定义得更细致、准确。

### 3. 分治 <badge text="高阶玩法，还没掌握" type="danger" />

