import NestedParentList from "@/components/Common/nestedParentList";
import { arch5005Classes } from "@/lib/ARCN5005/classes";

const classes = arch5005Classes.map((cl) => cl.title);

export default function TOC() {
  return (
    <div className=" flex items-center justify-center z-50">
      <NestedParentList list={arch5005Classes} />
    </div>
  );
}