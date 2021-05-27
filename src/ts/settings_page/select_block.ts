import { Control } from "../controls";
import { OptionSelect } from "./options";

export class SelectBlockCategory extends Control {
  firstOption = new OptionSelect(this.element, '', 'select game cards type', true, true);
  firstOption1 = new OptionSelect(this.element, '1', 'pets', false, false);
  firstOption2 = new OptionSelect(this.element, '2', 'country', false, false);
}

export class SelectBlockDifficulty extends Control {
  firstOption = new OptionSelect(this.element, '', 'select game cards', true, true);
  firstOption1 = new OptionSelect(this.element, '2', '4x2', false, false);
  firstOption2 = new OptionSelect(this.element, '3', '4x3', false, false);
  firstOption3 = new OptionSelect(this.element, '4', '4x4', false, false);

}