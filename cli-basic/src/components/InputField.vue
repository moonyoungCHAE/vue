<template>
    <div>
        <label for="">Name</label>
        <input
                type="text"
                :value="name"
                @input="updateName"/>
        <!-- input value 변경 시 발생하는 event -->
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: false
        }
    },
    methods: {
        updateName(e) {
            // 부모로 이벤트를 보내준다.
            this.$emit('update-name', e.target.value);
        }
    }
}
</script>