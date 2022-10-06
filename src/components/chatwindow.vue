<template lang="">
<div class="chat-window">
    <div v-if="error">{{error}}</div>
    <div v-if="document" class="messages" ref="messages">
        <div v-for="doc in formatdocument" :key="doc.id" class="single">
            <span class="createdat">{{doc.createdAt}}</span>
            <span class="name">{{doc.name}}</span> :
            <span class="message">{{doc.message}}</span>
        </div>
    </div>
</div>
</template>

<script>
import getcollection from '../composables/getCollections'
import { formatDistanceToNow } from 'date-fns'
import {computed , onUpdated , ref} from 'vue'

export default {
    setup() {
        const {
            error,
            document
        } = getcollection('messages')
        const formatdocument = computed(() => {
            if (document.value) { //fomating data to '2days to now'
                return document.value.map((doc) => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())

                    return {...doc , createdAt: time}
                })
            }
        })
        //auto scroling function using ref in messages class *****

        const messages = ref(null)

        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return {
            error,
            document,
            formatdocument,
            messages
        }
    }
}
</script>

<style>
.chat-window {
    background: #13024a;
    padding: 30px 20px;
}

.single {
    margin: 18px 0;
}

.createdat {
    display: block;
    color: #c9c9c9;
    font-size: 12px;
    margin-bottom: 4px;
}

.name {
    font-weight: bold;
    margin-right: 6px;
    color: #e5e5e5;
}

.messages {
    max-height: 400px;
    overflow: auto;
    color: #fff;
    font-weight: lighter;
    margin: -18px 8px;
}
</style>
