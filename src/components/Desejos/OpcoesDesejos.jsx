import { Cpu, Grid2X2, Leaf, Server } from "lucide-react";
import MenuButton from "../ui/MenuButton";
import ButtonDesejos from "./ButtonDesejos";

function OpcoesDesejos() {
    return (
        <section className="bg-white rounded-2xl p-3 h-70 sm:w-140 md:w-60 w-90  flex flex-col lg:w-60">
            <ButtonDesejos name={'Todos'} icon={<Grid2X2/>} />
            <ButtonDesejos name={'Materiais e insumos'} icon={<Leaf/>} />
            <ButtonDesejos name={'Equipamentos e Tecnologias'} icon={<Cpu/>}/>
            <ButtonDesejos name={'Serviços'} icon={<Server/>} />
        </section>
    )
}

export default OpcoesDesejos;