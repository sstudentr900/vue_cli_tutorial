<template>
    <div>
        <p>從provide來的值不會與上層資料連動 : {{ provideMsg }}</p>
        <p>從provide+computed來的值會與上層資料連動 : {{ provideMsg2 }}</p>
    </div>
</template>

<script>
export default {
    inject: ['provideMsg','provideMsg2'],
}
</script>
