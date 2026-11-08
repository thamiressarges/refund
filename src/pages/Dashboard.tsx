import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

import searchSvg from '../assets/search.svg'

export function Dashboard(){
    const [name, setName] = useState('')

    function fetchRefunds(e: React.FormEvent){

    }

    return(
        <div className="bg-gray-500 rounded-xl p-10 md:min-w-[760px]">
            <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
        
            <form onSubmit={fetchRefunds} className="flex flex-1 items-center justify-center pb-5 border-b-[1px] border-b-gray-400 md:flez-row gap-2 mt-6">
                <Input
                    placeholder="Pesquisar pelo nome"
                    onChange={(e) => setName(e.target.value)}
                />

                <Button type="submit" variant="icon">
                    <img src={searchSvg} alt="Icone de pesquisar" className="w-5"/>
                </Button>
            </form>
        </div>
    )
}