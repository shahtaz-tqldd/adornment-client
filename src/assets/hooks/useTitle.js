import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Adornment ${title}`
    },[title])
}

export default useTitle;