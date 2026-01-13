import { useNavigate } from "react-router-dom";

function ButtonDesejos({ name, icon, page }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(page)}
      className="group w-full cursor-pointer flex items-start gap-3 p-3 rounded-2xl text-lg hover:bg-stone-300/30"
    >
      <span className="shrink-0 mt-1">
        {icon}
      </span>

      <p className="text-left leading-tight group-hover:text-red-400">
        {name}
      </p>
    </button>
  );
}

export default ButtonDesejos;
