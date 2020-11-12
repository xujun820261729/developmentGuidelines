## 算法 常用的10中算法

#### 1.希尔算法(shellsort)
1. 增量递减(diminishing increment)排序，是由D.L. Shell发明的，这个算法是通过一个逐渐减小的增量使一个数组逐渐趋近于有序从而达到排序的目的.
2. 时间复杂度是O(n ^1.5)
```javascript
// 1.如何理解: 先把数组对半切然后比较，一直对半切，从而减少计算次数
// 2. 
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    // 2.自定义间隔距离
    while(gap < len/6) {//动态定义间隔序列
        gap =gap*3+1;
    }
    // 3.Math.floor 向下取整的作用在于 当前 分为3段
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
```


#### 2.基数排序(RadixSort)
1. 是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。
2. 时间复杂度是O(n ^1.5)
```javascript
//LSD Radix Sort
// 思路：通过个位 十位 百位来排列缩小时间复杂度
    var counter = [];
    function radixSort(arr, maxDigit) {
        // 1.mod：用于取10 100 1000 这样的余数
        // 2.dev：用于 counter 确定索引
        // 3.maxDigit：当前最大的值的位数 如 300则用3 、20则用2 、3则用1
        var mod = 10;
        var dev = 1;
        // 外层
        for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
            for(var j = 0; j < arr.length; j++) {
                // 1. parseInt(num) 1.解析字符串;(num:为字符串则解析字符串去首位0； num：number则以10进制解析[比如: 011解析成3])； 2.小数情况取整数位置。
                // 2.arr[j] % mod： 取余
                var bucket = parseInt((arr[j] % mod) / dev);
                if(counter[bucket]==null) {
                    counter[bucket] = [];
                }
                counter[bucket].push(arr[j]);
            }
            var pos = 0;
            for(var j = 0; j < counter.length; j++) {
                var value = null;
                if(counter[j]!=null) {
                    // 1. while 这里作用是先判断后循环，因为每一项都是数组。
                    while ((value = counter[j].shift()) != null) {
                        arr[pos++] = value;
                    }
                }
            }
        }
        return arr;
    }

```


#### 3.计数排序
1. 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
2. 时间复杂度是 Θ(n + k) n：表示元素个数; k:表示整数大小。
```javascript
// 如何理解: 主要是循环2次，一次为数组的长度，一次为number的长度；
function countingSort(arr, maxValue) {
    var bucket = new Array(maxValue+1),
        sortedIndex = 0;
        arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (var i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
}

```


#### 4.桶排序
1. 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。
2. 最快?: 均匀放到每个桶; 最慢? 仅放一个桶中
3. 时间复杂度是 Θ(n + k) n：表示元素个数; k:表示整数大小。
```javascript
Array.prototype.bucketSort = function() {
    let len = this.length
    if (len < 2) {
        return
    }
    // 声明一个空桶, 将数据压入桶中
    const bucket = []
    this.forEach((one) => {
        if (bucket[one] !== undefined) {
          bucket[one]++
        } else {
          bucket[one] = 1
        }
    });
    // 声明一个新数组, 当做排序后的数组
    const newArr = []
    bucket.forEach((one, index) => {
        if (one !== undefined) {
          for (let i = 0; i < one; i++) {
            newArr.push(index)
          }
        }
    })
    // 这里this不能直接赋值数组，我们就只能采取splice剪切数组再替换新的
    this.splice(0, this.length, newArr)
}
```


#### 5.堆排序
1. 是指利用堆这种数据结构所设计的一种排序算法。
2. 时间复杂度是 Θ(n + k) n：表示元素个数; k:表示整数大小。
```javascript
//调整函数 暂时没有理解
function headAdjust(elements, pos, len){
  //将当前节点值进行保存
  var swap = elements[pos];
  //定位到当前节点的左边的子节点
  var child = pos * 2 + 1;
  //递归，直至没有子节点为止
  while(child < len){
    //如果当前节点有右边的子节点，并且右子节点较大的场合，采用右子节点
    //和当前节点进行比较
    if(child + 1 < len && elements[child] < elements[child + 1]){
      child += 1;
    }
    //比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位
    //于子节点上
    if(elements[pos] < elements[child]){
      elements[pos] = elements[child];
      pos = child;
      child = pos * 2 + 1;
    }
    else{
      break;
    }
    elements[pos] = swap;
  }
}

//构建堆
function buildHeap(elements){
  //从最后一个拥有子节点的节点开始，将该节点连同其子节点进行比较，
  //将最大的数交换与该节点,交换后，再依次向前节点进行相同交换处理，
  //直至构建出大顶堆（升序为大顶，降序为小顶）
  for(var i=elements.length/2; i>=0; i--){
    headAdjust(elements, i, elements.length);
  }
}

function sort(elements){
  //构建堆
  buildHeap(elements);
  //从数列的尾部开始进行调整
  for(var i=elements.length-1; i>0; i--){
    //堆顶永远是最大元素，故，将堆顶和尾部元素交换，将
    //最大元素保存于尾部，并且不参与后面的调整
    var swap = elements[i];
    elements[i] = elements[0];
    elements[0] = swap;
    //进行调整，将最大）元素调整至堆顶
    headAdjust(elements, 0, i);
  }
}

var elements = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8];
console.log('before: ' + elements);
sort(elements);
console.log(' after: ' + elements);

```

#### 6.快速排序
1. 快速排序是由东尼·霍尔所发展的一种排序算法。在平均状况下，排序 n 个项目要 Ο(nlogn) 次比较。