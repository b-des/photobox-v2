import {OptionItem} from "./OptionItem";
import SerializableMap from "../../utils/SerializableMap";

export interface Option{
    description: string; // full option description
    label: string; // option label, is used to determine option behavior
    name: string;  // option name
    selected_name: string | null; // selected option item name
    option_id: string; // option id
    option_values: OptionItem[]; // list of option variants
    option_values_map: SerializableMap<string, OptionItem>; // map of option variants
}
