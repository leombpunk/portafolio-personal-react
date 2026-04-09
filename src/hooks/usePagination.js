import { useEffect, useState } from "react"

const usePagination = (itemsList=[]) => {
  const [list, setList] = useState(itemsList)
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(Math.round(itemsList.length/4))
  const [totalItems, setTotalItems] = useState(itemsList.length)

  const setPage = (value) => {
    if (value <= totalPages && value > 0) {
      setCurrentPage(value)
    }
  }

  useEffect(() => {
    let start = (currentPage * 4) - 4
    let end = (currentPage * 4) // qué pasa si excedo el indice máximo?
    console.log({start,end})
    setItems(list.slice(start, end > list.length - 1 ? list.length - 1 : end))
    console.log({result: end > list.length ? list.length - 1 : end})
  },[currentPage, list])


  return {
    items,
    currentPage,
    totalPages,
    totalItems,
    setPage
  }
}


export default usePagination