import _ from 'lodash'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export async function checkFetchJsonResult(response: Response) {
  if (response.status === 200) {
    return true
  }

  let resultJSON
  try {
    resultJSON = await response.json()
  } catch (error) {
    console.error('> checkFetchResult error: ', error)
  }

  // (VALIDATIONS)
  if (_.isArray(resultJSON)) {
    const myAlert = withReactContent(Swal)
    await myAlert.fire({
      title: 'server validation error',
      html: JSON.stringify(resultJSON, null, 2),
      confirmButtonText: 'close',
    })
  } else {
    console.error('> checkFetchResult resultJSON: ', resultJSON)
  }

  return false
}
