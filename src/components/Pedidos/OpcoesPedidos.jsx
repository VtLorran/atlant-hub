import { CreditCard, LocationEdit, MessageSquareMore, Settings, Ticket, Undo, User } from "lucide-react";
import MenuButton from "../ui/MenuButton";

function OpcoesPedidos() {
    return (
        <section className="bg-white rounded-2xl p-3 h-85 sm:w-140 md:w-60 w-90 flex flex-col lg:w-60">
            <MenuButton name={'Produtos'} icon={<Ticket/>} />
            <MenuButton name={'Pagamento'} icon={<CreditCard/>} />
            <MenuButton name={'Comentários'} icon={<MessageSquareMore/>}/>
            <MenuButton name={'Endereço'} icon={<LocationEdit/>} />
            <MenuButton name={'Devoluções'} icon={<Undo/>} />
            <MenuButton name={'Ajustes'} icon={<Settings/>} />
            
        </section>
    )
}

export default OpcoesPedidos;