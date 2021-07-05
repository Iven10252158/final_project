import emitter from '@/methods/mitt'

export default function (res, status = '更新') {
  if (res.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${status}成功`
    })
  } else {
    // 有些訊息是字串，有些則是陣列，在此統一格式
    const message = typeof res.data.message === 'string' ? [res.data.message] : res.data.message
    emitter.emit('push-message', {
      style: 'danger',
      title: `${status}失敗`,
      content: message.join('、')
    })
  }
}
