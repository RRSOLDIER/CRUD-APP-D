<script setup>
import {defineComponent, ref, onMounted} from 'vue'
import {db} from '../firebase.js'
import { collection,addDoc , doc , updateDoc} from 'firebase/firestore'

 const props = defineProps({
    data: Object,
    isNew: Boolean 
 })

defineComponent({
    name: 'AddOrUpdate'
})

const emits = defineEmits(['close'])

onMounted(() => {
    task.value = {...task.value , ...props.data}

})
const task = ref ({
    name: '',
    Description: ''
})

async function addOrUpdate() {
    if(props.isNew) {
      await addDoc(collection(db, 'tasks'),task.value).then((res) => {
        emits('close')
      })
    }
    else {
     await updateDoc(doc(db, 'tasks',props.data.id), task.value).then((res) => {
        emits('close')
     })
    }
}
</script>

<template>
  <transition name="modal">
  <div class="modal-overlay">
    <div class="modal-wrapper">
      <div class="modal-container">
       <input type="text" placeholder="Enter name" v-model="task.name" />
       <textarea placeholder="Enter description" v-model="task.Description" />
       <button @click="emits('close')">Close</button>
       <button @click="addOrUpdate()">{{isNew  ? 'Add' : 'Update'}}</button>
      </div>
    </div>
    </div>
  </transition>
</template>

<style>
 .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height:100vh;
    background: rgba(0,0,0,0.3);
    transition: opacity .3 ease;
 }

 .modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

 }

 .modal-container{
    background: white;
    width: 300px;

 }

 input, textarea {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    overflow: hidden;



 }
</style>