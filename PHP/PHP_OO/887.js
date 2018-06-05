'https://www.imooc.com/learn/887';
'PHP-面向对象'

.重用性
.扩展性
.灵活性


1-2 类和对象的介绍和使用

2-1 类的构造方法和析构方法

2-2 类的继承以及'final'关键字

2-3 命名空间

2-4 类的自动加载

2-5 后期静态绑定
		static 后期静态绑定，谁调用，就查找谁的static函数

2-6 魔术方法
		__invoke($arg)  当对象被以函数的方式来调用时，内部的__invoke() 方法将自动运行; 例如： $obj($arg);


2-7 对象拷贝和类型约束
		1 变量赋值的两种情形 浅拷贝 深拷贝
		2 在 PHP 中，'对象'的赋值是浅拷贝的，也就是说是 地址传递 的。
		3 深拷贝的实现，使用关键字 clone 。 例如： $ObjectB = clone $ObbjectA;

2-8 Trait 关键字
		为了解决 PHP 作为单继承语言的问题
		Trait 类是一种特殊的类 自建立之起就是为了让子孙类调用的 使用 use 关键字

2-9 接口类和抽象类以及设计模式...
		单例模式 单例模式能够确保一个类只有一个实例 重点知识!!!
		工厂模式 主要是为乐解决一个类散落在项目各处的实例 有一天更换另一个类时 需要在庞大的项目中修改无数个实例的问题