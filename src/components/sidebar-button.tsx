import { useAppDispatch } from "../app/hooks";
import { SIDEBAR_BUTTON_TEXT } from "../constants";
import { toggleSidebar } from "../global/slices/scale-degree-slice";

const SidebarButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="sidebar-button"
      onClick={() => dispatch(toggleSidebar())}
    >
      {SIDEBAR_BUTTON_TEXT}
    </button>
  );
};

export default SidebarButton;
