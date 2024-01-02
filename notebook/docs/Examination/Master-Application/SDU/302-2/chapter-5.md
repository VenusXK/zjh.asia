# 特征值和特征向量

## 常用结论

### 特征方程

$|\lambda E - A |= 0$ 为矩阵 $A$ 的特征方程，$\lambda$ 为 $A$ 的特征值。

### 矩阵相似

$A$ 和 $B$ 相似，记作 $A \sim B$，当且仅当存在可逆矩阵 $P$，使 $P^{-1}AP = \land$，其中 $\land$ 为对角矩阵，称 $A$ 可以相似对角化。

矩阵相似性质：

- $A \sim A$
- $A \sim B \Rightarrow B \sim A$，$A^T \sim B^T$，$|A| = |B|$，$r(A) = r(B)$，$tr(A) = tr(B)$，特征值相同，特征多项式相同，特征向量相同
- $A \sim B$，$B \sim C$，则 $A \sim C$
- 设 $f(x)$ 为 $n$ 次多项式，$A \sim B$，则 $f(A) \sim f(B)$
- 若 $A,B$ 可逆，则 $A \sim B$，$A^{-1} \sim B^{-1}$，$A^* \sim B^*$

### 施密特正交化

把线性无关的向量组 $\alpha_1, \alpha_2, ... , \alpha_n$ 变为正交且规范的向量组 $\beta_1, \beta_2, ... , \beta_n$ 的过程。

#### 1. 正交化

把向量组 $\alpha_1, \alpha_2, ... , \alpha_n$ 变为正交向量组 $\beta_1, \beta_2, ... , \beta_n$ 的过程。

- $\beta_1 = \alpha_1$$
- $\beta_2 = \alpha_2 - \frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)}\beta_1$
- $\beta_3 = \alpha_3 - \frac{(\alpha_3, \beta_1)}{(\beta_1, \beta_1)}\beta_1 - \frac{(\alpha_3, \beta_2)}{(\beta_2, \beta_2)}\beta_2$
- ... ...
- $\beta_n = \alpha_n - \frac{(\alpha_n, \beta_1)}{(\beta_1, \beta_1)}\beta_1 - \frac{(\alpha_n, \beta_2)}{(\beta_2, \beta_2)}\beta_2 - ... - \frac{(\alpha_n, \beta_{n-1})}{(\beta_{n-1}, \beta_{n-1})}\beta_{n-1}$

#### 2. 规范化

把向量组 $\alpha_1, \alpha_2, ... , \alpha_n$ 变为规范正交向量组 $\beta_1, \beta_2, ... , \beta_n$ 的过程。

令 $\gamma_i = \frac{\beta_i}{|\beta_i|}$，则 $\gamma_1, \gamma_2, ... , \gamma_n$ 为规范正交向量组。

#### 3. 正交矩阵

设 $Q$ 为 $n$ 阶方阵，若 $Q^TQ = E$，或者 $QQ^T = E$，则称 $Q$ 为正交矩阵。

### 特征值和特征向量的性质

#### 1. 一般性质

设 $A$ 为 $n$ 阶矩阵，$\lambda_i$ 为 $A$ 的特征值，则有：

- $\lambda_1 + \lambda_2 + ... + \lambda_n = tr(A)$
- $\lambda_1\lambda_2...\lambda_n = |A|$

设 $A$ 为 n 阶矩阵，$\lambda_0$ 为 $A$ 的 $k$ 阶特征值，则有：

- 若 $k = 1$，则属于 $\lambda_0$ 的线性无关的特征向量只有一个
- 若 $k > 1$，则属于 $\lambda_0$ 的线性无关的特征向量不超过 $k$ 个



---


你好，我是温茜，一名来自山东大学的学生，我在学习线性代数的过程中，整理了一份笔记，希望能够帮助到你。

首先，今天我学习了矩阵的逆，矩阵的逆是什么呢？矩阵的逆就是一个矩阵，这个矩阵与原矩阵相乘，得到的是单位矩阵。这个矩阵的逆，我们用A的倒数来表示，A的倒数，就是A的逆矩阵。那么，矩阵的逆，有什么用呢？矩阵的逆，可以用来求解线性方程组，这个我们在后面的课程中会学到。那么，矩阵的逆，怎么求呢？我们来看一下，矩阵的逆，怎么求解。