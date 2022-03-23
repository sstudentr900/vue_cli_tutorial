<template>
    <div>
        <input
            type="text"
            @input="$emit('searchBook', $event)" />
    </div>
</template>

<script>
export default {
}
</script>
