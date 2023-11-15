# AndroidStudio 环境相关

## SDK 相关

SDK 是 Software development kit 的缩写,译为软件开发工具包，也为辅助开发某一类软件的相关文档，范例和工具的集合。

### 选择 SDK

```
Please provide the path to the Android SDK.
If you do not have the Android SDK, you can obtain it from d.android.com/sdk.
```

在 Setting > Languages&Frameworks > Android SDK 界面，Edit Android SDK Location，进行 SDK Setup，下载 Android API 34。

### Gradle 同步失败

```
Gradle project sync failed. Basic functionality (e.g. editing, debugging) will not work properly. 
```

点击 `Try Again` 后显示

```
Unable to make field private static final java.util.Map java.lang.ProcessEnvironment.theCaseInsensitiveEnvironment accessible: module java.base does not "opens java.lang" to unnamed module @3e57cd70
```

经过网上查阅，了解到为 JDK 版本太高，与项目中使用的 JDK 版本不对应导致的。

### 修改 JDK 目录

在 Build, Execution, Deployment > Build Tools > Gradle 目录下，可以进行 JDK 的目录修改

