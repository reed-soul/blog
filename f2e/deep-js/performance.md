# 性能优化

## dom

### [使用现代JavaScript进行内存高效DOM操作的模式](https://frontendmasters.com/blog/patterns-for-memory-efficient-dom-manipulation/)

* 避免动态创建 DOM 节点
* 尽量使用隐藏/显示现有元素,而不是动态创建和插入新元素。这样可以避免频繁的垃圾回收操作,提高性能。
* 如果必须创建新元素,可以使用 <template> 标签预先定义好模板,然后使用 cloneNode() 和 appendChild() 等方法高效地插入。
* 使用 textContent 而不是 innerText
* textContent 比 innerText 更快,因为它不需要检查元素的样式信息。
* 使用 insertAdjacentHTML() 而不是 innerHTML
* insertAdjacentHTML() 不需要先清空元素内容,性能更好。
* 使用 DocumentFragment 批量插入元素
* 使用 DocumentFragment 可以将多个元素一次性插入到 DOM 中,减少重绘和重排的次数。
* 管理 DOM 节点移除时的引用
* 使用 WeakMap 和 WeakRef 可以避免移除 DOM 节点时,相关数据无法被垃圾回收器清理的问题。