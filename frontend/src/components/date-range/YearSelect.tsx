import { Select, SelectOption } from 'components/select/Select';
import { addYears, format, startOfYear, eachYearOfInterval } from 'date-fns';

interface YearSelectProps {
  activeYear: Date;
  onChange?: Function;
}

export const YearSelect: React.FC<YearSelectProps> = ({ activeYear, onChange }) => {
  const startOfYearDate = startOfYear(new Date());
  const yearsInterval = { start: startOfYearDate, end: addYears(startOfYearDate, 5) };
  const years = eachYearOfInterval(yearsInterval);

  const toSelectOption = (year: Date): SelectOption => {
    return {
      label: format(year, 'yyyy'),
      value: year
    };
  };
  const options = years.map(year => toSelectOption(year));

  return (
    <div className="w-36">
      <Select
        items={options}
        label="Year"
        selectedItem={toSelectOption(activeYear)}
        onSelectedItemChange={({ selectedItem }) => onChange(selectedItem.value)}
      />
    </div>
  );
};
