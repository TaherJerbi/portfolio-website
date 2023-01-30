import { classList } from "@/utils";
import {
  AnimationProps,
  DraggableProps,
  motion,
  useDragControls,
} from "framer-motion";
import { PointerEventHandler } from "react";

function FloatingDragContainer({
  children,
  onClick,
  open,
  className,
  width,
  height,
  initial = {
    width: "0",
    height: "0",
    opacity: 0,
  },
  escapeX = 100,
  escapeY = 100,
  transition = {
    duration: 0.5,
    ease: "easeInOut",
  },
  dragConstraints,
  dragTransition,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  open: boolean;
  className: string;
  width: string;
  height: string;
  initial?: AnimationProps["initial"];
  escapeX?: number;
  escapeY?: number;
  transition?: AnimationProps["transition"];
  dragConstraints?: DraggableProps["dragConstraints"];
  dragTransition?: DraggableProps["dragTransition"];
}) {
  const controls = useDragControls();
  const onPointerDown: PointerEventHandler<HTMLDivElement> = (e) => {
    controls.start(e);
  };

  return (
    <motion.div
      onClick={onClick}
      className={classList("absolute", {
        [className]: !!className,
      })}
      initial={initial}
      animate={{
        width: !open ? "0px" : width,
        height: !open ? "0px" : height,
        opacity: !open ? 0 : 1,
        x: !open ? escapeX : undefined,
        y: !open ? escapeY : undefined,
      }}
      transition={transition}
      dragControls={controls}
      onPointerDown={onPointerDown}
      drag
      dragConstraints={dragConstraints}
      dragTransition={dragTransition}
    >
      {children}
    </motion.div>
  );
}

export default FloatingDragContainer;
