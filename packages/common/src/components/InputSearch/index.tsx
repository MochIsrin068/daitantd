import { Input} from "antd-component";

const { Search } = Input;

type TPropsInputSearch = {
  defaultValue?: string;
  placeholder?: string;
  onSearch?: (value: any, _e: any, info: any) => void;
  allowClear?: boolean;
  className?: string;
  suffix?: any
}

export const InputSearch = ({ placeholder, onSearch, allowClear, className, suffix, defaultValue }: TPropsInputSearch) => {
  return (
    <div className="p-2 bg-gray-100">
      <Search placeholder={placeholder} onSearch={onSearch} enterButton allowClear={allowClear} className={className} suffix={suffix} value={defaultValue} />
    </div>
  );
};

export default InputSearch;