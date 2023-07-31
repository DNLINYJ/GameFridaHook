var baseAddr = Module.findBaseAddress("Game.exe"); // 使用实际的模块名替换target_module_name。

// 计算函数地址
// var functionAddr = baseAddr.add(0x1D70910);
// console.log("函数地址: " + functionAddr);

// Interceptor.attach(functionAddr, {
//     onEnter: function(args) {
//         this.outKeyPtr = args[2];
//         var outKeyByteArray = Memory.readByteArray(this.outKeyPtr, 32);
//         console.log("OutKey1: ");
//         console.log(outKeyByteArray);
//     },
//     onLeave: function(retval) {
//         // 使用在 'onEnter' 中存储的 OutKey 指针
//         var outKeyByteArray = Memory.readByteArray(this.outKeyPtr, 32);
//         console.log("OutKey2: ");
//         console.log(outKeyByteArray);
//     }
// });

// var func2 = baseAddr.add(0x1D8B080);
// Interceptor.attach(func2, {
//     onEnter: function(args) {
//         this.v8BufPtr = args[0]; // 第一个参数通常是目标内存的位置，这应该是 v8 的位置
//     },
//     onLeave: function(retval) {
//         console.log('v8 (After sub_14454CAD3 execution):', hexdump(this.v8BufPtr, {
//             length: 240 // 内存空间大小，根据你的设定，为 240 字节
//         }));
//     }
// });

var func3 = baseAddr.add(0x1D58D60);
Interceptor.attach(func3, {
    onEnter: function(args) {
        this.EncryptionKeyPtr = args[4]; // 第一个参数通常是目标内存的位置，这应该是 v8 的位置
    },
    onLeave: function(retval) {
        // 使用在 'onEnter' 中存储的 OutKey 指针
        var outKeyByteArray = Memory.readByteArray(this.EncryptionKeyPtr, 32);
        console.log("OutKey3: ");
        console.log(outKeyByteArray);
    }
});


