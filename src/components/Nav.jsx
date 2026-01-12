import NavButton from "./ui/NavButton";
import { Cpu, Grid2x2, Leaf, Server } from 'lucide-react';

function Nav() {
    return  (
        <section className="w-full sm:p-3.5 bg-[#071638] sm:flex p-2 gap-y-2  lg:gap-[4rem] justify-center">
            <NavButton label={`Todos`} icon={<Grid2x2/>}/> 
            <NavButton label={`Materiais e insumos`} icon={<Leaf/>}/> 
            <NavButton label={`Equipamentos e tecnologias`} icon={<Cpu/>}/> 
            <NavButton label={`Serviços`} icon={<Server/>}/> 
        </section>
    )
}

export default Nav;