import axios from 'axios';

export async function downloadInvoice(yearMonth) {
    const response = await axios.get(`${process.env.VUE_APP_REPORT_FUNCTION_URL}/invoice?month=${yearMonth}`)
    return response
}