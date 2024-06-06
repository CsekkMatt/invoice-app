  <template>
    <div class="app-container">
      <h1 class="app-title">Timesheet Generator</h1>
      <DatePicker v-model="selectedDate" class="date-picker" />
      <button @click="downloadTimesheet" class="download-button">Download Timesheet</button>
      <div class="ripple-loader" v-if="isLoading">
        <div></div>
        <div></div>
      </div>
    </div>
  </template>

<script>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import DatePicker from 'vue3-datepicker';
import { downloadInvoice } from './service/invoiceService';

export default {
  name: 'App',
  components: {
    DatePicker
  },
  setup() {
    const selectedDate = ref(new Date())
    const isLoading = ref(false);
    const downloadTimesheet = async () => {
      isLoading.value = true;
      const year = selectedDate.value.getFullYear()
      const month = selectedDate.value.getMonth() + 1
      const yearMonth = `${year}-${month.toString().padStart(2, '0')}`
      const toast = useToast();
      try {
        const response = await downloadInvoice(yearMonth);
        console.log('Downloaded invoice:', response.data);
        window.location.href = response.data;
      }
      catch (error) {
        console.error('Error downloading invoice:', error)
        toast.error('Error downloading invoice');
      }
      finally {
        isLoading.value = false;
      }
    }
    return { selectedDate, downloadTimesheet, isLoading }
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

.ripple-loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.ripple-loader div {
  position: absolute;
  border: 4px solid #3498db;
  opacity: 1;
  border-radius: 50%;
  animation: ripple-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ripple-loader div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes ripple-loader {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
