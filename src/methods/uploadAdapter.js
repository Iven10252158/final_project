import axios from 'axios'

export default class UploadAdapter {
  constructor (loader) {
    this.loader = loader
  }

  upload () {
    return this.loader.file
      .then((file) => new Promise((resolve) => {
        this.sendRequest(file, resolve)
      }))
  }

  sendRequest (file, resolve) {
    // const file = fileInput.files[0];
    const formData = new FormData()
    formData.append('file-to-upload', file)
    axios.post(`${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`, formData)
      .then((res) => {
        console.log(res)
        this.loader.imageUrl = res.data.imageUrl
        resolve({ default: res.data.imageUrl })
      })
  }
}
