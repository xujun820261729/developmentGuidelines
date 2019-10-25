#### [H5]  FileReader 此特性在 Web Worker 中可用。
对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。(如.json、img等)

- node：
FileReader仅用于以安全的方式从用户（远程）系统读取文件内容 它不能用于从文件系统中按路径名简单地读取文件。 要在JavaScript中按路径名读取文件，应使用标准Ajax解决方案进行服务器端文件读取，如果读取跨域，则使用CORS权限。

#### api
1. FileReader.readAsDataURL(File) //开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容。
2. FileReader.readAsText() //转换成字符串格式
3. FileReader.readAsArrayBuffer(File) //转换成ArrayBuffer格式
4. FileReader.readAsBinaryString(File) //转换成原始二进制格式
5. FileReader.abort() 中止读取操作。在返回时，readyState属性为DONE。

#### 生命钩子
1. onload 该事件在读取操作完成时触发。
2. onerror 该事件在读取操作发生错误时触发。
3. onabort  该事件在读取操作被中断时触发。
4. onloadend 该事件在读取操作结束时（要么成功，要么失败）触发。
5. onprogress 处理progress事件。该事件在读取Blob时触发。
