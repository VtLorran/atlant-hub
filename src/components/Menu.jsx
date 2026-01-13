import MenuButton from "./ui/MenuButton";
import {
  ClipboardList,
  Headset,
  Heart,
  MessageCircleMore,
  Settings,
} from "lucide-react";

function Menu() {
  return (
    <div className="bg-white rounded-3xl p-3 h-100 w-60">
      <div className="flex flex-col mt-3 mb-3 gap-2">
        <button className="bg-[#071638] text-white p-3 cursor-pointer rounded-3xl text-lg">
          Entre
        </button>
        <button className="cursor-pointer">Registrar</button>
        <hr className="text-black/10" />
      </div>
      <MenuButton page ={"/Pedidos"} name="Pedidos" icon={<ClipboardList />} />
      <MenuButton name="Chat" icon={<MessageCircleMore />} />
      <MenuButton page={"/Desejos"} name="Lista de Desejos" icon={<Heart />} />
      <MenuButton name="Configurações" icon={<Settings />} />
      <MenuButton name="Central de Ajuda" icon={<Headset />} />
    </div>
  );
}

export default Menu;
