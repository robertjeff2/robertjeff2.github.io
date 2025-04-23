# leetcode

## 刷题顺序

[代码随想录](https://programmercarl.com/)
数组-> 链表-> 哈希表->字符串->栈与队列->树->回溯->贪心->动态规划->图论->高级数据结构

## 数组

### 704. 二分查找

思路:双指针做二分查找,注意边界条件,不断收缩区间,直到找到目标值或者区间为空,更新的时候如果是 l 则更新 mid 位 l+1,如果是 r 则更新 mid 位 r-1

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 双指针实现
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    //取重点
    let mid = (l + r) >> 1;
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) {
      //说明目标处于[l,mid-1],更新r
      r = mid - 1;
    } else {
      //说明目标处于[l+1,mid],更新l
      l = mid + 1;
    }
  }
  return -1;
};
```
