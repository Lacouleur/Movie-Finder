import theme from '../../styles/theme';

export const optGenre = [
  { value: '0', label: 'Tous' },
  { value: '28', label: 'Action' },
  { value: '27', label: 'Horror' },
  { value: '10749', label: 'Amour' },
];

export const customStyles = {
  container: (base) => ({
    ...base,
    margin: ' 3% 0 0 1em ',
    display: 'inline-block',
  }),
  control: (base, state) => ({
    ...base,
    background: state.isFocused ? theme.colors.grey : 'hidden',
    color: theme.colors.offWhite,
    borderColor: theme.colors.offWhite,
    borderWidth: '1px',
    width: '193px',
    height: '40px',
    margin: 0,
    padding: 0,
    borderRadius: state.menuIsOpen ? '25px 25px 0 0' : '25px',
  }),
  valueContainer: (base, state) => ({
    background: state.isFocused ? theme.colors.grey : 'hidden',
    margin: 0,
    padding: 0,
    ...base,
  }),
  option: (base) => ({
    ...base,
    verticalAlign: 'middle',
    margin: 0,
    backgroundColor: theme.colors.grey,
    maxWidth: '193px',
    height: '40px',
    borderTop: `1px solid ${theme.colors.offWhite}`,
    '&:first-of-type': { borderTop: 0 },
    '&:hover': { backgroundColor: theme.colors.darkBlue },
  }),
  menu: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
 
  }),
  menuList: (base) => ({
    borderTop: 0,
    borderRadius: '0 0 25px 25px',
    border: `1px solid ${theme.colors.offWhite}`,
    ...base,
    margin: 0,
    padding: 0,
    color: theme.colors.offWhite,
    maxWidth: '193px',
  }),
  indicatorSeparator: (base) => ({
    margin: 0,
    padding: 0,
    ...base,
  }),

};
