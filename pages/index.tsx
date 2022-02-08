import type { NextPage } from 'next'
import {useEffect} from "react";
import {useRouter} from "next/router";

const Index: NextPage = () => {

    const router = useRouter()

    useEffect(() => {
        router.replace('/home')
    },[])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // @ts-ignore
    useEffect(async () => {
        const d = await fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviOr2DsEZPA_lE6z4sCLXpw31W62veyMXUg&usqp=CAU").then((res) => res.blob())
        // const myFile = new File([d], 'new.jpg' , {
        //     type: d.type,
        // })
        // window.open(myFile,'_blank');
        console.log("DATA==>", d)
    },[])

    return null;
}

export default Index
