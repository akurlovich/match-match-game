import { Control } from "../controls";
import { OptionSelect } from "./options";

export class SelectBlock extends Control {
  firstOption = new OptionSelect(this.element, '', 'select game cards type', true, true);
  firstOption1 = new OptionSelect(this.element, '4x4', '4x4', false, false);
  firstOption2 = new OptionSelect(this.element, '6x6', '6x6', false, false);
  firstOption3 = new OptionSelect(this.element, '8x8', '8x8', false, false);

}