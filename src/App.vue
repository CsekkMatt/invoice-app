  <template>
    <div class="app-container">
      <h1 class="app-title">Timesheet Generator</h1>
      <DatePicker v-model="selectedDate" class="date-picker" />
      <button @click="downloadTimesheet" class="download-button">Download Timesheet</button>
    </div>
  </template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import DatePicker from 'vue3-datepicker';

export default {
  name: 'App',
  components: {
    DatePicker
  },
  setup() {
    const selectedDate = ref(new Date())
    const downloadTimesheet = () => {
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

    return { selectedDate, downloadTimesheet }
  }
}
</script>

<style>
body {
  background-color: #0d1117;
  font-family: Arial, sans-serif;
  color: #c9d1d9;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  box-sizing: border-box;
}

.app-title {
  color: white;
  font-size: 2em;
  margin-bottom: 20px;
}

.date-picker,
.download-button {
  margin: 10px 0;
  padding: 10px;
  font-size: 1.2em;
}

.download-button {
  background-color: #238636;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #2ea44f;
}
</style>
