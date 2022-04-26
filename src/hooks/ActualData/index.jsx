import { useParams } from 'react-router-dom'
import datas from '../../datas'

function ActualData() {
  let { id } = useParams()

  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === id) {
      return datas[i]
    }
  }
}

export default ActualData
