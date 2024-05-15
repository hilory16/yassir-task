import { useState, useRef, useEffect, useCallback } from "react";
import {
  node,
  any,
  bool,
  array,
  number,
  oneOf,
  string,
  oneOfType,
} from "prop-types";
import useClickOutside from "hooks/useClickOutside";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Portal } from "components/Portal";
import { DropdownWrapper, DropdownMenu, DropdownItem } from "./Dropdown.style";

export function Dropdown({
  children,
  trigger,
  options,
  direction,
  positionX,
  offsetTop,
  closeOnClickOutside = true,
  menuClassName,
  triggerClassName,
  closeOnScroll,
  stayFixed,
  closeOnClick = true,
  shouldShow,
}) {
  const [show, setShow] = useState(false);
  const [dropDownWidth, setWidth] = useState(0);
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const { width } = useWindowDimensions();

  const clickRef = useRef();
  const clickRef2 = useRef();

  useClickOutside([clickRef, !closeOnClick ? clickRef2 : []], () => {
    if (closeOnClickOutside) {
      setShow(shouldShow || false);
    }
  });

  const showMenu = (e) => {
    const rect = e.target.getBoundingClientRect();
    const { left } = rect;
    const top = rect.top + rect.height + (stayFixed ? 0 : window.scrollY);
    setCoords({
      left,
      top,
    });
    setShow(true);
  };

  const test = useCallback(() => {
    if (closeOnScroll) return setShow(false);
    return null;
  }, [closeOnScroll]);

  useEffect(() => {
    document.addEventListener("scroll", test);
    return () => {
      document.removeEventListener("scroll", test);
    };
  }, [test]);

  useEffect(() => {
    setShow(shouldShow);
  }, [shouldShow]);

  const getDropdownWidth = (el) => {
    if (!el) return;
    let prevValue = JSON.stringify(el.getBoundingClientRect());
    const handle = setInterval(() => {
      const nextValue = JSON.stringify(el.getBoundingClientRect());
      if (nextValue === prevValue) {
        clearInterval(handle);
        setWidth(el.getBoundingClientRect().width);
      } else {
        prevValue = nextValue;
      }
    }, 100);
  };

  const getPosition = () => {
    switch (direction) {
      case "start-right":
        return "80%";

      case "end-right":
        return "-12%";

      case "center":
        return 50;

      case "end-left":
        return "-90%";

      case "start-left":
      default:
        return "0";
    }
  };

  const getOffset = () => (offsetTop ? `${offsetTop}px` : 0);

  return (
    <DropdownWrapper ref={clickRef} className="dropdown-wrapper-class">
      <div
        className={`trigger-container ${triggerClassName || ""}`}
        onClick={showMenu}
        role="button"
        tabIndex="0"
      >
        {trigger}
      </div>

      {show && (
        <Portal>
          <DropdownMenu
            style={{
              left: coords.left,
              top: coords.top,
              ...(dropDownWidth + coords.left > width && {
                transform: `translateX(-75%)`,
              }),
              transform: `translate(${
                positionX || getPosition()
              }, ${getOffset()})`,
              position: stayFixed ? "fixed" : "absolute",
            }}
            ref={getDropdownWidth}
            className={`prospa-dropdown-menu ${menuClassName || ""}`}
          >
            <div ref={clickRef2}>
              {options
                ? options.map((item) => (
                    <DropdownItem key={item.name} onClick={item.action}>
                      {item.name}
                    </DropdownItem>
                  ))
                : children}
            </div>
          </DropdownMenu>
        </Portal>
      )}
    </DropdownWrapper>
  );
}

Dropdown.propTypes = {
  children: node,
  trigger: any,
  options: array,
  direction: oneOf(["start-right", "start-left", "end-right", "end-left"]),
  offsetTop: oneOfType([number, string]),
  positionX: oneOfType([number, string]),
  closeOnClickOutside: bool,
  menuClassName: string,
  triggerClassName: string,
  closeOnScroll: bool,
  stayFixed: bool,
  closeOnClick: bool,
};

export { DropdownItem } from "./Dropdown.style";
