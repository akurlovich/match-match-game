import { Control } from "../controls";
import { OptionSelect } from "./options";

export class SelectBlockCategory extends Control {
  firstOption = new OptionSelect(this.element, '', 'select game cards type', true, true);
  firstOption1 = new OptionSelect(this.element, 'pets', 'pets', false, false);
  firstOption2 = new OptionSelect(this.element, 'country', 'country', false, false);
}

export class SelectBlockDifficulty extends Control {
  firstOption = new OptionSelect(this.element, '', 'select game cards', true, true);
  firstOption1 = new OptionSelect(this.element, '4', '4x4', false, false);
  firstOption2 = new OptionSelect(this.element, '6', '6x6', false, false);
  firstOption3 = new OptionSelect(this.element, '8', '8x8', false, false);

}