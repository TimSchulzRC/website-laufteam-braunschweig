type Color =
  | { label: "Rot"; value: "#BF2C38" }
  | { label: "Orange"; value: "#C9824A" }
  | { label: "Dunkelblau"; value: "#30313E" }
  | { label: "Grau"; value: "#86848A" }
  | { label: "OffWhite"; value: "#E7E5E2" };

export default Color;

export type DefaultColors = "red" | "orange" | "darkBlue" | "grey" | "offWhite";
