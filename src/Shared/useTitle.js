import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Music Theory | ${title}`;
    },[title])
}

export default useTitle;