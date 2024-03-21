import axios from 'axios'
import { BulletinItem } from '../types/BulletinItem'

type BulletinItemPage = {
  content: BulletinItem[],
  totalElements: number
}

export const deleteBulletinItems = async (idList: number[]): Promise<void> => {
  await axios.delete(`/bulletinBoard?rowIds=${idList.join(',')}`)
}

export const fetchBulletinItems = async (page: number): Promise<BulletinItemPage> => {
  const response = await axios.get(`/bulletinBoard`, {
    params: {
      page,
      size: 5,
    },
  })
  return response.data
}

