import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../links";
import styled from "styled-components";
import { toggleSidebar } from "../redux/feature/UISlice";
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.UI);
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : "sidebar"}>
        <div className='sidebar-content'>
          <button
            className='close-btn'
            onClick={() => dispatch(toggleSidebar())}
          >
            <AiOutlineClose />
          </button>
          <ul className='sidebar-links'>
            {navLinks.map((navLink) => {
              return (
                <li
                  className='sidebar-link'
                  key={navLink.id}
                  onClick={() => dispatch(toggleSidebar())}
                >
                  <a href={navLink.url}>{navLink.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }
  .show-sidebar {
    opacity: 1;
    z-index: 3;
  }
  .sidebar-content {
    width: 200px;
    transform: translateX(-100%);
    background-color: var(--white);
    height: 100%;
    position: relative;
    transition: all 0.3s ease-in-out;
  }
  .show-sidebar .sidebar-content {
    transform: translateX(0);
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
    border-color: transparent;
    background-color: transparent;
    svg {
      font-size: 1.25rem;
    }
  }
  .sidebar-links {
    padding: 4rem 1rem;
  }
  .sidebar-link {
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--black);
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;
