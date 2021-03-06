'http://www.runoob.com/regexp/regexp-syntax.html'
>>> 普通字符
	普通字符包括没有显式指定为元字符的所有可打印和不可打印字符。这包括所有大写和小写字母、所有数字、所有标点符号和一些其他符号。

>>> 非打印字符
	字符	:描述
	\cx	:匹配由x指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c :视为一个原义的 'c' 字符。
	\f	:匹配一个换页符。等价于 \x0c 和 \cL。
	\n	:匹配一个换行符。等价于 \x0a 和 \cJ。
	\r	:匹配一个回车符。等价于 \x0d 和 \cM。
	\s	:匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。
	\S	:匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
	\t	:匹配一个制表符。等价于 \x09 和 \cI。
	\v	:匹配一个垂直制表符。等价于 \x0b 和 \cK。

>>> 特殊字符

特别字符	描述
	$	匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。
	( )	标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。
	*	匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \*。
	+	匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 \+。
	.	匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 。
	[	标记一个中括号表达式的开始。要匹配 [，请使用 \[。[]代表一个字符!
	?	匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \?。
	\	将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， 'n' 匹配字符 'n'。'\n' 匹配换行符。序列 '\\' 匹配 "\"，而 '\(' 则匹配 "(" 
	^	匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。要匹配 ^ 字符本身，请使用 \^。
	{	标记限定符表达式的开始。要匹配 {，请使用 \{。
	|	指明两项之间的一个选择。要匹配 |，请使用 \|。



>>> 常用元字符
	代码	:说明
	.	:匹配除换行符以外的任意字符
	\w	:匹配字母或数字或下划线
	\s	:匹配任意的空白符
	\d	:匹配数字
	\b	:匹配单词的开始或结束
	^	:匹配字符串的开始
	$	:匹配字符串的结束

>>> 常用限定符
代码/语法	:说明
*		:重复零次或更多次
+		:重复一次或更多次
?		:重复零次或一次
{n}		:重复n次
{n,}	:重复n次或更多次
{n,m}	:重复n到m次

>>> 常用反义词

代码/语法		:说明
\W			:匹配任意不是字母，数字，下划线，汉字的字符
\S			:匹配任意不是空白符的字符
\D			:匹配任意非数字的字符
\B			:匹配不是单词开头或结束的位置
[^x]		:匹配除了x以外的任意字符
[^aeiou]	:匹配除了aeiou这几个字母以外的任意字符



>>> >>>正则进阶

>>> 懒惰限定符
　　"*?"		重复任意次，但尽可能少重复 
			如 "acbacb"  正则  "a.*?b" 只会取到第一个"acb" 原本可以全部取到但加了限定符后，只会匹配尽可能少的字符 ，而"acbacb"最少字符的结果就是"acb" 
　　"+?"		重复1次或更多次，但尽可能少重复
			与上面一样，只是至少要重复1次
　　"??"		重复0次或1次，但尽可能少重复
			如 "aaacb" 正则 "a.??b" 只会取到最后的三个字符"acb"
　　"{n,m}?"	重复n到m次，但尽可能少重复
			如 "aaaaaaaa"  正则 "a{0,m}" 因为最少是0次所以取到结果为空
　　"{n,}?"	重复n次以上，但尽可能少重复
			如 "aaaaaaa"  正则 "a{1,}" 最少是1次所以取到结果为 "a"

>>> 捕获分组
	"(exp)"				匹配exp,并捕获文本到自动命名的组里
	"(?<name>exp)"		匹配exp,并捕获文本到名称为name的组里
	"(?:exp)"			匹配exp,不捕获匹配的文本，也不给此分组分配组号
	以下为零宽断言
	"(?=exp)"			匹配exp前面的位置
						如 "How are you doing" 正则"(?<txt>.+(?=ing))" 这里取ing前所有的字符，并定义了一个捕获分组名字为 "txt" 而"txt"这个组里的值为"How are you do";
	"(?<=exp)"			匹配exp后面的位置
						如 "How are you doing" 正则"(?<txt>(?<=How).+)" 这里取"How"之后所有的字符，并定义了一个捕获分组名字为 "txt" 而"txt"这个组里的值为" are you doing";
	"(?!exp)"			匹配后面跟的不是exp的位置
						如 "123abc" 正则 "\d{3}(?!\d)"匹配3位数字后非数字的结果
	"(?<!exp)"			匹配前面不是exp的位置
						如 "abc123 " 正则 "(?<![0-9])123" 匹配"123"前面是非数字的结果也可写成"(?!<\d)123"



















