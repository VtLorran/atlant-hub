import { useNavigate } from "react-router-dom";

function MenuButton({ name, icon, page }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(page)}
      className="group cursor-pointer flex text-lg items-center hover:bg-stone-300/30 w-full p-3 rounded-2xl gap-2"
    >
      {icon}
      <p className=" group-hover:text-red-400">{name}</p>
    </button>
  );
}

export default MenuButton;
