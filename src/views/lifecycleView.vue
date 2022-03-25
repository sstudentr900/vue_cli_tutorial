<template>
    <div>
        <h2>生命週期</h2>
        <ol>
            <li>
                created：實例已創建，完成初始化資料
                <ul>
                    <li>已配置選項 data 、computed、methods、watch</li>
                    <li>HTML 尚未被渲染，尚未生成 DOM，因此若直接操作 DOM 節點會找不到元素</li>
                </ul>
            </li>
            <br>
            <li>
                mounted：實例已掛載，完成編譯 template 內容
                <ul>
                    <li>HTML 已渲染至頁面上，此時可找到 DOM 節點並加以操作</li>
                </ul>
            </li>
        </ol>
    </div>
</template>