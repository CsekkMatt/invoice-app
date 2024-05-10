<template>
  <div id="app">
    <h1>Invoice Downloader</h1>
    <date-picker v-model="selectedDate"></date-picker>
    <button @click="downloadInvoice">Download Invoice</button>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification'
import { ref } from 'vue'
import axios from 'axios'
import DatePicker from 'vue3-datepicker'

export default {
  name: 'App',
  components: {
    DatePicker
  },
  setup() {
    const selectedDate = ref(new Date())

    const downloadInvoice = () => {
      const year = selectedDate.value.getFullYear()
      const month = selectedDate.value.getMonth() + 1
      const yearMonth = `${year}-${month.toString().padStart(2, '0')}`
      const toast = useToast()
      axios.get(`https://quarkus-azure-functionn-1703850888742.azurewebsites.net/api/invoice?month=${yearMonth}`)
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', `TimeSheet_Petok_Mate_${yearMonth}.xlsx`)
          document.body.appendChild(link)
          link.click()
        })
        .catch(error => {
          console.error('Error downloading invoice:', error)
          toast.error('Error downloading invoice');
        })
    }

    return { selectedDate, downloadInvoice }
  }
}
</script>

<style>
/* Add your styles here */
</style>