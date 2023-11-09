# 2023 春季安卓日常实习面经

```txt{2,4}
先问项目
安卓有哪几种页面通讯的方式
用过什么开源框架（消息总线#%￥#？）
jetpack 全家桶用过哪些
livedata 有什么能力 <!-- 待学习 -->
java 里弱引用和强引用分别用在什么场景 <!-- 待学习 -->
用到什么布局（为什么不用 constraintLayout）<!-- 待学习 -->
glide 和 OkHttp 的任务调度是怎么实现的（比如同时发起很多请求）<!-- 待学习 -->
handlerMessage 什么时候会发生内存泄漏（要怎么预防）<!-- 待学习 -->
handler 和 Activity 两者是怎么相互引用的？（这里没听懂，面试官语速太快太模糊了）<!-- 待学习 -->
handler 和 Activity 在链表中的顺序是怎么样的？<!-- 待学习 -->
http 协议有哪些跟缓存相关的属性？<!-- 待学习 -->
kotlin 比 java 新的地方在哪
知道哪些高阶函数
在技术上有没有学其他方面的知识？

作者：JojoYo
链接：https://www.nowcoder.com/discuss/478285765923913728
来源：牛客网
```

## 安卓有哪几种页面通讯的方式

### 页面数据传递的两种方式

1. 第一种数据传递的方式是通过 `inputExtra` 方法来进行数据的传递的，适用一次传参；
2. 第二中方法是通过 `bundle` 的方法来实现数据的传递的，可多次传参；

**MainActivity**，两种方法实现：

```java{16,21-23}
public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.start).setOnClickListener(this);
        findViewById(R.id.start2).setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        switch(view.getId()) {
            case R.id.start:
                Intent intent = new Intent(MainActivity.this,SecondActivity.class);
                intent.putExtra("Demo", "你的名字");
                startActivity(intent);
                break;
            case R.id.start2
                Intent intent1 = new Intent(MainActivity.this,ThreeActivity.class);
                Bundle bundle = new Bundle();
                bundle.putString("name","第三个activity");
                intent1.putExtras(bundle);
                startActivity(intent1);
                break;

        }
    }
}
```

**SecondActivity**，使用 `getStringExtra()` 实现：

```java{8}
public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        Intent intent = getIntent();
        String name  =  intent.getStringExtra("Demo");
        Toast.makeText(SecondActivity.this,"获取到的名字为"+name,Toast.LENGTH_LONG).show();
    }
}
```

**ThirdActivity**，使用 `bundle` 实现：

```java{8-9}
public class ThreeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_three);
        Intent intent1 = getIntent();
        Bundle bundle = intent1.getExtras();
        String name = bundle.getString("name");
        Toast.makeText(ThreeActivity.this,"获取到的用户名"+name,Toast.LENGTH_LONG).show();
    }
}
```

### 一次传参和多次传参

**一次传参**使用 `intent` 的 `putExtra()` 函数直接传参即可，传入数据代码如下：

```java
Intent intent1 = new Intent(A.this, B.class);
intent1.putExtra("key", value);
startActivity(intent1);
```

取出数据代码如下：

```java
Intent intent2 = getIntent();
Value value = intent2.getStringExtra("key");
```

**多次传参**使用 `intent` 的 `putExtras()` 函数配合 `bundle` 传参即可，传入数据代码如下：

```java
Intent intent1 = new Intent(A.this, B.class);
Bundle bundle = new Bundle();
bundle.putInt("num", 1);
bundle.putString("string", "theString");
intent1.putExtras(bundle);
startActivity(intent1);
```

取出数据代码如下：

```java
Intent intent2 = getIntent();
Bundle bundle = intent2.getExtras();
Int int  = bundle.getInt("num");
String string = bundle.getString("string");
```

### `Intent` 传入数组

```java
bundle.putStringArray("StringArray", new String[]{"xx","oo"});
```

## jetpack 全家桶用过哪些

https://zhuanlan.zhihu.com/p/334350927

通常在面试的最后阶段，我会问一下他们对 Jetpack 的理解，旨在考察他们对目前 Android 主流开发技术的掌握程度以及是否还保持着对新技术持续学习的能力。

在 Jetpack 的官方文档中是这样对它定义的：

> Jetpack 是一套组件库，可帮助开发人员遵循最佳实践，减少样板代码并编写可在 Android 版本和设备上一致工作的代码，以便开发人员可以专注于他们关心的代码。

根据定义其实可以提炼出两个核心点：

1. **它是一套组件库**。（说明它是由许多个不同的组件库构成，并不是一个单一的组件库）

2. **使用 Jetpack 可以帮助我们在不同的 Android 版本和不同的设备上，实现行为一致的工作代码。**（说明 Jetpack 可以轻松的处理由 Android 版本不一致和设备不同产生的差异性和兼容性问题）

将 Jetpack 的 85 个组件库进行了下面的分类和标签整理如下，标粗表示使用过的：

**第一个是核心类**（8个），你也可以把它理解为基础类，也就是说我们一个最基本的 Android 工程都会默认依赖这些组件库，包括：**activity**、arch.core、**annotation**、collection、core、customview、**fragment**、appcompat；

::: warning `annotation` 使用案例

https://developer.android.google.cn/studio/write/annotations?hl=zh-cn#java

**`null` 性注解**

添加 `@Nullable` 和 `@NonNull` 注解，以检查给定变量、参数或返回值的 null 性。`@Nullable` 注解用于指明可为 null 的变量、参数或返回值。`@NonNull` 则用于指明不可为 null 的变量、参数或返回值。

**资源注解**

如果代码需要一个参数来引用特定类型的资源（例如 String），可为该代码传递预期的引用类型 int，但它实际上会引用其他类型的资源，如 `R.string` 资源。

例如，添加 `@StringRes` 注解，以检查资源参数是否包含 `R.string` 引用，如下所示：

```java
public abstract void setTitle(@StringRes int resId)
```

**值约束注解**

使用 `@IntRange`、`@FloatRange` 和 `@Size` 注解可以验证所传递参数的值。`@IntRange` 和 `@FloatRange` 在应用到用户可能会弄错范围的参数时最为有用。

`@IntRange` 注解可以验证整型或长整型参数值是否在指定范围内。以下示例表明 `alpha` 参数必须包含 0 到 255 之间的整数值：

```java
public void setAlpha(@IntRange(from=0,to=255) int alpha) { ... }
```

`@FloatRange` 注解可以检查浮点型或双精度型参数值是否在指定的浮点值范围内。以下示例表明 `alpha` 参数必须包含 0.0 到 1.0 之间的浮点值：

```java
public void setAlpha(@FloatRange(from=0.0, to=1.0) float alpha) {...}
```

`@Size` 注解可以检查集合或数组的大小，或字符串的长度。`@Size` 注解可用于验证以下特性：

- 最小大小（例如 `@Size(min=2)`）
- 最大大小（例如 `@Size(max=2)`）
- 确切大小（例如 `@Size(2)`）


大小的数字必须是指定数字的倍数（例如 `@Size(multiple=2)`），例如，`@Size(min=1)` 可以检查某个集合是否不为空，`@Size(3)` 可以验证某个数组是否正好包含三个值。

以下示例表明 `location` 数组必须至少包含一个元素：

```java
void getLocation(View button, @Size(min=1) int[] location) {
    button.getLocationOnScreen(location);
}
```

**权限注解**

使用 `@RequiresPermission` 注解可以验证方法调用方的权限。若要检查有效权限列表中是否存在某个权限，请使用 `anyOf` 属性。若要检查是否具有某组权限，请使用 `allOf` 属性。以下示例会为 `setWallpaper()` 方法添加注解，以表明该方法的调用方必须具有 `permission.SET_WALLPAPERS` 权限：

```java
@RequiresPermission(Manifest.permission.SET_WALLPAPER)
public abstract void setWallpaper(Bitmap bitmap) throws IOException;
```

以下示例要求 `copyImageFile()` 方法的调用方具有对外部存储空间的读取权限，以及对复制的映像中的位置元数据的读取权限：

```java
@RequiresPermission(allOf = {
    Manifest.permission.READ_EXTERNAL_STORAGE,
    Manifest.permission.ACCESS_MEDIA_LOCATION})
public static final void copyImageFile(String dest, String source) {
    //...
}
```
:::

**第二个是架构组件**（10个），Jetpack 推出之后很令人兴奋的一点，就是 Google 引入了现代 Android 应用开发的架构指南，结合 MVVM 的架构设计，帮助我们轻松的处理 UI 与业务逻辑之间的关系，包括：databinding、hilt、room、lifecycle、navigation、paging、startup、work、datastore、savedstate；

**第三个是 UI 组件**（22个），这里需要说明一点，大多数的 UI 组件其实都包含着核心组件中的 appcompat * 中了，这里列出的是 Jetpack 中以独立组件库存在的 UI 组件，包括：browser、drawerlayout、interpolator、compose、dynamicanimation、palette、constraintlayout、emoji、recycleview、coordinatorlayout、swiperefreshlayout、transition、vectordrawable、viewpager2、webkit、material design components；

**第四个是特殊业务组件**（16个），根据不同的业务场景，选择性使用；

**第五个是用不着的组件**（15个），这个完全是处于我个人出发，目前我从事的是 Android 互联网项目的开发，所以涉及游戏、车载、TV 等或平时极少使用的组件，我都规整到这一类中了；

**第六个是弃用的组件**（11个），有一些是因为官方不再更新维护了，有一些是在 Jetpack 中有更好的替代解决方案，如果我们的项目中还在使用这些组件库的话，建议尽快替换到最新的替代组件上；

**第七个是用于测试的组件**（2个）。
